import { memo, useContext } from 'react';
import { AppContext } from './appContext';

const Form: React.VFC = () => {
  const { state, dispatch } = useContext(AppContext);
  const handleOnSubmit = (
    e: React.FormEvent<HTMLFormElement | HTMLInputElement>,
  ) => {
    // ページのリロードを抑止
    e.preventDefault();
    dispatch({ type: 'submit' });
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'change', value: e.target.value });
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type='text'
        value={state.text}
        disabled={state.filter === 'checked'}
        onChange={handleOnChange}
      />
      <input
        type='submit'
        value='追加'
        disabled={state.filter === 'checked'}
        onChange={handleOnSubmit}
      />
    </form>
  );
};

export default memo(Form);
