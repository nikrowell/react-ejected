import React from 'react';
import { AuthProvider } from './auth';

export default ({children}) => (
  <AuthProvider>
    {children}
  </AuthProvider>
);