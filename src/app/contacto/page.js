"use client";
import { useState } from "react";
import "./contacto.css";

export default function ContactoPage() {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    mensaje: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", form);
  };

  return (
    <main className="contacto-container">
      <div className="contacto-formulario">
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
      </div>

      <div className="contacto-extra">
        <div className="tarjeta">
          <h2>Síguenos</h2>
          <div className="redes-sociales">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" />
            </a>
          </div>
        </div>

        <div className="tarjeta">
          <h2>Ubicación</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.3306570636546!2d-99.34192282610948!3d19.613156534892596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d2198ed2188bf5%3A0x16a62df2d79f4e09!2sUniversidad%20Tecnol%C3%B3gica%20Fidel%20Vel%C3%A1zquez!5e0!3m2!1ses-419!2smx!4v1747845488614!5m2!1ses-419!2smx"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

    </main>
  );
}
