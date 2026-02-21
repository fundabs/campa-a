import {
  ArrowLeft,
  Shield,
  Users,
  Brain,
  Camera,
  HeartHandshake,
  Scale,
} from "lucide-react";
import Footer from "../componentes/Footer";
import { Link } from "react-router-dom";

export default function SeguridadCiudadana() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-purple-900 to-purple-700 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/seguridad-ciudadana-hero.jpg')" }}
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
            Seguridad para el Ciudadano
            <span className="block text-orange-400 mt-4">
              Personal, Social y Mental
            </span>
          </h1>

          <p className="mt-8 text-xl sm:text-3xl font-light max-w-4xl mx-auto">
            Prevención • Comunidad • Bienestar Integral
          </p>
        </div>
      </section>

      {/* PROPUESTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* EJES */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: Shield,
                tag: "Prevención",
                title: "Policía de Proximidad",
                text: "Modelo de seguridad preventiva que articula presencia institucional con recuperación de entornos urbanos, iluminación, parques y trabajo conjunto con las Juntas de Acción Comunal.",
              },
              {
                icon: HeartHandshake,
                tag: "Convivencia",
                title: "Entornos Protectores",
                text: "Intervención integral del espacio público para reducir factores de riesgo que facilitan la delincuencia y fortalecer la confianza ciudadana.",
              },
              {
                icon: Brain,
                tag: "Salud Mental",
                title: "Escuchaderos Territoriales",
                text: "Red de nodos comunitarios para mediación de conflictos vecinales y atención inmediata en crisis de salud mental, evitando la escalada de violencias.",
              },
              {
                icon: Camera,
                tag: "Tecnología",
                title: "Seguridad Inteligente",
                text: "Cámaras con analítica de datos en puntos críticos, integradas a protocolos de reacción rápida y frentes de seguridad ciudadana.",
              },
              {
                icon: Users,
                tag: "Juventud",
                title: "Juventud con Horizonte",
                text: "Programa de intervención en zonas vulnerables con alternativas reales en arte, deporte, cultura y tecnología para jóvenes en riesgo.",
              },
              {
                icon: Scale,
                tag: "Equilibrio",
                title: "Seguridad con Derechos",
                text: "Acciones de seguridad basadas en legalidad, enfoque territorial y protección de la vida, fortaleciendo la confianza entre ciudadanía e instituciones.",
              },
            ].map((item, i) => (
              <article
                key={i}
                className="group bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500"
              >
                <div className="p-10">
                  <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-bold">
                    {item.tag}
                  </span>

                  <item.icon className="w-14 h-14 text-purple-900 mt-6 mb-6 group-hover:scale-110 transition" />

                  <h3 className="text-2xl font-bold text-purple-900 mb-4">
                    {item.title}
                  </h3>

                  <p className="text-gray-700 leading-relaxed">{item.text}</p>
                </div>
              </article>
            ))}
          </div>

          {/* MARCO LEGAL */}
          <div className="mt-24 max-w-5xl mx-auto bg-white rounded-3xl p-12 shadow-xl">
            <h3 className="text-3xl font-black text-purple-900 mb-8 text-center">
              Marco Legal de la Seguridad Ciudadana
            </h3>

            <ul className="space-y-6 text-gray-800 text-lg">
              <li>
                <strong>
                  Política de Seguridad, Defensa y Convivencia Ciudadana
                  (2023–2026):
                </strong>{" "}
                Prioriza la protección de la vida y la prevención del delito.
              </li>
              <li>
                <strong>Ley 1801 de 2016 (Código de Convivencia):</strong>{" "}
                Regula el comportamiento ciudadano y la convivencia en el
                espacio público.
              </li>
              <li>
                <strong>Ley 1616 de 2013 (Ley de Salud Mental):</strong>{" "}
                Garantiza la atención integral y comunitaria en salud mental.
              </li>
              <li>
                <strong>Decreto 1285 de 2024:</strong> Articula la acción
                policial con la gestión comunitaria y territorial.
              </li>
            </ul>
          </div>

          {/* CIERRE */}
          <div className="text-center mt-20">
            <Link
              to="/inscribirse"
              className="inline-block bg-orange-500 hover:bg-orange-400 text-purple-900 px-12 py-6 rounded-full text-2xl font-black shadow-2xl hover:scale-105 transition"
            >
              Construir Seguridad con la Comunidad
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
