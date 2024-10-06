import React from 'react';
import { UserProvider } from './components/UserContext';
import UserDisplay from './components/UserDisplay';

const App = () => {
  return (
    <UserProvider>
      <div>
        <h1>Bienvenido a la aplicación</h1>
        <UserDisplay />
      </div>
    </UserProvider>
  );
};

export default App;