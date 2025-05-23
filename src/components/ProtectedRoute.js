'use client';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ProtectedRoute({ children }) {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push('/'); // Redirige si no está autenticado
        }
    }, [user, router]);

    if (!user) return null; // o un spinner

    return children;
}
