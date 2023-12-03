// __tests__/UserList.test.js

import React from 'react';
import { render } from '@testing-library/react';
import UserList from '../UserList';

test('renders UserList component', () => {
  const { getByText } = render(<UserList />);
  const linkElement = getByText(/Liste des utilisateurs GitHub/i);
  expect(linkElement).toBeInTheDocument();
});

// Ajoutez d'autres tests unitaires pour d'autres fonctionnalités du composant
