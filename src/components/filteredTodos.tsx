import { memo, useContext, VFC } from 'react';
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
    <ul>
      {filteredTodos.map((todo) => (
        <li key={todo.id}>
          <input
            type='checkbox'
            disabled={todo.removed}
            checked={todo.checked}
            onChange={() => handleOnCheck(todo.id, todo.checked)}
          />
          <input
            type='text'
            disabled={todo.checked || todo.removed}
            value={todo.value}
            onChange={(e) => handleOnEdit(todo.id, e.target.value)}
          />
          <button
            type='button'
            onClick={() => handleOnRemove(todo.id, todo.removed)}
          >
            {todo.removed ? '復元' : '削除'}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default memo(FilteredTodos);
