import React from 'react';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function HomePage() {
    return (
        <>
            <Header />

            <section className="bg-[#fff0f5] py-24 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <h1 className="text-6xl font-dancingscript text-pink-600 font-bold mb-6">
                        Bienvenidos a Tienda de Aretes
                    </h1>
                    <p className="text-xl text-[#6b4c5b] leading-relaxed max-w-3xl mx-auto mb-8">
                        Somos una boutique especializada en aretes artesanales que combinan diseño, estilo y elegancia.
                        Cada pieza está cuidadosamente elaborada para mujeres que valoran lo auténtico y buscan destacar con accesorios únicos.
                    </p>
                    <p className="text-lg text-[#6b4c5b] max-w-3xl mx-auto mb-12">
                        Nos inspiran los colores, la naturaleza y las historias detrás de cada estilo.
                        Ya sea para un evento especial o tu look diario, aquí encontrarás ese toque que hará la diferencia.
                    </p>
                </div>

                {/* Galería de imágenes decorativas */}
                <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
                    <Image
                        src="/imagenes/primavera1.jpeg"
                        alt="Modelo usando aretes artesanales"
                        width={400}
                        height={400}
                        className="rounded-xl object-cover shadow-lg"
                    />
                    <Image
                        src="/imagenes/galeria2.jpg"
                        alt="Aretes expuestos elegantemente"
                        width={400}
                        height={400}
                        className="rounded-xl object-cover shadow-lg"
                    />
                    <Image
                        src="/imagenes/galeria3.jpg"
                        alt="Diseño artesanal de aretes"
                        width={400}
                        height={400}
                        className="rounded-xl object-cover shadow-lg"
                    />
                </div>
            </section>

            <Footer />
        </>
    );
}
