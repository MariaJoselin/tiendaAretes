import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'tu_secreto_aqui'; // Usa variable de entorno segura

export function middleware(request) {
    const url = request.nextUrl.clone();

    // Define rutas protegidas
    const protectedPaths = ['/sitio/carrito', '/sitio/perfil'];

    if (protectedPaths.some(path => url.pathname.startsWith(path))) {
        const token = request.cookies.get('token')?.value;

        if (!token) {
            url.pathname = '/login';
            return NextResponse.redirect(url);
        }

        try {
            jwt.verify(token, SECRET);
            // Token válido, continúa
            return NextResponse.next();
        } catch (err) {
            // Token inválido o expirado
            url.pathname = '/login';
            return NextResponse.redirect(url);
        }
    }

    // Rutas no protegidas
    return NextResponse.next();
}

export const config = {
    matcher: ['/sitio/carrito/:path*', '/sitio/perfil/:path*'],
};
