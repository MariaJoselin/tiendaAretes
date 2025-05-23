'use client';

import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { FaUser } from 'react-icons/fa';

export default function AuthNav() {
    const { user } = useAuth();

    return (
        <li>
            {user ? (
                <span className="nav-user">
                    <FaUser className="icon" />
                    {user.nombre}
                </span>
            ) : (
                <Link href="/login" className="nav-link">
                    <FaUser className="icon" />
                    Iniciar Sesión
                </Link>
            )}
        </li>
    );
}
