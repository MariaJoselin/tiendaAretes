"use client";

import React from "react";
import Image from "next/image";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Swal from "sweetalert2";

import "../../styles/carrito.css";
import { useCarrito } from "@/context/CarritoContext"; // 👈 importar el contexto

export default function CarritoPage() {
    const { carrito, eliminarProducto, vaciarCarrito } = useCarrito();

    const total = carrito.reduce(
        (acc, item) => acc + item.precio * item.cantidad,
        0
    );

    const manejarPago = () => {
        if (carrito.length === 0) return;

        Swal.fire({
            title: "¿Confirmar pago?",
            text: `Total a pagar: $${total.toFixed(2)}`,
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Pagar",
            cancelButtonText: "Cancelar",
            confirmButtonColor: "#d6336c",
            cancelButtonColor: "#aaa",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    icon: "success",
                    title: "Pago realizado",
                    text: "¡Gracias por tu compra!",
                    confirmButtonColor: "#d6336c",
                });

                vaciarCarrito();
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
                                            <button onClick={() => decrementarCantidad(id)}>-</button>
                                            <span>{cantidad}</span>
                                            <button onClick={() => incrementarCantidad(id)}>+</button>
                                        </div>
                                    </div>
                                    <button
                                        className="eliminar-btn"
                                        onClick={() => eliminarProducto(id)}
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
