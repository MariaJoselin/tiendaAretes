"use client";

import React, { useState } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Swal from "sweetalert2";

import "../../styles/contacto.css";

export default function ContactoPage() {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        mensaje: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.nombre.trim()) newErrors.nombre = "El nombre es obligatorio";
        if (!formData.email.trim()) newErrors.email = "El email es obligatorio";
        else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())
        )
            newErrors.email = "El email no es válido";

        if (!formData.mensaje.trim())
            newErrors.mensaje = "El mensaje es obligatorio";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            Swal.fire({
                icon: "success",
                title: "Mensaje enviado",
                text: "Gracias por contactarnos, te responderemos pronto.",
                confirmButtonColor: "#d6336c",
            });
            setFormData({ nombre: "", email: "", mensaje: "" });
            setErrors({});
        }
    };

    return (
        <>
            <Header />

            <main className="contacto-page">
                <h1>Contáctanos</h1>

                <form onSubmit={handleSubmit} noValidate>
                    <label htmlFor="nombre">Nombre</label>
                    <input
                        id="nombre"
                        name="nombre"
                        type="text"
                        value={formData.nombre}
                        onChange={handleChange}
                        aria-invalid={errors.nombre ? "true" : "false"}
                        aria-describedby="nombre-error"
                        placeholder="Tu nombre"
                    />
                    {errors.nombre && (
                        <p id="nombre-error" className="error">
                            {errors.nombre}
                        </p>
                    )}

                    <label htmlFor="email">Correo electrónico</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        aria-invalid={errors.email ? "true" : "false"}
                        aria-describedby="email-error"
                        placeholder="tu@email.com"
                    />
                    {errors.email && (
                        <p id="email-error" className="error">
                            {errors.email}
                        </p>
                    )}

                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea
                        id="mensaje"
                        name="mensaje"
                        rows="5"
                        value={formData.mensaje}
                        onChange={handleChange}
                        aria-invalid={errors.mensaje ? "true" : "false"}
                        aria-describedby="mensaje-error"
                        placeholder="Escribe tu mensaje aquí"
                    ></textarea>
                    {errors.mensaje && (
                        <p id="mensaje-error" className="error">
                            {errors.mensaje}
                        </p>
                    )}

                    <button type="submit" className="btn-enviar">
                        Enviar
                    </button>
                </form>

                <div
                    className="contacto-mapa"
                    aria-label="Mapa de ubicación de la Universidad Tecnológica Fidel Velázquez"
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.3306570636546!2d-99.34192282610945!3d19.613156534892596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d2198ed2188bf5%3A0x16a62df2d79f4e09!2sUniversidad%20Tecnol%C3%B3gica%20Fidel%20Vel%C3%A1zquez!5e0!3m2!1ses-419!2smx!4v1748033081959!5m2!1ses-419!2smx"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Mapa de ubicación de la Universidad Tecnológica Fidel Velázquez"
                    ></iframe>
                </div>
            </main>

            <Footer />
        </>
    );
}
