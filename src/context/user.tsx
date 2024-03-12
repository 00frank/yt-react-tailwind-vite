import React, { createContext, useState } from 'react';
import { LoggedUserType } from '@types';

// Create a new context for the user
export const UserContext = createContext<any>(null);

// Create a UserProvider component to wrap your app with
export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<LoggedUserType | null>(null);

  // Function to update the user
  const updateUser = (newUser: LoggedUserType) => {
    setUser(newUser);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};