// app/layout.js
import './globals.css'
import './layout/layout.css'
import Link from 'next/link'
import { CarritoProvider } from '@/context/CarritoContext'

// Importamos los íconos de React Icons
import { FaHome, FaBoxOpen, FaEnvelope, FaShoppingCart } from 'react-icons/fa'

export const metadata = {
  title: 'Tienda de Aretes',
  description: 'Aretes hechos a mano con amor',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <CarritoProvider>
          <header className="header">
            <nav className="navbar">
              <ul className="nav-list">
                <li>
                  <Link href="/" className="nav-link">
                    <FaHome className="icon" />
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="/productos" className="nav-link">
                    <FaBoxOpen className="icon" />
                    Productos
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="nav-link">
                    <FaEnvelope className="icon" />
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link href="/carrito" aria-label="Ver carrito" className="carrito-link">
                    <FaShoppingCart className="icon" />
                  </Link>
                </li>
              </ul>
            </nav>
          </header>

          <main className="main-content">{children}</main>

          <footer className="footer">
            © 2025 Matatena - Aretes Artesanales. Todos los derechos reservados.
          </footer>
        </CarritoProvider>
      </body>
    </html>
  )
}
