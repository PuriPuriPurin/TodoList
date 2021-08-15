import { useContext, memo, VFC } from 'react';
import { AppContext, Filter } from './appContext';

const Selector: VFC = () => {
  const { dispatch } = useContext(AppContext);
  const handleOnFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: 'filter', value: e.target.value as Filter });
  };

  return (
    <select
      defaultValue='all'
      onChange={handleOnFilter}
    >
      <option value='all'>すべてのタスク</option>
      <option value='checked'>完了したタスク</option>
      <option value='unchecked'>未完了のタスク</option>
      <option value='removed'>削除済みのタスク</option>
    </select>
  );
};

export default memo(Selector);
