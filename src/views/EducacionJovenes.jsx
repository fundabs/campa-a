import {
  ArrowLeft,
  GraduationCap,
  Wallet,
  Cpu,
  Rocket,
  Users,
  Scale,
} from "lucide-react";
import Footer from "../componentes/Footer";
import { Link } from "react-router-dom";

export default function EducacionJovenes() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-purple-900 to-purple-700 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/educacion-jovenes-hero.jpg')" }}
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
            Educación para Jóvenes
            <span className="block text-orange-400 mt-4">
              Oportunidades para Todos
            </span>
          </h1>

          <p className="mt-8 text-xl sm:text-3xl font-light max-w-4xl mx-auto">
            Inclusión • Digitalización • Empleo con futuro
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
                icon: Wallet,
                tag: "Permanencia",
                title: "Bono de Sostenibilidad Educativa",
                text: "Subsidio condicionado al rendimiento y permanencia académica para jóvenes Sisbén A y B, cubriendo transporte y materiales y evitando la deserción.",
              },
              {
                icon: GraduationCap,
                tag: "Acceso",
                title: "Educación Gratuita con Apoyo Real",
                text: "Ir más allá de la matrícula cero garantizando que la falta de recursos no sea la causa de abandono educativo.",
              },
              {
                icon: Cpu,
                tag: "Pertinencia",
                title: "SENA 4.0",
                text: "Modernización de la formación técnica y tecnológica en programación, ciberseguridad, energías renovables y agroindustria tecnificada.",
              },
              {
                icon: Rocket,
                tag: "Emprendimiento",
                title: "Capital Semilla Juvenil",
                text: "Fondo territorial de inversión de impacto con recursos no reembolsables y acompañamiento técnico y jurídico para emprendimientos juveniles.",
              },
              {
                icon: Users,
                tag: "Acompañamiento",
                title: "Tutorías y Mentorías Senior",
                text: "Profesionales y empresas apadrinan jóvenes vulnerables fortaleciendo habilidades blandas y acceso a redes laborales.",
              },
              {
                icon: Scale,
                tag: "Equidad",
                title: "Primer Empleo con Futuro",
                text: "Eliminar barreras de experiencia y facilitar la inserción laboral juvenil con enfoque de igualdad de oportunidades.",
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
              Marco Legal de la Educación y el Empleo Juvenil
            </h3>

            <ul className="space-y-6 text-gray-800 text-lg">
              <li>
                <strong>Ley 115 de 1994 (Ley General de Educación):</strong>{" "}
                Garantiza el derecho a la educación como base del desarrollo
                social y económico.
              </li>
              <li>
                <strong>Ley 2470 de 2025:</strong> Establece la gratuidad y
                pertinencia en programas técnicos y profesionales.
              </li>
              <li>
                <strong>Ley 1780 de 2016 (Ley de Empleo Juvenil):</strong>{" "}
                Elimina barreras de experiencia y facilita el acceso al primer
                empleo.
              </li>
            </ul>
          </div>

          {/* CIERRE */}
          <div className="text-center mt-20">
            <Link
              to="/inscribirse"
              className="inline-block bg-orange-500 hover:bg-orange-400 text-purple-900 px-12 py-6 rounded-full text-2xl font-black shadow-2xl hover:scale-105 transition"
            >
              Apostarle al Futuro del País
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
