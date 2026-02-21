import {
  ArrowLeft,
  Brain,
  Hospital,
  Users,
  Laptop,
  ShieldPlus,
  Scale,
} from "lucide-react";
import Footer from "../componentes/Footer";
import { Link } from "react-router-dom";

export default function RedHospitalariaPsicosocial() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-purple-900 to-purple-700 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/salud-mental-hero.jpg')" }}
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
            Red Hospitalaria Psicosocial
            <span className="block text-orange-400 mt-4">
              Terapia Preventiva y Comunitaria
            </span>
          </h1>

          <p className="mt-8 text-xl sm:text-3xl font-light max-w-4xl mx-auto">
            Prevenir • Acompañar • Sanar desde la comunidad
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
                icon: Hospital,
                tag: "Cobertura",
                title: "Equipos de Salud Mental Integrados",
                text: "Integración permanente de psicólogos y profesionales psicosociales en hospitales y centros de atención primaria.",
              },
              {
                icon: Brain,
                tag: "Prevención",
                title: "Terapia Psicosocial Preventiva",
                text: "Atención temprana para reducir crisis emocionales, consumo problemático y violencias antes de que escalen.",
              },
              {
                icon: Users,
                tag: "Territorio",
                title: "Programas Comunitarios",
                text: "Estrategias territoriales de apoyo psicosocial con enfoque barrial, familiar y comunitario.",
              },
              {
                icon: Laptop,
                tag: "Acceso",
                title: "Atención Virtual y Presencial",
                text: "Red híbrida de atención en salud mental que garantice acceso oportuno sin barreras geográficas.",
              },
              {
                icon: ShieldPlus,
                tag: "Enfoque Diferencial",
                title: "Atención con enfoque poblacional",
                text: "Priorización de jóvenes, mujeres, cuidadores y poblaciones vulnerables desde una mirada integral.",
              },
              {
                icon: Scale,
                tag: "Sistema",
                title: "Salud Mental como Derecho",
                text: "La salud mental deja de ser reactiva y se consolida como eje del bienestar social y la prevención.",
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
              Marco Legal que Respalda la Salud Mental
            </h3>

            <ul className="space-y-6 text-gray-800 text-lg">
              <li>
                <strong>Ley 1616 de 2013:</strong> Establece la atención
                integral en salud mental como prioridad del sistema de salud.
              </li>
              <li>
                <strong>Ley 2460 de 2025:</strong> Refuerza el enfoque
                comunitario y prioriza juventudes y prevención en salud mental.
              </li>
            </ul>
          </div>

          {/* CIERRE */}
          <div className="text-center mt-20">
            <Link
              to="/inscribirse"
              className="inline-block bg-orange-500 hover:bg-orange-400 text-purple-900 px-12 py-6 rounded-full text-2xl font-black shadow-2xl hover:scale-105 transition"
            >
              Defender la Salud Mental
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
