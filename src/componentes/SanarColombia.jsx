import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Brain, Shield, Heart } from "lucide-react";

export default function SanarColombia() {
  return (
    <section id="propuestas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="text-4xl md:text-6xl font-black text-center text-purple-900 mb-20"
          data-aos="fade-up"
        >
          Vamos a Sanar a Colombia
        </h2>

        <div className="grid md:grid-cols-3 gap-10" id="SaludMental">
          {[
            {
              icon: Heart,
              title: "Familias Cuidadoras",
              desc: "La propuesta Familias Cuidadoras busca transformar la gestión social en Colombia.",
              link: "/familias-cuidadoras",
              delay: 0,
            },
            {
              icon: Brain,
              title: "Salud Mental para Todos",
              desc: "Centros de escucha gratuitos en cada localidad...",
              link: "/salud-mental",
              delay: 150,
            },
            {
              icon: Shield,
              title: "Transparencia Absoluta",
              desc: "Plataformas digitales de rendición de cuentas...",
              link: "/Transparencia",
              delay: 300,
            },
            {
              icon: Users,
              title: "Educación Emocional",
              desc: "Talleres integrados en colegios y empresas...",
              link: "/educacion-emocional",
              delay: 450,
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
  );
}
