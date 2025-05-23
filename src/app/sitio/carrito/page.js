"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Swal from "sweetalert2";  // Import SweetAlert2

import '../../styles/carrito.css';

const productosEjemplo = [
    {
        id: 1,
        nombre: "Aretes Florales",
        precio: 15.99,
        imagen: "/imagenes/aretes-florales.jpg",
        cantidad: 2,
    },
    {
        id: 3,
        nombre: "Aretes Bohemios",
        precio: 18.75,
        imagen: "/imagenes/aretes-bohemios.jpg",
        cantidad: 1,
    },
];

export default function CarritoPage() {
    const [carrito, setCarrito] = useState(productosEjemplo);

    const incrementarCantidad = (id) => {
        setCarrito((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, cantidad: item.cantidad + 1 }
                    : item
            )
        );
    };

    const decrementarCantidad = (id) => {
        setCarrito((prev) =>
            prev
                .map((item) =>
                    item.id === id && item.cantidad > 1
                        ? { ...item, cantidad: item.cantidad - 1 }
                        : item
                )
                .filter((item) => item.cantidad > 0)
        );
    };

    const eliminarProducto = (id) => {
        setCarrito((prev) => prev.filter((item) => item.id !== id));
    };

    const total = carrito.reduce(
        (acc, item) => acc + item.precio * item.cantidad,
        0
    );

    // Función para simular el pago
    const manejarPago = () => {
        if (carrito.length === 0) return;

        Swal.fire({
            title: '¿Confirmar pago?',
            text: `Total a pagar: $${total.toFixed(2)}`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Pagar',
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#d6336c',
            cancelButtonColor: '#aaa'
        }).then((result) => {
            if (result.isConfirmed) {
                // Aquí podrías integrar el proceso real de pago

                // Simular pago exitoso
                Swal.fire({
                    icon: 'success',
                    title: 'Pago realizado',
                    text: '¡Gracias por tu compra!',
                    confirmButtonColor: '#d6336c',
                });

                // Vaciar carrito
                setCarrito([]);
            }
        });
    };

    return (
        <>
            <Header />

            <main className="carrito-page">
                <h1>Tu Carrito</h1>

                {carrito.length === 0 ? (
                    <p className="carrito-vacio">Tu carrito está vacío.</p>
                ) : (
                    <div className="carrito-grid">
                        <section className="carrito-items">
                            {carrito.map(({ id, nombre, precio, imagen, cantidad }) => (
                                <div key={id} className="carrito-item">
                                    <div className="imagen-container">
                                        <Image
                                            src={imagen}
                                            alt={nombre}
                                            fill
                                            style={{ objectFit: "cover" }}
                                        />
                                    </div>
                                    <div className="carrito-item-info">
                                        <h2>{nombre}</h2>
                                        <p>${precio.toFixed(2)}</p>
                                        <div className="cantidad-control">
                                            <button
                                                onClick={() => decrementarCantidad(id)}
                                                aria-label={`Disminuir cantidad de ${nombre}`}
                                            >
                                                -
                                            </button>
                                            <span>{cantidad}</span>
                                            <button
                                                onClick={() => incrementarCantidad(id)}
                                                aria-label={`Aumentar cantidad de ${nombre}`}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <button
                                        className="eliminar-btn"
                                        onClick={() => eliminarProducto(id)}
                                        aria-label={`Eliminar ${nombre} del carrito`}
                                    >
                                        ×
                                    </button>
                                </div>
                            ))}
                        </section>

                        <aside className="resumen">
                            <h2>Resumen</h2>
                            <p>
                                Total: <span className="total-amount">${total.toFixed(2)}</span>
                            </p>
                            <button
                                disabled={carrito.length === 0}
                                className="pago-btn"
                                aria-label="Proceder al pago"
                                onClick={manejarPago}
                            >
                                Proceder al pago
                            </button>
                        </aside>
                    </div>
                )}
            </main>

            <Footer />
        </>
    );
}
