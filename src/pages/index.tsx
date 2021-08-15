import type { NextPage } from 'next';
import Head from 'next/head';
import { useReducer } from 'react';
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
    default:
      return state;
  }
};

const initialState: State = {
  text: '',
  todos: [],
  filter: 'all',
};

const Home: NextPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <CommonHead />
      <Head>
        <title>NEXT.JS app template</title>
      </Head>
      <div>
        <Selector />
        {state.filter === 'removed' ? (
          <EmptyButton />
        ) : (
          <Form />
        )}
        <FilteredTodos />
      </div>
    </AppContext.Provider>
  );
};

export default Home;
