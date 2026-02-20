import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Check if user is already logged in when the app loads
  useEffect(() => {
    const loggedInUser = localStorage.getItem('alday_active_user');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  // 1. Register Function
  const register = (userData) => {
    // Get existing users from "database" (localStorage)
    const users = JSON.parse(localStorage.getItem('alday_users_db')) || [];
    
    // Check if email already exists
    if (users.find(u => u.email === userData.email)) {
      return { success: false, message: 'An account with this email already exists.' };
    }

    // Save new user
    users.push(userData);
    localStorage.setItem('alday_users_db', JSON.stringify(users));

    // Auto-login after registration (remove password for safety in active session)
    const { password, ...safeUser } = userData;
    setUser(safeUser);
    localStorage.setItem('alday_active_user', JSON.stringify(safeUser));
    
    return { success: true, message: 'Registration successful!' };
  };

  // 2. Login Function
  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem('alday_users_db')) || [];
    const foundUser = users.find(u => u.email === email && u.password === password);

    if (foundUser) {
      const { password, ...safeUser } = foundUser;
      setUser(safeUser);
      localStorage.setItem('alday_active_user', JSON.stringify(safeUser));
      return { success: true, message: 'Login successful!' };
    }
    return { success: false, message: 'Invalid email or password.' };
  };

  // 3. Logout Function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('alday_active_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};