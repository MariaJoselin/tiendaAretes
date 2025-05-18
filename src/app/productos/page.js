"use client";
import "../productos/page.css"
import { useState } from "react";

export default function ProductosPage() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas");

  const productos = [
    { id: 1, nombre: "Aretes Sol", imagen: "/imagenes/primavera1.jpeg", precio: "$120", categoria: "Primavera" },
    { id: 2, nombre: "Aretes Luna", imagen: "/imagenes/primavera2.jpeg", precio: "$150", categoria: "Primavera" },
    { id: 3, nombre: "Aretes Sol", imagen: "/imagenes/primavera3.jpeg", precio: "$120", categoria: "Primavera" },
    { id: 4, nombre: "Aretes Luna", imagen: "/imagenes/primavera4.jpeg", precio: "$150", categoria: "Primavera" },
    { id: 5, nombre: "Aretes Flor", imagen: "/imagenes/valentines1.jpeg", precio: "$100", categoria: "Valentines" },
    { id: 6, nombre: "Aretes Estrella", imagen: "/imagenes/valentines2.jpeg", precio: "$110", categoria: "Valentines" },
    { id: 7, nombre: "Aretes Flor", imagen: "/imagenes/valentines3.jpeg", precio: "$100", categoria: "Valentines" },
    { id: 8, nombre: "Aretes Estrella", imagen: "/imagenes/valentines4.jpeg", precio: "$110", categoria: "Valentines" },
    { id: 9, nombre: "Aretes Flor", imagen: "/imagenes/Arcoiris1.jpeg", precio: "$100", categoria: "Arcoiris" },
    { id: 10, nombre: "Aretes Estrella", imagen: "/imagenes/Arcoiris2.jpeg", precio: "$110", categoria: "Arcoiris" },
  ];

  // Filtrar según categoría
  const productosFiltrados =
    categoriaSeleccionada === "Todas"
      ? productos
      : productos.filter((p) => p.categoria === categoriaSeleccionada);

  // Sacar las categorías únicas
  const categorias = ["Todas", ...new Set(productos.map((p) => p.categoria))];

  return (
    <main className="min-h-screen p-8 bg-pink-50">
      <h1 className="text-3xl font-bold text-pink-700 mb-4 text-center">Nuestra Colección</h1>

      {/* Filtro por categoría */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoriaSeleccionada(cat)}
            className={`py-2 px-4 rounded-full border-2 ${
              categoriaSeleccionada === cat
                ? "bg-pink-500 text-white border-pink-500"
                : "border-pink-300 text-pink-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Productos */}
      <div className="grid-productos">
        {productosFiltrados.map((producto) => (
          <div key={producto.id} className="tarjeta">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold text-pink-700">{producto.nombre}</h2>
            <p className="text-gray-600">{producto.precio}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
