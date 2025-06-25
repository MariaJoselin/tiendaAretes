"use client";
import { createContext, useContext, useState } from "react";

const CarritoContext = createContext();

export function CarritoProvider({ children }) {
    const [carrito, setCarrito] = useState([]);

    const agregarProducto = (producto) => {
        setCarrito((prev) => {
            const existente = prev.find((item) => item.id === producto.id);
            if (existente) {
                return prev.map((item) =>
                    item.id === producto.id
                        ? { ...item, cantidad: item.cantidad + 1 }
                        : item
                );
            } else {
                return [...prev, { ...producto, cantidad: 1 }];
            }
        });
    };

    const eliminarProducto = (id) => {
        setCarrito((prev) => prev.filter((item) => item.id !== id));
    };

    const vaciarCarrito = () => setCarrito([]);

    // agrege las funciones de incrementar y decrementar
    const incrementarCantidad = (id) => {
        setCarrito((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
            )
        );
    };

    const decrementarCantidad = (id) => {
        setCarrito((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, cantidad: item.cantidad > 1 ? item.cantidad - 1 : 1 }
                    : item
            )
        );
    };

    return (
        <CarritoContext.Provider
            value={{
                carrito,
                agregarProducto,
                eliminarProducto,
                vaciarCarrito,
                incrementarCantidad, 
                decrementarCantidad, 
            }}
        >
            {children}
        </CarritoContext.Provider>
    );
}

export function useCarrito() {
    return useContext(CarritoContext);
}
