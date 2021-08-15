import { memo, useContext, VFC } from 'react';
import {
  Button, FormControl, InputGroup,
} from 'react-bootstrap';
import { AppContext } from './appContext';

const FilteredTodos: VFC = () => {
  const { state, dispatch } = useContext(AppContext);
  const handleOnEdit = (id: number, value: string) => {
    dispatch({ type: 'edit', id, value });
  };

  const handleOnCheck = (id: number, checked: boolean) => {
    dispatch({ type: 'check', id, checked });
  };

  const handleOnRemove = (id: number, removed: boolean) => {
    dispatch({ type: 'remove', id, removed });
  };

  const filteredTodos = state.todos.filter((todo) => {
    switch (state.filter) {
      case 'all':
        return !todo.removed;
      case 'checked':
        return todo.checked && !todo.removed;
      case 'unchecked':
        return !todo.checked && !todo.removed;
      case 'removed':
        return todo.removed;
      default:
        return todo;
    }
  });

  return (
    <div className='mt-3'>
      {filteredTodos.map((todo) => (
        <div key={todo.id}>
          <InputGroup className='mb-2'>
            <InputGroup.Checkbox
              disabled={todo.removed}
              checked={todo.checked}
              onChange={() => handleOnCheck(todo.id, todo.checked)}
            />
            <FormControl
              disabled={todo.checked || todo.removed}
              value={todo.value}
              onChange={(e) => handleOnEdit(todo.id, e.target.value)}
            />
            <Button
              onClick={() => handleOnRemove(todo.id, todo.removed)}
              variant='outline-secondary'
            >
              {todo.removed ? '復元' : '削除'}
            </Button>
          </InputGroup>
        </div>
      ))}
    </div>
  );
};

export default memo(FilteredTodos);
