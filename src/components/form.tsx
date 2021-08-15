import { memo, useContext } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
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
      <InputGroup>
        <FormControl
          placeholder='やるべきことを入力'
          value={state.text}
          disabled={state.filter === 'checked'}
          onChange={handleOnChange}
        />
        <Button
          variant='outline-primary'
          type='submit'
          disabled={state.filter === 'checked'}
          onChange={handleOnSubmit}
        >
          追加
        </Button>
      </InputGroup>
    </form>
  );
};

export default memo(Form);
