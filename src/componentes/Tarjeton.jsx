import React from "react";
import { CheckCircle, Vote, MapPin } from "lucide-react";

export default function VotaCamaraBogota() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Título */}
        <h2
          className="text-4xl md:text-6xl font-black text-center text-purple-900 mb-6"
          data-aos="fade-up"
        >
          Este 8 de Marzo, Marca con Convicción
        </h2>

        <p
          className="text-center text-gray-700 max-w-3xl mx-auto mb-20 text-lg"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Bogotá necesita una representación firme, ética y comprometida con la
          dignidad de las personas. Tu voto es la herramienta para sanar,
          transformar y construir futuro.
        </p>

        {/* Card principal */}
        <div
          className="max-w-4xl mx-auto bg-gray-50 rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all group"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* Encabezado */}
          <div className="text-center mb-10">
            <Vote className="w-24 h-24 mx-auto text-orange-500 group-hover:scale-110 transition-all" />

            <h3 className="text-3xl md:text-4xl font-black text-purple-900 mt-6">
              Cámara de Representantes · Bogotá
            </h3>

            <p className="text-xl mt-4 text-gray-700">
              Movimiento{" "}
              <span className="font-bold">Dignidad y Compromiso</span>
            </p>
          </div>

          {/* Número */}
          <div className="flex justify-center mb-10">
            <div className="bg-purple-900 text-white px-10 py-6 rounded-2xl text-center shadow-lg">
              <p className="text-sm uppercase tracking-widest text-purple-200">
                Marca el número
              </p>
              <p className="text-6xl font-black text-orange-400">116</p>
            </div>
          </div>
          {/* Imagen del folleto */}
          <div className="relative group">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-purple-900 to-orange-500 opacity-10 blur-xl"></div>

            <img
              src="https://res.cloudinary.com/dl7kjajkv/image/upload/v1771639007/coalicici%C3%B3n-Bogot%C3%A1_Camara_alta_Dic27_otfloz.png"
              alt="Folleto Cámara de Representantes Bogotá Dignidad y Compromiso 116"
              className="relative w-full rounded-2xl shadow-lg group-hover:scale-105 transition-transform"
            />
          </div>

          {/* Mensajes clave */}
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {[
              "Defensa de la dignidad humana",
              "Compromiso real con Bogotá",
              "Política limpia y transparente",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 text-gray-800">
                <CheckCircle className="w-7 h-7 text-orange-500 flex-shrink-0" />
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>

          {/* Cierre emocional */}
          <div className="mt-14 text-center">
            <p className="text-xl font-semibold text-purple-900">
              <MapPin className="inline w-6 h-6 text-orange-500 mr-2" />
              En Bogotá, tu voto sí transforma
            </p>

            <p className="mt-4 text-gray-700">
              Este 8 de marzo, vota con conciencia, esperanza y compromiso.
            </p>
          </div>
        </div>
        {/* Imagen del folleto */}
        <div className="relative group">
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-purple-900 to-orange-500 opacity-10 blur-xl"></div>

          <img
            src="https://res.cloudinary.com/dl7kjajkv/image/upload/v1767889287/paginaWeb/mariadelpilar_bzpucm.jpg"
            alt="Folleto Cámara de Representantes Bogotá Dignidad y Compromiso 116"
            className="relative w-full rounded-2xl shadow-lg group-hover:scale-105 transition-transform"
          />
        </div>
      </div>
    </section>
  );
}
