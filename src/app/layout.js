// app/layout.js
import './globals.css'
import './layout/layout.css'
import Link from 'next/link'
import { CarritoProvider } from '@/context/CarritoContext'

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
            <Link href="/">Inicio</Link>
            <Link href="/productos">Productos</Link>
            <Link href="/contacto">Contacto</Link>
            <Link href="/carrito">
              <button className="bg-pink-500 text-white px-4 py-2 rounded">
                Ver carrito
              </button>
            </Link>
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
