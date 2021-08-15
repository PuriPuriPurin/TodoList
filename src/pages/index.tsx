import type { NextPage } from 'next';
import { useEffect, useReducer } from 'react';
import localforage from 'localforage';
import {
  Col, Container, Navbar, Row,
} from 'react-bootstrap';
import {
  AppContext, State, Action, Todo,
} from '../components/appContext';
import CommonHead from '../components/commonHead';
import Selector from '../components/selector';
import FilteredTodos from '../components/filteredTodos';
import EmptyButton from '../components/emptyButton';
import Form from '../components/form';

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'change': {
      return { ...state, text: action.value };
    }
    case 'submit': {
      if (!state.text) return state;

      const newTodo: Todo = {
        value: state.text,
        id: new Date().getTime(),
        checked: false,
        removed: false,
      };
      return { ...state, todos: [newTodo, ...state.todos], text: '' };
    }
    case 'filter': {
      return { ...state, filter: action.value };
    }
    case 'edit': {
      const newTodos = state.todos.map((todo) => {
        if (todo.id === action.id) {
          const newTodo: Todo = { ...todo, value: action.value };
          return newTodo;
        }
        return todo;
      });
      return { ...state, todos: newTodos };
    }
    case 'check': {
      const newTodos = state.todos.map((todo) => {
        if (todo.id === action.id) {
          const checkedTodo: Todo = { ...todo, checked: !action.checked };
          return checkedTodo;
        }
        return todo;
      });
      return { ...state, todos: newTodos };
    }
    case 'remove': {
      const newTodos = state.todos.map((todo) => {
        if (todo.id === action.id) {
          const removedTodo: Todo = { ...todo, removed: !action.removed };
          return removedTodo;
        }
        return todo;
      });
      return { ...state, todos: newTodos };
    }
    case 'empty': {
      const newTodos = state.todos.filter((todo) => !todo.removed);
      return { ...state, todos: newTodos };
    }
    case 'restore': {
      return { ...state, todos: action.todos, text: '' };
    }
    default:
      return state;
  }
};

const initialState: State = {
  text: '',
  todos: [],
  filter: 'all',
};

const storage = localforage.createInstance({
  driver: localforage.LOCALSTORAGE,
  name: 'todoList',
  storeName: 'todoItems',
  version: 1,
});

const Home: NextPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // localstrage から読み込む
    storage.getItem<Todo[]>('todoItems')
      .then((value) => {
        if (value) {
          dispatch({ type: 'restore', todos: value });
        }
      })
      .catch((e) => {
        throw new Error(e);
      });
  }, []);

  useEffect(() => {
    storage.setItem<Todo[]>('todoItems', state.todos)
      .catch((e) => {
        throw new Error(e);
      });
  }, [state.todos]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <CommonHead />
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand>Simple Todo List</Navbar.Brand>
        </Container>
      </Navbar>
      <Container className='mt-4'>
        <Row>
          <Col xs={12} sm={4}>
            <Selector />
          </Col>
          <Col xs={12} sm={8}>
            {state.filter === 'removed' ? (
              <EmptyButton />
            ) : (
              <Form />
            )}
          </Col>
        </Row>
        <Row>
          <FilteredTodos />
        </Row>
      </Container>
    </AppContext.Provider>
  );
};

export default Home;
