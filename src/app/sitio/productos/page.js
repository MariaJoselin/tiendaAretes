"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Swal from 'sweetalert2';           // Importar SweetAlert
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import '../../styles/productos.css';

const productos = [
    {
        id: 1,
        nombre: 'Aretes Florales',
        descripcion: 'Diseño floral con toques delicados.',
        precio: '$15.99',
        tipo: 'Florales',
        imagen: '/imagenes/primavera1.jpeg',
    },
    {
        id: 2,
        nombre: 'Aretes Minimalistas',
        descripcion: 'Diseño sencillo en tonos plateados.',
        precio: '$12.50',
        tipo: 'Minimalistas',
        imagen: '/imagenes/aretes-minimalistas.jpg',
    },
    {
        id: 3,
        nombre: 'Aretes Bohemios',
        descripcion: 'Estilo bohemio con materiales naturales.',
        precio: '$18.75',
        tipo: 'Bohemios',
        imagen: '/imagenes/aretes-bohemios.jpg',
    },
    {
        id: 4,
        nombre: 'Aretes Geométricos',
        descripcion: 'Diseños modernos y simétricos.',
        precio: '$14.99',
        tipo: 'Minimalistas',
        imagen: '/imagenes/aretes-geometricos.jpg',
    },
];

const tipos = ['Todos', ...new Set(productos.map(p => p.tipo))];

export default function ProductosPage() {
    const [filtro, setFiltro] = useState('Todos');

    const productosFiltrados = filtro === 'Todos'
        ? productos
        : productos.filter(p => p.tipo === filtro);

    // Función para mostrar alerta al agregar al carrito
    const agregarAlCarrito = (nombre) => {
        Swal.fire({
            icon: 'success',
            title: '¡Añadido!',
            text: `El producto "${nombre}" se agregó al carrito.`,
            timer: 1500,
            showConfirmButton: false,
            position: 'top-end',
            toast: true,
            background: '#fff8fb',
            color: '#d6336c',
        });
    };

    return (
        <>
            <Header />

            <main className="productos-page">
                <h1>Nuestra Colección de Aretes</h1>

                {/* Filtro */}
                <div className="filtro-tipos">
                    {tipos.map((tipo) => (
                        <button
                            key={tipo}
                            onClick={() => setFiltro(tipo)}
                            className={filtro === tipo ? 'activo' : ''}
                            aria-pressed={filtro === tipo}
                        >
                            {tipo}
                        </button>
                    ))}
                </div>

                {/* Productos */}
                <section className="productos-grid">
                    {productosFiltrados.map(({ id, nombre, descripcion, precio, imagen }) => (
                        <article key={id} className="producto-card">
                            <div className="producto-imagen">
                                <Image
                                    src={imagen}
                                    alt={nombre}
                                    fill
                                    sizes="(max-width: 768px) 100vw,
                                           (max-width: 1200px) 50vw,
                                           25vw"
                                    className="object-cover"
                                />
                            </div>

                            <h3 className="producto-nombre">{nombre}</h3>
                            <p className="producto-descripcion">{descripcion}</p>
                            <p className="producto-precio">{precio}</p>
                            <button
                                className="btn-carrito"
                                aria-label={`Añadir ${nombre} al carrito`}
                                onClick={() => agregarAlCarrito(nombre)}
                            >
                                Añadir al carrito
                            </button>
                        </article>
                    ))}
                </section>
            </main>

            <Footer />
        </>
    );
}
