// src/views/Articulos.jsx
import {
  ArrowLeft,
  Newspaper,
  Calendar,
  Quote,
  PlayCircle,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Articulos() {
  return (
    <>
      {/* HERO URGENTE Y PROFESIONAL */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-red-800 via-purple-900 to-purple-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/articulos-hero.jpg')" }} // opcional: foto de personas en terapia o multitud en Bogotá
        />

        <div className="relative z-10 max-w-6xl mx-auto pt-10">
          <Link
            to="/"
            className="absolute top-6 left-0 flex items-center gap-2 hover:text-orange-300 transition"
          >
            <ArrowLeft className="w-6 h-6" /> Volver al inicio
          </Link>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-tight">
            Salud Mental
            <span className="block text-red-300 mt-4">en Crisis</span>
          </h1>

          <p className="mt-10 text-xl sm:text-3xl font-light max-w-4xl mx-auto">
            Lo medios dicen sobre la emergencia en Bogotá. <br></br>Mi
            compromiso: actuar ahora con centros gratuitos y prevención masiva.
          </p>

          <div className="mt-16 flex flex-col sm:flex-row gap-8 justify-center text-2xl font-black">
            <div className="text-center">
              <div className="text-red-300">1 de cada 3</div>
              <p className="mt-2 text-lg opacity-90">jóvenes con ansiedad</p>
            </div>
            <div className="text-center">
              <div className="text-red-300">+5.200</div>
              <p className="mt-2 text-lg opacity-90">personas atendidas</p>
            </div>
            <div className="text-center">
              <div className="text-red-300">2025</div>
              <p className="mt-2 text-lg opacity-90">
                Es el momento de cambiar
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ARTÍCULOS DESTACADOS – EL TIEMPO Y MÁS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl sm:text-6xl font-black text-center text-purple-900 mb-4">
            Artículos destacados
          </h2>
          <p className="text-center text-xl text-gray-700 mb-16 max-w-3xl mx-auto">
            Cobertura en medios nacionales sobre la crisis de salud mental en
            Bogotá y mis propuestas para resolverla.
          </p>

          <div className="space-y-12">
            {/* ARTÍCULO 1: EL TIEMPO – SALUD MENTAL EN CRISIS */}
            <article className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-l-8 border-red-500">
              {/* Imagen principal */}
              <div className="aspect-[16/9] overflow-hidden relative">
                <img
                  src="https://res.cloudinary.com/dl7kjajkv/image/upload/v1763662751/maria_politica/mindaliaradio_nekjwm.png"
                  alt="Salud mental en crisis Bogotá"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                  URGENTE
                </div>
              </div>

              <div className="p-8 md:p-10">
                {/* Logo El Tiempo */}
                <div className="flex items-center gap-3 mb-6">
                  <img
                    src="https://res.cloudinary.com/dl7kjajkv/image/upload/v1763596056/maria_politica/logo-Partido-Politico-Dignidad-Compromiso_k4uys7.jpg"
                    alt="Dignidad y compromiso"
                    className="h-8 opacity-80"
                  />
                  <Calendar className="w-5 h-5 text-gray-500" />
                  <span className="text-sm text-gray-500">
                    10 de octubre de 2022
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-black text-purple-900 mb-4 leading-tight">
                  Salud mental en crisis: la propuesta de María del Pilar García
                  para salvar a Bogotá
                </h3>

                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  En un contexto donde el 35% de los bogotanos reporta síntomas
                  de ansiedad y depresión, la candidata a la Cámara por Dignidad
                  & Compromiso presenta un plan integral: centros de escucha
                  gratuitos en cada localidad, talleres obligatorios en colegios
                  y una línea de apoyo 24/7. "No podemos esperar más", afirma
                  García.
                </p>

                {/* Extracto con quote */}
                <blockquote className="border-l-4 border-red-500 pl-6 italic text-gray-800 mb-6 py-4 bg-red-50 rounded-r-lg">
                  "Bogotá necesita psicólogos en cada barrio, no solo en
                  clínicas privadas. Mi compromiso es hacer accesible la salud
                  mental para todos."
                  <cite className="block mt-2 text-right font-bold text-purple-900">
                    — María del Pilar García
                  </cite>
                </blockquote>

                <a
                  href="https://www.ivoox.com/control-adicciones-hipnosis-entrevista-a-maria-audios-mp3_rf_85095627_1.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-red-600 font-bold hover:text-red-700 transition text-lg"
                >
                  Leer artículo completo <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </article>

            {/* ARTÍCULO 2: OTRO DE EL TIEMPO O MEDIO SIMILAR */}
            <article className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-l-8 border-orange-500">
              <div className="aspect-[16/9] overflow-hidden relative">
                <img
                  src="https://res.cloudinary.com/dl7kjajkv/image/upload/v1763658224/maria_politica/centro_de_escucha_ieagap.png"
                  alt="Centros de escucha en Bogotá"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>

              <div className="p-8 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <img
                    src="https://res.cloudinary.com/dl7kjajkv/image/upload/v1763596056/maria_politica/logo-Partido-Politico-Dignidad-Compromiso_k4uys7.jpg"
                    alt="Dignida_compromiso"
                    className="h-8 opacity-80"
                  />
                  <Calendar className="w-5 h-5 text-gray-500" />
                  <span className="text-sm text-gray-500">
                    15 de octubre de 2025
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-black text-purple-900 mb-4 leading-tight">
                  Centros de escucha salvan vidas: el impacto de la iniciativa
                  de María del Pilar en barrios vulnerables
                </h3>

                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  Con más de 5.200 atenciones en 2025, los centros comunitarios
                  propuestos por la psicóloga han reducido en un 40% los casos
                  de crisis emocional en zonas como Kennedy y Ciudad Bolívar. Un
                  modelo replicable que podría transformar la salud pública en
                  la capital.
                </p>

                <a
                  href="https://fundacion-fundabs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-orange-600 font-bold hover:text-orange-700 transition text-lg"
                >
                  Leer artículo completo <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </article>

            {/* Puedes agregar más artículos aquí – copia el patrón */}
          </div>

          {/* VIDEO EMBEBIDO RELACIONADO */}
          <div className="mt-20 text-center">
            <h3 className="text-3xl font-bold text-purple-900 mb-8">
              Video: La crisis explicada en 3 minutos
            </h3>
            <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/DOxl9BtZfzU" // Reemplaza con un video real de El Tiempo o tuyo
                title="Salud mental en crisis Bogotá"
                allowFullScreen
              />
            </div>
            <p className="mt-4 text-gray-600">
              Entrevista exclusiva con María del Pilar en Canal Capital
            </p>
          </div>
          <div className="mt-20 text-center">
            <h3 className="text-3xl font-bold text-purple-900 mb-8">
              Video: Control de adicciones con hipnosis
            </h3>
            <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/DReMWbGH0kc" // Reemplaza con un video real de El Tiempo o tuyo
                title="Control de adicciones con hipnosis"
                allowFullScreen
              />
            </div>
            <p className="mt-4 text-gray-600">
              Entrevista exclusiva con María del Pilar en Mindalia
              Television.com
            </p>
          </div>
          <div className="mt-20 text-center">
            <h3 className="text-3xl font-bold text-purple-900 mb-8">
              Video: La Salud Menta y Su Importancia
            </h3>
            <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/PCNqTbzvfWo" // Reemplaza con un video real de El Tiempo o tuyo
                title="Salud mental en crisis Bogotá"
                allowFullScreen
              />
            </div>
            <p className="mt-4 text-gray-600">
              Entrevista exclusiva con María del Pilar Bravisiomo
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL – LLAMADO A LA ACCIÓN */}
      <section className="py-32 bg-gradient-to-r from-red-800 to-purple-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <Quote className="w-16 h-16 mx-auto mb-8 opacity-80" />
          <h2 className="text-5xl sm:text-7xl font-black mb-8">
            "La salud mental no espera"
          </h2>
          <p className="text-2xl mb-12 max-w-3xl mx-auto opacity-90">
            Únete a la lucha contra la crisis. Tu apoyo puede cambiar miles de
            vidas en Bogotá.
          </p>
          <Link
            to="/inscribirse"
            className="inline-block bg-white text-purple-900 px-16 py-6 rounded-full text-2xl font-black hover:bg-gray-100 transition shadow-2xl hover:scale-105"
          >
            Apoya esta Causa Ahora
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-purple-950 text-white py-12 text-center">
        <p className="text-xl font-bold">María del Pilar García</p>
        <p className="opacity-80">
          Psicóloga • Candidata Bogotá 2026 • Dignidad & Compromiso
        </p>
        <Link
          to="/"
          className="mt-6 inline-block text-orange-300 hover:text-orange-100 transition"
        >
          ← Volver al inicio
        </Link>
      </footer>
    </>
  );
}
