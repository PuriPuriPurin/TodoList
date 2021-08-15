import { createContext, Dispatch } from 'react';

export type Filter = 'all' | 'checked' | 'unchecked' | 'removed';

export type Action =
  | {type: 'change', value: string}
  | {type: 'filter', value: Filter}
  | {type: 'submit'}
  | {type: 'empty'}
  | {type: 'edit', id: number, value: string}
  | {type: 'check', id: number, checked: boolean}
  | {type: 'remove', id: number, removed: boolean}
  | {type: 'restore', todos: Todo[]};

export type Todo = {
  value: string;
  id: number;
  checked: boolean;
  removed: boolean;
};

export type State = {
  text: string;
  todos: Todo[];
  filter: Filter;
};

export const AppContext = createContext({} as {
  state: State;
  dispatch: Dispatch<Action>
});
