// app/layout.js
import './globals.css'
import './layout/layout.css'
import Link from 'next/link'

export const metadata = {
  title: 'Tienda de Aretes',
  description: 'Aretes hechos a mano con amor',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <header className="header">
          <nav className="navbar">
            <Link href="/">Inicio</Link>
            <Link href="/productos">Productos</Link>
            <Link href="/contacto">Contacto</Link>
          </nav>
        </header>

        <main className="main-content">{children}</main>

        <footer className="footer">
          © 2025 Matatena - Aretes Artesanales. Todos los derechos reservados.
        </footer>
      </body>
    </html>
  )
}
