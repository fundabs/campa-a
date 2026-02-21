import {
  ArrowLeft,
  HeartHandshake,
  Users,
  PhoneCall,
  Scale,
  ShieldCheck,
  Coins,
} from "lucide-react";
import Footer from "../componentes/Footer";
import { Link } from "react-router-dom";

export default function MediacionPsicosocial() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-purple-900 to-purple-700 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/mediacion-hero.jpg')" }}
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
            Mediación y Atención
            <span className="block text-orange-400 mt-4">
              Psicosocial Comunitaria
            </span>
          </h1>

          <p className="mt-8 text-xl sm:text-3xl font-light max-w-4xl mx-auto">
            Prevención • Resolución de conflictos • Salud mental comunitaria
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
            <span className="text-5xl font-black">24/7</span>
            <span className="text-lg sm:text-xl self-center opacity-90">
              atención psicosocial y mediación comunitaria
            </span>
          </div>
        </div>
      </section>

      {/* PROPUESTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* BLOQUES PRINCIPALES */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: HeartHandshake,
                tag: "Paz es Vida",
                title: "Centros de Escucha y Mediación",
                text: "Crearemos una red pública y gratuita de centros comunitarios donde psicólogos y mediadores en equidad atiendan de manera integral conflictos emocionales, familiares, vecinales y sociales.",
              },
              {
                icon: Users,
                tag: "Territorio",
                title: "Agentes Comunitarios",
                text: "Capacitaremos líderes barriales y madres comunitarias en Primeros Auxilios Psicológicos y mediación, como primer filtro antes del hospital o la estación de policía.",
              },
              {
                icon: PhoneCall,
                tag: "Emergencia",
                title: "Línea Voces por la Vida",
                text: "Atención psicosocial 24/7 mediante tele-orientación, articulada con brigadas de reacción rápida para crisis de salud mental.",
              },
              {
                icon: ShieldCheck,
                tag: "Prevención",
                title: "Conflicto resuelto, salud protegida",
                text: "Ansiedad, estrés y depresión muchas veces nacen de conflictos no resueltos. Atender uno previene el otro y evita escalamiento a violencia.",
              },
              {
                icon: Scale,
                tag: "Legalidad",
                title: "Mediación antes que sanción",
                text: "Fortalecemos la mediación comunitaria para resolver conflictos de convivencia antes de que se conviertan en procesos judiciales o violencia física.",
              },
              {
                icon: Coins,
                tag: "Viabilidad",
                title: "Financiación sostenible",
                text: "La salud mental comunitaria es una inversión social viable y priorizable dentro de los recursos existentes.",
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
              Marco Legal que Sustenta la Propuesta
            </h3>

            <ul className="space-y-6 text-gray-800 text-lg">
              <li>
                <strong>Ley 2460 de 2025 (Nueva Ley de Salud Mental):</strong>{" "}
                Introduce el enfoque biopsicosocial y obliga a las entidades
                territoriales a crear Entornos Protectores.
              </li>
              <li>
                <strong>Ley 2220 de 2022 (Estatuto de Conciliación):</strong>{" "}
                Permite la creación de centros de mediación y conciliación
                gratuitos en entidades públicas.
              </li>
              <li>
                <strong>Ley 1801 de 2016 (Código de Policía):</strong> Autoriza
                la mediación policial y comunitaria para resolver conflictos de
                convivencia antes de escalar a violencia.
              </li>
            </ul>
          </div>

          {/* FINANCIACIÓN */}
          <div className="mt-20 max-w-5xl mx-auto bg-purple-900 text-white rounded-3xl p-12 shadow-2xl">
            <h3 className="text-3xl font-black mb-8 text-center">
              ¿Cómo se financia?
            </h3>

            <ul className="space-y-5 text-lg">
              <li>
                <strong>SGP – Salud Pública:</strong> La Ley 2460 de 2025
                permite priorizar estos recursos en salud mental comunitaria.
              </li>
              <li>
                <strong>Tasa Pro-Deporte y Pro-Cultura:</strong> Financiación de
                entornos protectores como parques, centros culturales y espacios
                comunitarios.
              </li>
              <li>
                <strong>Presupuestos Participativos:</strong> La comunidad
                decide la destinación de recursos para dotar y fortalecer estos
                centros.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center mt-20">
            <Link
              to="/inscribirse"
              className="inline-block bg-orange-500 hover:bg-orange-400 text-purple-900 px-12 py-6 rounded-full text-2xl font-black shadow-2xl hover:scale-105 transition"
            >
              Apoyar la Paz y la Salud Mental
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
