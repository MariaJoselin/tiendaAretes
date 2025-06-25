'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useContext, useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { UserCircle } from 'lucide-react';
import styles from '../app/styles/Header.module.css';
import { AuthContext } from '../context/AuthContext';

export default function Header() {
    const { user, logout } = useContext(AuthContext); // ← CAMBIO AQUÍ
    const router = useRouter();

    const [menuAbierto, setMenuAbierto] = useState(false);
    const perfilRef = useRef(null);

    const cerrarSesion = () => {
        logout();
        router.push('/');
    };

    // Cierra el menú al hacer clic fuera
    useEffect(() => {
        const handleClickFuera = (event) => {
            if (perfilRef.current && !perfilRef.current.contains(event.target)) {
                setMenuAbierto(false);
            }
        };
        document.addEventListener('mousedown', handleClickFuera);
        return () => {
            document.removeEventListener('mousedown', handleClickFuera);
        };
    }, []);

    return (
        <header className={styles.header}>
            <meta name="description" content="Inicia sesión en Matatena para acceder a tus actividades, recursos y más." />
            <nav className={styles.navbar}>
                <Link href="/sitio" className={styles.logo}>
                    <Image
                        src="/imagenes/logo3.png"
                        alt="Logo Aretes"
                        width={140}
                        height={50}
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

                {user ? (
                    <div
                        className={styles.perfil}
                        onClick={() => setMenuAbierto(!menuAbierto)}
                        ref={perfilRef}
                        tabIndex={0}
                        role="button"
                        aria-haspopup="true"
                        aria-expanded={menuAbierto}
                    >
                        <UserCircle size={28} className={styles.iconoPerfil} />
                        <span className={styles.nombreUsuario}>{user}</span> {/* ← CAMBIO AQUÍ */}

                        {menuAbierto && (
                            <div className={styles.menuDesplegable}>
                                <Link href="/sitio/perfil" className={styles.menuItem}>
                                    Mi Perfil
                                </Link>
                                <button onClick={cerrarSesion} className={styles.menuItemBoton}>
                                    Cerrar sesión
                                </button>
                            </div>
                        )}
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
