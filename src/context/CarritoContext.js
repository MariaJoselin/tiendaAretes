"use client";
import { createContext, useContext, useState, useEffect } from "react";

const CarritoContext = createContext();

function generarKey(producto) {
  return `${producto.id}-${Date.now()}-${Math.random()}`;
}

export function CarritoProvider({ children }) {
  const [carrito, setCarrito] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("carrito");
      if (saved) {
        const parsed = JSON.parse(saved);
        return parsed.map((producto) => ({
          ...producto,
          key: producto.key || generarKey(producto),
        }));
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const agregarAlCarrito = (producto) => {
    const nuevoProducto = {
      ...producto,
      key: generarKey(producto),
    };
    setCarrito((prev) => [...prev, nuevoProducto]);
  };

  const eliminarDelCarrito = (key) => {
    setCarrito((prev) => prev.filter((item) => item.key !== key));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <CarritoContext.Provider
      value={{ carrito, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito }}
    >
      {children}
    </CarritoContext.Provider>
  );
}

export function useCarrito() {
  return useContext(CarritoContext);
}
