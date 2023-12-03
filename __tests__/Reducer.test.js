// __tests__/reducer.test.js

import reducer from '../reducer';

test('reducer handles SET_USERS action', () => {
  const initialState = { users: [], searchTerm: '' };
  const action = { type: 'SET_USERS', payload: [{ id: 1, name: 'John' }] };
  const newState = reducer(initialState, action);

  expect(newState.users).toEqual([{ id: 1, name: 'John' }]);
});

// Ajoutez d'autres tests unitaires pour d'autres cas du reducer
