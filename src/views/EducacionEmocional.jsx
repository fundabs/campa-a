import Footer from "../componentes/Footer";
// src/views/EducacionEmocional.jsx
import {
  ArrowLeft,
  PlayCircle,
  Users,
  Heart,
  Calendar,
  Quote,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function EducacionEmocional() {
  return (
    <>
      {/* HERO EMOTIVO */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-orange-600 via-purple-700 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/educacion-emocional-hero.jpg')" }} // opcional: foto de niños sonriendo en taller
        />

        <div className="relative z-10 max-w-6xl mx-auto pt-10">
          <Link
            to="/"
            className="absolute top-0 left-0 flex items-center gap-2 hover:text-orange-300 transition"
          >
            <ArrowLeft className="w-6 h-6" /> Volver al inicio
          </Link>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-tight">
            Educación
            <span className="block text-orange-300 mt-4">Emocional</span>
          </h1>

          <p className="mt-10 text-xl sm:text-3xl font-light max-w-4xl mx-auto">
            Porque un niño que sabe manejar sus emociones crece siendo un adulto
            resiliente, empático y feliz.
          </p>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-black text-orange-300">1.800</div>
              <p className="mt-2 text-lg opacity-90">Estudiantes capacitados</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-orange-300">24</div>
              <p className="mt-2 text-lg opacity-90">Colegios públicos</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-orange-300">92%</div>
              <p className="mt-2 text-lg opacity-90">
                Reducción de bullying reportado
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GALERÍA + VIDEOS + ARTÍCULOS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* VIDEOS DESTACADOS */}
          <div className="mb-20">
            <h2 className="text-4xl sm:text-6xl font-black text-center text-purple-900 mb-12">
              Lo que hemos logrado juntos
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* VIDEO 1 */}
              <div className="group relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition">
                <iframe
                  className="w-full aspect-video"
                  src="https://www.youtube.com/embed/TU_VIDEO_ID_1"
                  title="Taller en Kennedy"
                  allowFullScreen
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-6">
                  <div>
                    <h4 className="text-white font-bold text-xl">
                      Taller Kennedy 2024
                    </h4>
                    <p className="text-white/90">
                      1.200 estudiantes en un solo día
                    </p>
                  </div>
                </div>
              </div>

              {/* VIDEO 2 */}
              <div className="group relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition">
                <iframe
                  className="w-full aspect-video"
                  src="https://www.youtube.com/embed/TU_VIDEO_ID_2"
                  title="Testimonio mamá"
                  allowFullScreen
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-6">
                  <div>
                    <h4 className="text-white font-bold text-xl">
                      “Mi hijo volvió a sonreír”
                    </h4>
                    <p className="text-white/90">Testimonio de una madre</p>
                  </div>
                </div>
              </div>

              {/* VIDEO 3 */}
              <div className="group relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition">
                <iframe
                  className="w-full aspect-video"
                  src="https://www.youtube.com/embed/TU_VIDEO_ID_3"
                  title="Cierre de año"
                  allowFullScreen
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-6">
                  <div>
                    <h4 className="text-white font-bold text-xl">
                      Festival Emocional 2024
                    </h4>
                    <p className="text-white/90">+800 asistentes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FOTOS + ARTÍCULOS */}
          <h2 className="text-4xl sm:text-6xl font-black text-center text-purple-900 mb-12">
            Momentos que transforman vidas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* FOTO 1 */}
            <article className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
              <img
                src="/educacion-emocional/foto1.jpg"
                alt="Niños en taller"
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
              />
              <div className="p-8">
                <Calendar className="w-5 h-5 text-orange-600 mb-3" />
                <h3 className="text-2xl font-bold text-purple-900">
                  Taller “Yo me cuido” – Ciudad Bolívar
                </h3>
                <p className="text-gray-700 mt-3">
                  250 niños aprendieron a identificar y expresar emociones
                  sanamente.
                </p>
              </div>
            </article>

            {/* FOTO 2 */}
            <article className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
              <img
                src="/educacion-emocional/foto2.jpg"
                alt="Profesores capacitados"
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-700"
              />
              <div className="p-8">
                <Users className="w-5 h-5 text-purple-600 mb-3" />
                <h3 className="text-2xl font-bold text-purple-900">
                  Capacitación a 120 docentes
                </h3>
                <p className="text-gray-700 mt-3">
                  Ahora replican las herramientas en sus aulas todos los días.
                </p>
              </div>
            </article>

            {/* ARTÍCULO O TESTIMONIO */}
            <article className="bg-gradient-to-br from-orange-50 to-purple-50 rounded-3xl p-10 shadow-xl border border-orange-200">
              <Quote className="w-12 h-12 text-orange-500 mb-6" />
              <p className="text-xl italic text-gray-800 leading-relaxed">
                “Por primera vez en 15 años de docente vi a un niño decir ‘estoy
                triste’ en vez de pegarle a otro. Gracias María del Pilar.”
              </p>
              <p className="mt-6 text-right font-bold text-purple-900">
                — Profesora Gloria, Colegio Distrital
              </p>
            </article>

            {/* Puedes seguir agregando cuantas quieras */}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-32 bg-gradient-to-r from-purple-800 to-orange-600 text-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl sm:text-7xl font-black mb-10">
            La educación emocional
            <br />
            <span className="text-orange-300">
              NO es un lujo, es una necesidad
            </span>
          </h2>
          <p className="text-2xl mb-12 max-w-3xl mx-auto opacity-90">
            Hagamos de Bogotá la primera ciudad de Colombia con educación
            emocional obligatoria en todos los colegios.
          </p>
          <Link
            to="/inscribirse"
            className="inline-block bg-white text-purple-900 px-16 py-7 rounded-full text-2xl font-black hover:bg-gray-100 transition shadow-2xl hover:scale-110"
          >
            Quiero que mis hijos crezcan así
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
