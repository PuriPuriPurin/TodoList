import { memo, useContext, VFC } from 'react';
import { Button } from 'react-bootstrap';
import { AppContext } from './appContext';

const EmptyButton: VFC = () => {
  const { dispatch } = useContext(AppContext);
  const handleOnEmpty = () => {
    dispatch({ type: 'empty' });
  };

  return (
    <Button
      type='button'
      variant='danger'
      onClick={handleOnEmpty}
    >
      ゴミ箱を空にする
    </Button>
  );
};

export default memo(EmptyButton);
