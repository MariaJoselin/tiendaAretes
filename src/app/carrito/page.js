"use client";
import "./carrito.css";
import { useCarrito } from "@/context/CarritoContext";

export default function CarritoPage() {
  const { carrito, quitarDelCarrito } = useCarrito();

  const total = carrito.reduce((acc, producto) => {
    const precioNum = parseFloat(producto.precio.replace("$", ""));
    return acc + precioNum;
  }, 0);

  return (
    <main className="carrito-container">
      <h1 className="carrito-titulo">Tu Carrito</h1>

      {carrito.length === 0 ? (
        <p className="text-center text-gray-500">No hay productos en el carrito.</p>
      ) : (
        <div>
          {carrito.map((producto) => (
            <div key={producto.id} className="item-carrito">
              <img src={producto.imagen} alt={producto.nombre} />
              <div className="item-info">
                <p className="item-nombre">{producto.nombre}</p>
                <p className="item-precio">{producto.precio}</p>
              </div>
              <button
                className="btn-quitar"
                onClick={() => quitarDelCarrito(producto.id)}
              >
                Quitar
              </button>
            </div>
          ))}
          <p className="total">Total: ${total}</p>
        </div>
      )}
    </main>
  );
}
