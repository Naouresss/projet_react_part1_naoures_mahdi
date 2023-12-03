// __tests__/Integration.test.js

import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import UserList from "../UserList";

test("integration test for happy path", async () => {
  const { getByText, getByPlaceholderText } = render(<UserList />);
  const input = getByPlaceholderText(/Rechercher un utilisateur/i);
  const button = getByText(/Rechercher/i);

  fireEvent.change(input, { target: { value: "John" } });
  fireEvent.click(button);

  await waitFor(() => {
    expect(getByText(/John/)).toBeInTheDocument();
  });
});

// Ajoutez d'autres tests d'intégration pour différents scénarios
