'use client';

import React, { createContext, useState, useEffect, useContext } from 'react';

// Crear el contexto
export const AuthContext = createContext({
    user: '',
    token: '',
    login: (user, token) => { },
    logout: () => { },
});

// Hook para consumir el contexto más fácil
export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState('');
    const [token, setToken] = useState('');

    useEffect(() => {
        const userStorage = localStorage.getItem('user') || '';
        const tokenStorage = localStorage.getItem('token') || '';
        setUser(userStorage);
        setToken(tokenStorage);
    }, []);

    const login = (user, token) => {
        localStorage.setItem('user', user);
        localStorage.setItem('token', token);
        setUser(user);
        setToken(token);
    };

    const logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        setUser('');
        setToken('');
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
