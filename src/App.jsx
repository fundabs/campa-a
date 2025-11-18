import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

import {
  Heart,
  Youtube,
  Newspaper,
  Camera,
  ArrowRight,
  Users,
  Brain,
  Shield,
} from "lucide-react";

export default function App() {
  // Inicializar AOS (animaciones de scroll)
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <>
      {/* HERO PROFESIONAL */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video de fondo */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/foto-maria-pilar-hero.jpg"
        >
          <source src="/video.mov" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/30"></div>

        {/* Contenido */}
        <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-4 bg-white/20 backdrop-blur-lg 
            border border-white/30 px-8 py-4 rounded-full mb-8"
            data-aos="fade-up"
          >
            <img
              src="/logo-Partido-Politico-Dignidad-Compromiso.jpg"
              alt="Dignidad & Compromiso"
              className="h-10 w-10 rounded-full"
            />
            <span className="text-xl font-bold tracking-wider">
              DIGNIDAD & COMPROMISO
            </span>
          </div>

          {/* Nombre */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            María del Pilar
            <span className="block text-orange-400">García</span>
          </h1>

          {/* Subtítulo */}
          <p
            className="text-xl md:text-3xl font-light mb-10 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Psicóloga dedicada a la salud mental comunitaria · Bogotá 2026
            <br />
            <span className="font-semibold text-orange-300 text-2xl md:text-4xl">
              Por una ciudad con dignidad y esperanza
            </span>
          </p>

          {/* Apoyo */}
          <div
            className="bg-white/15 backdrop-blur-md rounded-2xl p-8 mb-12 max-w-lg mx-auto border border-white/20"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <p className="text-lg font-medium flex items-center justify-center gap-3">
              <Heart className="w-7 h-7 text-red-400 fill-current animate-pulse" />
              Mi apoyo incondicional a Sergio Fajardo
              <Heart className="w-7 h-7 text-red-400 fill-current animate-pulse" />
            </p>
            <a
              href="https://sergiofajardo.co"
              target="_blank"
              className="text-orange-300 hover:text-white text-sm mt-2 inline-block transition"
            >
              Conocer su visión →
            </a>
          </div>

          {/* Botones Responsive */}
          <div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            <a
              href="#propuestas"
              className="group relative overflow-hidden bg-orange-500 hover:bg-orange-400 
              text-purple-900 px-6 sm:px-10 py-4 sm:py-5 rounded-full font-bold sm:font-extrabold 
              text-lg sm:text-xl shadow-2xl transform hover:scale-105 hover:-translate-y-1 
              transition-all duration-300 text-center"
            >
              Conoce mis Propuestas
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition"></div>
            </a>

            <a
              href="#inscribirse"
              className="group border-2 border-white/70 hover:border-white hover:bg-white/20 
              backdrop-blur px-6 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-lg sm:text-xl 
              transform hover:scale-105 hover:-translate-y-1 transition duration-300 text-center"
            >
              Únete al Cambio
            </a>
          </div>
        </div>
      </header>

      {/* NAV */}
      <nav className="sticky top-0 bg-white/95 backdrop-blur-md shadow-lg z-50">
        <div
          className="
      max-w-7xl mx-auto px-4 py-3 
      flex flex-wrap justify-center 
      gap-4 md:gap-10 
      text-sm md:text-lg 
      font-semibold
      overflow-hidden
    "
        >
          <a
            href="#propuestas"
            className="text-purple-700 hover:text-orange-500 transition"
          >
            Propuestas
          </a>
          <a
            href="#trayectoria"
            className="text-purple-700 hover:text-orange-500 transition"
          >
            Trayectoria
          </a>
          <a
            href="#videos"
            className="text-purple-700 hover:text-orange-500 transition"
          >
            Videos
          </a>
          <a
            href="#apoyo"
            className="text-purple-700 hover:text-orange-500 transition"
          >
            Apóyanos
          </a>
        </div>
      </nav>

      {/* PROPUESTAS */}
      <section id="propuestas" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="text-4xl md:text-6xl font-black text-center text-purple-900 mb-20"
            data-aos="fade-up"
          >
            Mi Plan para Bogotá
          </h2>

          <div className="grid md:grid-cols-3 gap-10" id="SaludMental">
            {[
              {
                icon: Brain,
                title: "Salud Mental para Todos",
                desc: "Centros de escucha gratuitos en cada localidad...",
                link: "/salud-mental", // ✔ Página a redirigir
                delay: 0,
              },
              {
                icon: Shield,
                title: "Transparencia Absoluta",
                desc: "Plataformas digitales de rendición de cuentas...",
                link: "/Transparencia", // ✔ No tiene página
                delay: 150,
              },
              {
                icon: Users,
                title: "Educación Emocional",
                desc: "Talleres integrados en colegios y empresas...",
                link: "/educacion-emocional", // ✔ No tiene página
                delay: 300,
              },
            ].map((p, i) => (
              <div
                key={i}
                className="group bg-gray-50 rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all"
                data-aos="fade-up"
                data-aos-delay={p.delay}
              >
                <div className="mb-8 text-center">
                  <p.icon className="w-20 h-20 mx-auto text-orange-500 group-hover:scale-110 group-hover:rotate-6 transition-all" />
                </div>

                <h3 className="text-2xl font-black text-center text-purple-900 mb-6">
                  {p.title}
                </h3>

                <p className="text-gray-700 text-center leading-relaxed">
                  {p.desc}
                </p>

                {/* Botón Saber más solo si existe link */}
                {p.link && (
                  <div className="mt-8 text-center opacity-0 group-hover:opacity-100 transition">
                    <Link
                      to={p.link}
                      className="text-orange-500 font-bold flex items-center justify-center gap-2"
                    >
                      Saber más <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAYECTORIA */}
      <section id="trayectoria" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black text-center text-purple-900 mb-16">
            Mi Compromiso Real
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold text-purple-900 mb-6">
                Psicóloga Clínica • Matrícula 3204011554
              </h3>
              <p className="text-lg leading-relaxed mb-8">
                Egresada de la Universidad de Colombia, experta en
                hipnoterapia...
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow">
                  <Newspaper className="w-8 h-8 text-purple-600" />
                  <div>
                    <strong>Artículos destacados</strong>
                    <br />
                    <Link
                      to="/articulos"
                      className="text-orange-500 hover:underline font-medium"
                    >
                      El Tiempo: Salud mental en crisis →
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow">
                  <Camera className="w-8 h-8 text-purple-600" />
                  <div>
                    <strong>Galería de impacto</strong>
                    <br />
                    <Link
                      to="/galeria"
                      className="text-orange-500 hover:underline font-medium"
                    >
                      Ver Fotos →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img
                src="/foto_perfil.png"
                className="rounded-2xl shadow-2xl w-full"
                alt="María del Pilar"
              />
            </div>
          </div>
        </div>
      </section>

      {/* VIDEOS */}
      <section id="videos" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-black text-center text-purple-900 mb-16">
            Acciones que Hablan
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((v) => (
              <div
                key={v}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/TU_VIDEO_ID_${v}?rel=0`}
                    className="w-full h-full"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APOYO */}
      <section
        id="apoyo"
        className="py-24 bg-gradient-to-r from-purple-900 to-orange-600 text-white"
      >
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-6xl font-black mb-8">
            Construyamos Juntos
          </h2>

          <p className="text-2xl mb-12 opacity-90">
            Únete como voluntario y sé parte del cambio.
          </p>

          <a
            href="https://wa.me/57TU_NUMERO_WHATSAPP"
            className="
        inline-block
        bg-white text-purple-900 
        px-8 md:px-12 
        py-4 md:py-6 
        rounded-full 
        text-xl md:text-2xl 
        font-black 
        hover:bg-gray-100 
        transition 
        shadow-xl
        w-auto
      "
          >
            Quiero Colaborar Ahora
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-purple-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <img
            src="/logo-Partido-Politico-Dignidad-Compromiso.jpg"
            className="h-16 mx-auto mb-4"
          />
          <p className="text-xl mb-6">María del Pilar García • Bogotá 2026</p>
          <p className="text-sm opacity-70">
            Autorizado y pagado por la campaña María del Pilar García.
          </p>
        </div>
      </footer>
    </>
  );
}
