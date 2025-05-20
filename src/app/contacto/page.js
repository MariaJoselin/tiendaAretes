// src/app/contacto/page.js
"use client";
import "./contacto.css";
import { useState } from "react";

export default function ContactoPage() {
  const [form, setForm] = useState({ nombre: "", correo: "", mensaje: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", form);
    alert("Gracias por tu mensaje 🩷");
    setForm({ nombre: "", correo: "", mensaje: "" });
  };

  return (
    <main className="contacto-container">
      <h1 className="titulo-contacto">Contáctanos</h1>
      <form className="formulario-contacto" onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Correo electrónico:
          <input
            type="email"
            name="correo"
            value={form.correo}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Mensaje:
          <textarea
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
            required
          ></textarea>
        </label>
        <button type="submit">Enviar</button>
      </form>
    </main>
  );
}