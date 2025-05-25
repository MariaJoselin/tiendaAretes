'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import '../styles/globals.css';

export default function RegistroPage() {
    const router = useRouter();
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        if (!nombre || !email || !password) {
            setError('Todos los campos son obligatorios');
            return;
        }

        try {
            const res = await fetch('/api/registro', {
                method: 'POST',
                body: JSON.stringify({ nombre, email, password }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (res.ok) {
                setError('');
                router.push('/');
            } else {
                setError('Error al registrar usuario');
            }
        } catch (err) {
            setError('Fallo en la conexión');
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h1 className="login-title">Crear Cuenta</h1>
                {error && <p className="error-message">{error}</p>}

                <form onSubmit={handleRegister}>
                    <div>
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            placeholder="Tu nombre completo"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </div>

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
                            placeholder="Mínimo 6 caracteres"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button type="submit">Registrarse</button>
                </form>

                <p className="register-text">
                    ¿Ya tienes cuenta? <a href="/">Inicia sesión</a>
                </p>
            </div>
        </div>
    );
}
