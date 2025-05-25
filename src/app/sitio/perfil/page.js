'use client'; // Esto es necesario si usas Next.js 13 con React Server Components

import { useEffect, useState } from 'react';
import styles from '../../styles/Perfil.module.css'; // Ajusta la ruta según tu estructura

export default function PerfilPage() {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                // Obtener el token del localStorage
                const token = localStorage.getItem('token');
                if (!token) {
                    setError('No estás autenticado. Por favor inicia sesión.');
                    setLoading(false);
                    return;
                }

                // Hacer la petición a la API enviando el token en la cabecera Authorization
                const res = await fetch('/api/usuarios/me', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!res.ok) {
                    if (res.status === 401) {
                        setError('Token inválido o expirado. Por favor inicia sesión de nuevo.');
                    } else {
                        setError('Error al obtener datos del usuario');
                    }
                    setLoading(false);
                    return;
                }

                const data = await res.json();
                setUserData(data);
            } catch (err) {
                setError('Error en la conexión con el servidor');
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    if (loading) return <p className={styles.loading}>Cargando datos...</p>;
    if (error) return <p className={styles.error}>Error: {error}</p>;

    return (
        <div className={styles.perfilContainer}>
            <h1 className={styles.titulo}>Mi Perfil</h1>
            <div className={styles.infoUsuario}>
                <p><strong>Nombre:</strong> {userData.nombre}</p>
                <p><strong>Email:</strong> {userData.email}</p>
                <p><strong>Fecha de registro:</strong> {new Date(userData.fechaRegistro).toLocaleDateString()}</p>
            </div>
        </div>
    );
}
