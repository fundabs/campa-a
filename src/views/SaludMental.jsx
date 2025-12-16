// src/pages/SaludMental.jsx
import { ArrowLeft, Heart, ArrowRight } from "lucide-react";
import Footer from "../componentes/Footer";
import { Link } from "react-router-dom";

export default function SaludMental() {
  return (
    <>
      {/* HERO DE LA PÁGINA SALUD MENTAL */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-purple-900 to-purple-700 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/foto-maria-pilar-hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-5xl mx-auto pt-10">
          <Link
            to="/"
            className="absolute top-6 left-8 flex items-center gap-2 text-white/80 hover:text-white transition"
          >
            <ArrowLeft className="w-6 h-6" /> Volver al inicio
          </Link>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-tight">
            Salud Mental
            <span className="block text-orange-400 mt-4">
              para Todos los Bogotanos
            </span>
          </h1>
          <p className="mt-8 text-xl sm:text-3xl font-light max-w-4xl mx-auto">
            Centros de escucha gratuitos • Prevención en colegios •
            Acompañamiento comunitario
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
            <span className="text-5xl font-black">+5.200</span>
            <span className="text-lg sm:text-xl self-center opacity-90">
              personas atendidas en 2024-2025
            </span>
          </div>
        </div>
      </section>

      {/* GALERÍA + ARTÍCULOS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* TARJETA 1 */}
            <article className="group bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dl7kjajkv/image/upload/v1763596055/maria_politica/ciudad_bolivar_ffgssd.jpg"
                  alt="Ciudad Bolívar"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>
              <div className="p-8">
                <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-bold">
                  Ciudad Bolívar
                </span>
                <h3 className="text-2xl font-bold text-purple-900 mt-4 mb-3">
                  Centro de Escucha Gratuito
                </h3>
                <p className="text-gray-700">
                  300+ personas atendidas. Talleres semanales de resiliencia y
                  apoyo emocional.
                </p>
              </div>
            </article>

            {/* TARJETA 2 */}
            <article className="group bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dl7kjajkv/image/upload/v1763596057/maria_politica/anciedad_aii8vq.jpg"
                  alt="Kennedy"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>
              <div className="p-8">
                <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-bold">
                  Kennedy
                </span>
                <h3 className="text-2xl font-bold text-purple-900 mt-4 mb-3">
                  1.200 estudiantes formados
                </h3>
                <p className="text-gray-700">
                  Programa piloto en 12 colegios con reducción comprobada de
                  ansiedad.
                </p>
              </div>
            </article>

            <article className="group bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dl7kjajkv/image/upload/v1763596056/maria_politica/Imagen4_t7vyxb.png"
                  alt="Suba"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>
              <div className="p-8">
                <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-bold">
                  Suba
                </span>
                <h3 className="text-2xl font-bold text-purple-900 mt-4 mb-3">
                  850 familias acompañadas
                </h3>
                <p className="text-gray-700">
                  Estrategias de regulación emocional aplicadas en hogares con
                  resultados sobresalientes.
                </p>
              </div>
            </article>
            <article className="group bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dl7kjajkv/image/upload/v1763596986/maria_politica/ignosis_gsg2gt.jpg"
                  alt="Bosa"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>
              <div className="p-8">
                <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-bold">
                  Bosa
                </span>
                <h3 className="text-2xl font-bold text-purple-900 mt-4 mb-3">
                  1.050 ciudadanos capacitados
                </h3>
                <p className="text-gray-700">
                  Talleres de bienestar emocional y rutas de apoyo psicológico
                  para la comunidad.
                </p>
              </div>
            </article>
            <article className="group bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dl7kjajkv/image/upload/v1763596056/maria_politica/Imagen6_e90yov.png"
                  alt="Engativá"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>
              <div className="p-8">
                <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-bold">
                  Engativá
                </span>
                <h3 className="text-2xl font-bold text-purple-900 mt-4 mb-3">
                  600 jóvenes empoderados
                </h3>
                <p className="text-gray-700">
                  Intervenciones en colegios enfocadas en liderazgo y salud
                  mental preventiva.
                </p>
              </div>
            </article>
            <article className="group bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dl7kjajkv/image/upload/v1763596057/maria_politica/mujeres_empoderadas_on7b27.jpg"
                  alt="Teusaquillo"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>
              <div className="p-8">
                <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-bold">
                  Teusaquillo
                </span>
                <h3 className="text-2xl font-bold text-purple-900 mt-4 mb-3">
                  920 mujeres fortalecidas
                </h3>
                <p className="text-gray-700">
                  Procesos psicoeducativos que fortalecieron autoestima,
                  resiliencia y autocuidado.
                </p>
              </div>
            </article>

            {/* Puedes seguir agregando más tarjetas aquí */}
          </div>

          {/* BOTÓN FINAL */}
          <div className="text-center mt-16">
            <Link
              to="/inscribirse"
              className="inline-block bg-orange-500 hover:bg-orange-400 text-purple-900 px-12 py-6 rounded-full text-2xl font-black shadow-2xl hover:scale-105 transition"
            >
              Quiero Sumarte a Esta Causa
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
