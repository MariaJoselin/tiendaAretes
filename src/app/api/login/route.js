import connectToDatabase from '../../lib/db';
import Usuario from '../../models/User';
import jwt from 'jsonwebtoken';

export async function POST(request) {
    try {
        await connectToDatabase();

        const { email, password } = await request.json();

        if (!email || !password) {
            return new Response(JSON.stringify({ message: 'Faltan datos' }), { status: 400 });
        }

        const user = await Usuario.findOne({ email });
        if (!user) {
            return new Response(JSON.stringify({ message: 'Usuario no encontrado' }), { status: 401 });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return new Response(JSON.stringify({ message: 'Contraseña incorrecta' }), { status: 401 });
        }

        // Crear token JWT
        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );

        return new Response(
            JSON.stringify({ nombre: user.nombre, token }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );

    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: 'Error interno' }), { status: 500 });
    }
}
