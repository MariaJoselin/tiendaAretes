'use client';

import { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Head from 'next/head'; // <--- Importar Head
import { AuthContext } from '../context/AuthContext';
import './styles/globals.css';

export default function LoginPage() {
    const router = useRouter();
    const { login } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Todos los campos son obligatorios');
            return;
        }

        try {
            const res = await fetch('/api/login', {
                method: 'POST',
                body: JSON.stringify({ email, password }),
                headers: { 'Content-Type': 'application/json' },
            });

            const data = await res.json();

            if (res.ok) {
                setError('');
                login(data.nombre, data.token);
                router.push('/sitio');
            } else {
                setError(data.message || 'Credenciales incorrectas');
            }
        } catch (err) {
            setError('Error al iniciar sesión');
        }
    };

    return (
        <div className="login-container">
            <Head>
                <title>Matatena - Inicia Sesión</title>
                <meta name="description" content="Inicia sesión en Matatena para acceder a tus actividades, recursos y más." />
            </Head>

            <div className="login-box">
                <h1 className="login-title">Iniciar Sesión</h1>
                {error && <p className="error-message">{error}</p>}

                <form onSubmit={handleLogin}>
                    <div>
                        <label htmlFor="email">Correo electrónico</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="ejemplo@correo.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Tu contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button type="submit">Entrar</button>
                </form>

                <p className="register-text">
                    ¿No tienes cuenta? <Link href="/registro">Regístrate aquí</Link>
                </p>
            </div>
        </div>
    );
}
