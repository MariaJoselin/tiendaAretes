"use client";
import "./home/HomePage.css";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="home-container">
      <header className="home-header">
        <figure>
          <img
            src="/imagenes/logo3.png"
            alt="logo Matatena"
            className="logo"
          />
        </figure>
        <h1 className="titulo">Bienvenida a MATATENA</h1>
        <p className="descripcion">
          Explora nuestros diseños únicos hechos a mano ✨
        </p>
      </header>

      <nav className="boton-container">
        <Link href="/productos">
          <button className="boton">Ver colección</button>
        </Link>
      </nav>

      <section className="info-grid">
        <section className="sobre-nosotros">
          <h2>Sobre Nosotros</h2>
          <p>
            En Matatena creamos aretes únicos, hechos a mano con mucho cuidado.
            <br />
            Cada pieza es una obra artesanal pensada para resaltar tu estilo.
          </p>
        </section>

        <section className="beneficios">
          <article className="beneficio">
            <span>💎</span>
            <p>Diseños únicos</p>
          </article>
          <article className="beneficio">
            <span>👐</span>
            <p>Hecho a mano</p>
          </article>
        </section>
      </section>
    </main>
  );
}
