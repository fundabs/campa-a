import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Home,
  ShieldCheck,
  HeartHandshake,
  Users,
  Briefcase,
  GraduationCap,
  Bus,
} from "lucide-react";
import Footer from "../componentes/Footer.jsx";

/* =========================
   DATA
========================= */

// Infraestructura
const infraestructuraItems = [
  {
    id: 1,
    icon: Home,
    title: "Ubicación Territorial",
    description:
      "Centros ubicados directamente en los barrios, eliminando barreras de transporte, costos y trámites burocráticos para los ciudadanos.",
  },
  {
    id: 2,
    con: ShieldCheck,
    title: "Atención a la Violencia",
    description:
      "Acceso universal a apoyo técnico, legal y psicológico para personas en contextos de violencia intrafamiliar, drogadicción o abandono.",
  },
  {
    id: 3,
    icon: HeartHandshake,
    title: "Función Resolutiva",
    description:
      "Mediación temprana de conflictos familiares y comunitarios para evitar su escalamiento al sistema judicial o de salud.",
  },
];

// Programa
const programaItems = [
  {
    id: 1,
    icon: Users,
    title: "Selección Estratégica",
    description:
      "Familias con liderazgo comunitario y sin antecedentes de violencia que funcionan como núcleos de referencia y apoyo comunitario.",
  },
  {
    id: 2,
    icon: HeartHandshake,
    title: "Acompañamiento Profesional",
    description:
      "Respaldo permanente de equipos interdisciplinarios conformados por psicólogos, trabajadores sociales y abogados.",
  },
  {
    id: 3,
    icon: Briefcase,
    title: "Mesas Técnicas",
    description:
      "Supervisión directa de los Ministerios de Justicia, Salud e Igualdad para garantizar impacto real y transparencia.",
  },
];

// Beneficios
const beneficiosItems = [
  {
    id: 1,
    icon: Briefcase,
    text: "Acceso preferencial a la administración de la función pública.",
  },
  {
    id: 2,
    icon: GraduationCap,
    text: "Incentivos en educación superior y formación certificada.",
  },
  {
    id: 3,
    icon: Bus,
    text: "Subsidios de transporte y alimentación.",
  },
  {
    id: 4,
    icon: Home,
    text: "Prioridad en programas de vivienda y desarrollo social.",
  },
];

/* =========================
   COMPONENT
========================= */

export default function FamiliasCuidadorasModelo() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-purple-900 to-purple-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-6xl mx-auto pt-12">
          <Link
            to="/"
            className="absolute top-6 left-8 flex items-center gap-2 text-white/80 hover:text-white transition"
          >
            <ArrowLeft className="w-6 h-6" />
            Volver al inicio
          </Link>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-tight">
            Familias Cuidadoras
            <span className="block text-orange-400 mt-4">
              Vamos a Sanar a Colombia
            </span>
          </h1>

          <p className="mt-10 text-xl sm:text-3xl font-light max-w-5xl mx-auto">
            Un modelo técnico y humano que lleva la presencia del Estado al
            corazón de los barrios y fortalece el hogar como núcleo de
            transformación social.
          </p>
        </div>
      </section>

      {/* VISIÓN */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-purple-900 mb-8">
            Visión General
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Familias Cuidadoras transforma la gestión social en Colombia,
            previniendo la violencia y reconstruyendo el tejido social desde la
            base: el hogar.
          </p>
        </div>
      </section>

      {/* INFRAESTRUCTURA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl sm:text-5xl font-black text-purple-900 text-center mb-16">
            Centros de Mediación y Atención Psicosocial
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {infraestructuraItems.map(
              ({ id, icon: Icon, title, description }) => (
                <article
                  key={id}
                  className="group relative bg-gradient-to-b from-white to-gray-50 rounded-3xl shadow-xl p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(88,28,135,0.35)]"
                >
                  <div className="absolute inset-0 rounded-3xl bg-purple-500/5 opacity-0 group-hover:opacity-100 transition" />

                  {Icon && (
                    <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-purple-100 text-purple-800 mb-6 group-hover:scale-110 transition">
                      <Icon className="w-7 h-7" />
                    </div>
                  )}

                  <h3 className="text-2xl font-bold text-purple-900 mb-4">
                    {title}
                  </h3>

                  <p className="text-gray-700 text-lg leading-relaxed">
                    {description}
                  </p>
                </article>
              )
            )}
          </div>
        </div>
      </section>

      {/* PROGRAMA */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl sm:text-5xl font-black text-purple-900 text-center mb-16">
            Programa Familias Cuidadoras
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {programaItems.map(({ id, icon: Icon, title, description }) => (
              <article
                key={id}
                className="group relative bg-white rounded-3xl shadow-xl p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(88,28,135,0.35)]"
              >
                <div className="absolute inset-0 rounded-3xl bg-purple-500/5 opacity-0 group-hover:opacity-100 transition" />

                {Icon && (
                  <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-purple-100 text-purple-800 mb-6 group-hover:scale-110 transition">
                    <Icon className="w-7 h-7" />
                  </div>
                )}

                <h3 className="text-2xl font-bold text-purple-900 mb-4">
                  {title}
                </h3>

                <p className="text-gray-700 text-lg leading-relaxed">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="py-24 bg-purple-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-black mb-12">
            Beneficios para las Familias Cuidadoras
          </h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xl max-w-4xl mx-auto">
            {beneficiosItems.map(({ id, icon: Icon, text }) => (
              <li
                key={id}
                className="flex items-center gap-4 bg-white/10 rounded-2xl px-6 py-5 hover:bg-white/20 transition"
              >
                {Icon && <Icon className="w-6 h-6 text-orange-400" />}
                {text}
              </li>
            ))}
          </ul>

          <div className="mt-16">
            <Link
              to="/inscribirse"
              className="inline-block bg-orange-500 hover:bg-orange-400 text-purple-900 px-14 py-6 rounded-full text-2xl font-black shadow-2xl hover:scale-105 transition"
            >
              Quiero Ser Familia Cuidadora
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
