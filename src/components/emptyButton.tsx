import { memo, useContext, VFC } from 'react';
import { AppContext } from './appContext';

const EmptyButton: VFC = () => {
  const { dispatch } = useContext(AppContext);
  const handleOnEmpty = () => {
    dispatch({ type: 'empty' });
  };

  return (
    <button
      type='button'
      onClick={handleOnEmpty}
    >
      ゴミ箱を空にする
    </button>
  );
};

export default memo(EmptyButton);
