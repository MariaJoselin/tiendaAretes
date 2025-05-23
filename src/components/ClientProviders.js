'use client';

import { AuthProvider } from '@/context/AuthContext';
import { CarritoProvider } from '@/context/CarritoContext';

export default function ClientProviders({ children }) {
    return (
        <AuthProvider>
            <CarritoProvider>
                {children}
            </CarritoProvider>
        </AuthProvider>
    );
}
