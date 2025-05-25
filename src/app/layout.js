// app/layout.js o app/sitio/layout.js
'use client';

import { AuthProvider } from '../context/AuthContext';
import { CarritoProvider } from '../context/CarritoContext';

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <AuthProvider>
          <CarritoProvider>
            {children}
          </CarritoProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
