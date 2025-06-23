import { NextResponse } from 'next/server';
import User from '../../models/User'; // asegúrate que la ruta es correcta
import connectDB from '../../lib/db'; // tu función para conectar a MongoDB
import bcrypt from 'bcryptjs';

export async function POST(req) {
    try {
        await connectDB(); // Conexión a MongoDB

        const body = await req.json();
        const { nombre, email, password } = body;

        // Validación simple
        if (!nombre || !email || !password) {
            return NextResponse.json({ error: 'Faltan campos' }, { status: 400 });
        }

        const existeUsuario = await User.findOne({ email });
        if (existeUsuario) {
            return NextResponse.json({ error: 'El usuario ya existe' }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const nuevoUsuario = new User({ nombre, email, password: hashedPassword });

        await nuevoUsuario.save();

        return NextResponse.json({ message: 'Usuario creado correctamente' }, { status: 201 });
    } catch (error) {
        console.error('Error en registro:', error);
        return NextResponse.json({ error: 'Error del servidor' }, { status: 500 });
    }
}
