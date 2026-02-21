import {
  ArrowLeft,
  PawPrint,
  Heart,
  Shield,
  MapPin,
  Scale,
  Megaphone,
} from "lucide-react";
import Footer from "../componentes/Footer";
import { Link } from "react-router-dom";

export default function TenenciaResponsableMascotas() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-purple-900 to-purple-700 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/mascotas-hero.jpg')" }}
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
            Tenencia Responsable
            <span className="block text-orange-400 mt-4">
              Bienestar Animal y Convivencia
            </span>
          </h1>

          <p className="mt-8 text-xl sm:text-3xl font-light max-w-4xl mx-auto">
            Proteger • Cuidar • Convivir con respeto
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
                icon: PawPrint,
                tag: "Bienestar Animal",
                title: "Protección Integral de Mascotas",
                text: "Modernizar y fortalecer el marco legal para garantizar el bienestar, la protección y el respeto hacia los animales de compañía.",
              },
              {
                icon: Heart,
                tag: "Prevención",
                title: "Adopción y Esterilización",
                text: "Campañas permanentes de adopción responsable y esterilización para reducir el abandono y el maltrato animal.",
              },
              {
                icon: Megaphone,
                tag: "Educación",
                title: "Cultura de Tenencia Responsable",
                text: "Promoción de campañas pedagógicas sobre deberes, cuidados y convivencia responsable con animales de compañía.",
              },
              {
                icon: MapPin,
                tag: "Espacio Público",
                title: "Espacios Seguros y Dignos",
                text: "Garantizar parques, zonas verdes y espacios públicos adecuados para la convivencia segura entre personas y animales.",
              },
              {
                icon: Shield,
                tag: "Convivencia",
                title: "Seguridad Ciudadana",
                text: "Normas claras que reduzcan conflictos vecinales y promuevan la convivencia armónica en propiedad horizontal y espacios comunes.",
              },
              {
                icon: Scale,
                tag: "Justicia",
                title: "Cero Tolerancia al Maltrato",
                text: "Fortalecimiento de sanciones y mecanismos de control contra el maltrato animal.",
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
              Marco Legal de Protección Animal
            </h3>

            <ul className="space-y-6 text-gray-800 text-lg">
              <li>
                <strong>Ley 1801 de 2016:</strong> Regula la tenencia
                responsable de mascotas, la convivencia ciudadana y el
                comportamiento en espacios públicos y propiedad horizontal.
              </li>
              <li>
                <strong>Ley 84 de 1989 (Estatuto de Protección Animal):</strong>{" "}
                Establece principios de protección animal y sanciones por
                maltrato.
              </li>
              <li>
                <strong>Ley 2455 de 2025 (Ley Ángel):</strong> Fortalece las
                sanciones penales y administrativas contra el maltrato animal.
              </li>
            </ul>
          </div>

          {/* CIERRE */}
          <div className="text-center mt-20">
            <Link
              to="/inscribirse"
              className="inline-block bg-orange-500 hover:bg-orange-400 text-purple-900 px-12 py-6 rounded-full text-2xl font-black shadow-2xl hover:scale-105 transition"
            >
              Defender a Quienes No Tienen Voz
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
