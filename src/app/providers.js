'use client';

import { AuthProvider } from '@/context/AuthContext';
import { CarritoProvider } from '@/context/CarritoContext';

export function Providers({ children }) {
    return (
        <AuthProvider>
            <CarritoProvider>{children}</CarritoProvider>
        </AuthProvider>
    );
}
