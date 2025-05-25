'use client';

import React from 'react';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../styles/homepage.css'; // nuevo archivo CSS

export default function HomePage() {
    return (
        <>
            <Header />

            <section className="homepage">
                <div className="intro">
                    <h1 className="intro-title">Bienvenidos a Tienda de Aretes</h1>
                    <p className="intro-text">
                        Somos una boutique especializada en aretes artesanales que combinan diseño, estilo y elegancia.
                        Cada pieza está cuidadosamente elaborada para mujeres que valoran lo auténtico y buscan destacar con accesorios únicos.
                    </p>
                    <p className="intro-text">
                        Nos inspiran los colores, la naturaleza y las historias detrás de cada estilo.
                        Ya sea para un evento especial o tu look diario, aquí encontrarás ese toque que hará la diferencia.
                    </p>
                </div>

                <div className="gallery">
                    <Image src="/imagenes/primavera1.jpeg" alt="Modelo usando aretes artesanales" width={400} height={400} className="gallery-image" />
                    <Image src="/imagenes/valentines1.jpeg" alt="Aretes expuestos elegantemente" width={400} height={400} className="gallery-image" />
                    <Image src="/imagenes/Arcoiris1.jpeg" alt="Diseño artesanal de aretes" width={400} height={400} className="gallery-image" />
                </div>
            </section>

            <Footer />
        </>
    );
}
