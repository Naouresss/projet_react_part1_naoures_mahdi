import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import './UserList.css'; 

const initialState = {
  users: [],
  searchTerm: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USERS':
      return { ...state, users: action.payload };
    case 'SET_SEARCH_TERM':
      return { ...state, searchTerm: action.payload };
    default:
      return state;
  }
};

const UserList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://api.github.com/users');
        dispatch({ type: 'SET_USERS', payload: response.data });
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleSearch = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(`https://api.github.com/search/users?q=${state.searchTerm}`);
      dispatch({ type: 'SET_USERS', payload: response.data.items });
    } catch (error) {
      console.error('Erreur lors de la recherche:', error);
    }
  };

  const handleInputChange = (event) => {
    dispatch({ type: 'SET_SEARCH_TERM', payload: event.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Rechercher un utilisateur..."
          value={state.searchTerm}
          onChange={handleInputChange}
        />
        <button type="submit">Rechercher</button>
      </form>

      <table>
        <thead>
          <tr>
          <th>id</th>
            <th>Avatar</th>
            <th>Login</th>
            <th>type</th>
            
          </tr>
        </thead>
        <tbody>
          {state.users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                <img src={user.avatar_url} alt={user.login} />
              </td>
              <td>{user.login}</td>
              <td>{user.type}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
