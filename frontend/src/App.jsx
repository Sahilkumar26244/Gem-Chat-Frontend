import React from 'react';
import AppRoutes from './routes/AppRoutes';
import { UserProvider } from './context/user.context';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <UserProvider>
        <AppRoutes />
      </UserProvider>
    </div>
  );
}

export default App;