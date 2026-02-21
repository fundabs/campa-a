import {
  ArrowLeft,
  Briefcase,
  Handshake,
  GraduationCap,
  Settings,
  Scale,
} from "lucide-react";
import Footer from "../componentes/Footer";
import { Link } from "react-router-dom";

export default function InclusionLaboral() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-purple-900 to-purple-700 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/inclusion-hero.jpg')" }}
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
            Inclusión Laboral
            <span className="block text-orange-400 mt-4">
              con Dignidad y Oportunidad
            </span>
          </h1>

          <p className="mt-8 text-xl sm:text-3xl font-light max-w-4xl mx-auto">
            Empleo digno • Inclusión real • Desarrollo productivo
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
            <span className="text-5xl font-black">+10%</span>
            <span className="text-lg sm:text-xl self-center opacity-90">
              meta de inclusión laboral incentivada
            </span>
          </div>
        </div>
      </section>

      {/* PROPUESTAS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* CARD */}
            {[
              {
                icon: Briefcase,
                tag: "Dignidad Laboral",
                title: "Empleo como bienestar",
                text: "La inclusión laboral será eje del bienestar social, pasando de una obligación legal a una oportunidad productiva real.",
              },
              {
                icon: Handshake,
                tag: "Incentivo Empresarial",
                title: "Compromiso por la Inclusión",
                text: "Descuento progresivo en el ICA para empresas que superen el 10% de su nómina con personas con discapacidad.",
              },
              {
                icon: GraduationCap,
                tag: "Formación",
                title: "SENA aliado estratégico",
                text: "Capacitación técnica alineada a los gremios locales para garantizar que la formación termine en contrato real.",
              },
              {
                icon: Settings,
                tag: "Asistencia Técnica",
                title: "Oficina de Ajustes Razonables",
                text: "Acompañamiento gratuito a empresarios para adaptar puestos de trabajo sin riesgos legales.",
              },
              {
                icon: Scale,
                tag: "Seguimiento",
                title: "Acompañamiento y evaluación",
                text: "Sistema de monitoreo para garantizar empleabilidad sostenible con enfoque inclusivo.",
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
              Marco Legal que Respaldará esta Propuesta
            </h3>

            <ul className="space-y-6 text-gray-800 text-lg">
              <li>
                <strong>Ley 361 de 1997:</strong> Integración social y laboral
                de personas con discapacidad.
              </li>
              <li>
                <strong>Ley 1618 de 2013:</strong> Accesibilidad, ajustes
                razonables y acciones afirmativas.
              </li>
              <li>
                <strong>Ley 2466 de 2025 (Reforma Laboral):</strong> Obligación
                de contratación según tamaño empresarial y reporte al
                MinTrabajo.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center mt-20">
            <Link
              to="/inscribirse"
              className="inline-block bg-orange-500 hover:bg-orange-400 text-purple-900 px-12 py-6 rounded-full text-2xl font-black shadow-2xl hover:scale-105 transition"
            >
              Apoyar una Inclusión Real
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
