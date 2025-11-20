import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

import {
  Heart,
  Youtube,
  Newspaper,
  Camera,
  PlayCircle,
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

  // --- Declara la lista de videos AQUÍ (antes del return) ---
  const videos = [
    "https://www.youtube.com/embed/9yd0dQ10t0g",
    "https://www.youtube.com/embed/vtFjFbmEEIY",
    "https://www.youtube.com/embed/JNvyKsKNOA8",
    "https://www.youtube.com/embed/71AWW0GcqII",
    "https://www.youtube.com/embed/OYaLoRu8bBg",
    "https://www.youtube.com/embed/lB_j9NJza5Q",
  ];

  return (
    <>
      {/* HERO PROFESIONAL */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden pb-16">
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
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-lg 
      border border-white/30 px-5 py-2 rounded-full mb-4"
            data-aos="fade-up"
          >
            <img
              src="https://res.cloudinary.com/dl7kjajkv/image/upload/v1763596056/maria_politica/logo-Partido-Politico-Dignidad-Compromiso_k4uys7.jpg"
              alt="Dignidad & Compromiso"
              className="h-8 w-8 rounded-full"
            />
            <span className="text-base md:text-lg font-bold tracking-wider">
              DIGNIDAD & COMPROMISO
            </span>
          </div>

          {/* Nombre */}
          <h1
            className="text-3xl md:text-5xl lg:text-6xl font-black mb-3 leading-tight"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            María del Pilar
            <span className="block text-orange-400">García</span>
          </h1>

          {/* Subtítulo */}
          <p
            className="text-base md:text-xl font-light mb-6 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Psicóloga dedicada a la salud mental comunitaria · Bogotá 2026
            <br />
            <span className="font-semibold text-orange-300 text-lg md:text-2xl">
              Por una ciudad con dignidad y esperanza
            </span>
          </p>

          {/* Apoyo */}
          <div
            className="bg-white/15 backdrop-blur-md rounded-xl p-5 mb-8 max-w-md mx-auto border border-white/20"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <p className="text-sm md:text-base font-medium flex items-center justify-center gap-2">
              ❤️ Mi apoyo incondicional a Sergio Fajardo ❤️
            </p>
            <a
              href="https://sergiofajardo.co"
              target="_blank"
              className="text-orange-300 hover:text-white text-xs mt-1 inline-block transition"
            >
              Conocer su visión →
            </a>
          </div>

          {/* Botones */}
          <div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            <a
              href="#propuestas"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("propuestas");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="group relative overflow-hidden bg-orange-500 hover:bg-orange-400 
        text-purple-900 px-5 sm:px-8 py-3 sm:py-3 rounded-full font-semibold 
        text-base sm:text-lg shadow-xl transform hover:scale-105 transition-all text-center "
            >
              Conoce mis Propuestas
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition"></div>
            </a>

            <a
              href="#inscribirse"
              className="group border-2 border-white/70 hover:border-white hover:bg-white/20 
        backdrop-blur px-5 sm:px-8 py-3 sm:py-3 rounded-full font-semibold text-base sm:text-lg 
        transform hover:scale-105 transition duration-300 text-center"
            >
              Únete al Cambio
            </a>
          </div>
        </div>
      </header>

      {/* NAV */}
      {/* NAV — CLICK HANDLER para scroll suave sin cambiar vista */}
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
          {["propuestas", "trayectoria", "videos", "apoyo"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(id);
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                  // actualizar hash en la URL sin disparar HashRouter a otra "ruta"
                  window.history.replaceState(null, "", `#${id}`);
                }
              }}
              className="text-purple-700 hover:text-orange-500 transition cursor-pointer"
            >
              {id === "apoyo"
                ? "Apóyanos"
                : id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
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
                link: "/salud-mental",
                delay: 0,
              },
              {
                icon: Shield,
                title: "Transparencia Absoluta",
                desc: "Plataformas digitales de rendición de cuentas...",
                link: "/Transparencia",
                delay: 150,
              },
              {
                icon: Users,
                title: "Educación Emocional",
                desc: "Talleres integrados en colegios y empresas...",
                link: "/educacion-emocional",
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
      <section id="trayectoria" className="py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          {/* TÍTULO */}
          <h2 className="text-4xl md:text-6xl font-extrabold text-center text-purple-900 mb-20">
            Mi Compromiso Real con Bogotá
          </h2>

          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* COLUMNA IZQUIERDA – TEXTO */}
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-bold text-purple-900 mb-6">
                Psicóloga Clínica • Matrícula Profesional 3204011554
              </h3>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                Egresada de la Universidad Nacional de Colombia, especialista en
                hipnoterapia clínica y acompañamiento emocional. Más de 15 años
                trabajando hombro a hombro con niños, jóvenes, madres cabeza de
                familia y comunidades enteras de Bogotá.
              </p>

              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-10 font-medium bg-purple-50 p-6 rounded-2xl border-l-4 border-orange-500">
                <strong>Mi compromiso es claro:</strong>
                <br />
                Si me dan la confianza en las elecciones a la Cámara de
                Representantes por Bogotá en marzo de 2026, impulsaré proyectos
                que garanticen acceso real a atención emocional, prevención
                temprana y programas gratuitos para niños, jóvenes, adultos y
                familias. Dedicaré cada día de mi curul a que la salud mental
                deje de ser un lujo y se convierta en un derecho real para todos
                los bogotanos.
              </p>

              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10">
                Impulsaré proyectos de ley para atención psicológica gratuita en
                las 20 localidades, prevención del suicidio juvenil, programas
                de salud mental en colegios públicos y apoyo emocional a
                primeros respondedores y población vulnerable.
              </p>

              {/* TARJETAS */}
              <div className="space-y-5">
                {/* Artículos */}
                <div className="flex items-center gap-5 p-5 bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition">
                  <Newspaper className="w-10 h-10 text-purple-700" />
                  <div>
                    <strong className="text-lg text-purple-900">
                      Artículos destacados
                    </strong>
                    <br />
                    <Link
                      to="/articulos"
                      className="text-orange-500 hover:underline text-md font-semibold"
                    >
                      Salud mental en crisis →
                    </Link>
                  </div>
                </div>

                {/* Galería */}
                <div className="flex items-center gap-5 p-5 bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition">
                  <Camera className="w-10 h-10 text-purple-700" />
                  <div>
                    <strong className="text-lg text-purple-900">
                      Galería de impacto
                    </strong>
                    <br />
                    <Link
                      to="/galeria"
                      className="text-orange-500 hover:underline text-md font-semibold"
                    >
                      Ver Fotos →
                    </Link>
                  </div>
                </div>

                {/* Video */}
                <div className="flex items-center gap-5 p-5 bg-gradient-to-r from-purple-700 to-purple-900 text-white rounded-2xl shadow-lg hover:shadow-xl transition">
                  <PlayCircle className="w-10 h-10" />
                  <div>
                    <strong className="text-lg">
                      Mi video de compromiso con Bogotá
                    </strong>
                    <br />
                    <a
                      href="https://www.youtube.com/watch?v=TU_VIDEO_ID"
                      target="_blank"
                      className="text-orange-300 hover:text-orange-100 underline text-md font-semibold"
                    >
                      Ver video completo →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* COLUMNA DERECHA – FOTO + FOTO */}
            <div className="flex flex-col items-center gap-10">
              {/* Foto principal */}
              <img
                src="/foto_perfil.png"
                className="rounded-3xl shadow-2xl w-full max-w-md border-4 border-white mb-5"
                alt="María del Pilar - Candidata a la Cámara por Bogotá 2026"
              />

              {/* Segunda foto */}
              <img
                src="https://res.cloudinary.com/dl7kjajkv/image/upload/v1763656070/maria_politica/cerebron_orn4vp.png"
                className="rounded-3xl shadow-xl w-full max-w-md border-4 border-white object-cover mb-5"
                alt="Trabajo comunitario en Bogotá"
              />
              <img
                src="https://res.cloudinary.com/dl7kjajkv/image/upload/v1763655720/maria_politica/tratamiento_n_kcrehq.png"
                className="rounded-3xl shadow-xl w-full max-w-md border-4 border-white object-cover"
                alt="Trabajo comunitario en Bogotá"
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
            {videos.map((url, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="aspect-video">
                  <iframe
                    src={url}
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
            href="https://wa.me/573204011554"
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
            src="https://res.cloudinary.com/dl7kjajkv/image/upload/v1763596056/maria_politica/logo-Partido-Politico-Dignidad-Compromiso_k4uys7.jpg"
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
