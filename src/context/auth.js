import React, { createContext, useContext } from 'react';
import { isUndefined } from '../utils';

const Context = createContext();

function AuthProvider(props) {
  const value = {};
  return <Context.Provider value={value} {...props} />
}

function useAuth() {
  const context = useContext(Context);
  if (isUndefined(context)) throw new Error('useAuth must be used within a AuthProvider');
  return context;
}

export { AuthProvider, useAuth };