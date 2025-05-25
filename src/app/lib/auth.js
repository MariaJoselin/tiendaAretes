// lib/auth.js
import jwt from 'jsonwebtoken';

export function getUserFromToken(token) {
    if (!token) return null;

    try {
        const secret = process.env.JWT_SECRET || 'secreto';
        // Si el token tiene "Bearer ", eliminarlo
        if (token.startsWith('Bearer ')) {
            token = token.slice(7, token.length);
        }
        const decoded = jwt.verify(token, secret);
        return decoded; // Aquí puede tener userId, email, etc.
    } catch (error) {
        return null;
    }
}
