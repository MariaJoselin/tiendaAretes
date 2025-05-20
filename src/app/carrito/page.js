"use client";

import { useState, useEffect } from "react";
import "./carrito.css";
import { useCarrito } from "@/context/CarritoContext";

export default function CarritoPage() {
  const { carrito, eliminarDelCarrito } = useCarrito();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const total = carrito.reduce((acc, producto) => {
    const precioNum = parseFloat(producto.precio.replace("$", "")) || 0;
    return acc + precioNum;
  }, 0);

  if (!isMounted) {
    // Opcional: mostrar un loader o nada mientras monta el cliente
    return null;
  }

  return (
    <main className="carrito-container">
      <h1 className="carrito-titulo">Tu Carrito</h1>

      {carrito.length === 0 ? (
        <p className="text-center text-gray-500">No hay productos en el carrito.</p>
      ) : (
        <div>
          {carrito.map((producto) => (
            <div key={producto.key} className="item-carrito">
              <img src={producto.imagen} alt={producto.nombre} />
              <div className="item-info">
                <p className="item-nombre">{producto.nombre}</p>
                <p className="item-precio">{producto.precio}</p>
              </div>
              <button
                className="btn-quitar"
                onClick={() => eliminarDelCarrito(producto.key)}
              >
                Quitar
              </button>
            </div>
          ))}
          <p className="total">Total: ${total.toFixed(2)}</p>
        </div>
      )}
    </main>
  );
}
