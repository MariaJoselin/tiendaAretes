'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { UserCircle } from 'lucide-react';
import styles from '../app/styles/Header.module.css';

export default function Header() {
    const [nombreUsuario, setNombreUsuario] = useState('');
    const router = useRouter();

    useEffect(() => {
        const nombre = localStorage.getItem('nombreUsuario');
        if (nombre) {
            setNombreUsuario(nombre);
        }
    }, []);

    const cerrarSesion = () => {
        localStorage.removeItem('nombreUsuario');
        localStorage.removeItem('token');
        setNombreUsuario('');
        router.push('/');
    };

    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <Link href="/sitio" className={styles.logo}>
                    <Image
                        src="/imagenes/logo3.png"
                        alt="Logo Aretes"
                        width={140}   // ancho aumentado para mejor visibilidad
                        height={50}   // altura ligeramente mayor
                        priority
                    />
                </Link>

                <ul className={styles.navList}>
                    <li className={styles.navListItem}>
                        <Link href="/sitio/productos">Productos</Link>
                    </li>
                    <li className={styles.navListItem}>
                        <Link href="/sitio/contacto">Contacto</Link>
                    </li>
                    <li className={styles.navListItem}>
                        <Link href="/sitio/carrito">Carrito</Link>
                    </li>
                </ul>

                {nombreUsuario ? (
                    <div className={styles.perfil}>
                        <UserCircle size={28} className={styles.iconoPerfil} />
                        <span className={styles.nombreUsuario}>{nombreUsuario}</span>
                        <button onClick={cerrarSesion} className={styles.botonCerrar}>
                            Cerrar sesión
                        </button>
                    </div>
                ) : (
                    <Link href="/" className={styles.botonLogin}>
                        Iniciar sesión
                    </Link>
                )}
            </nav>
        </header>
    );
}
