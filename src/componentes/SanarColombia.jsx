import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Brain,
  Shield,
  Heart,
  PawPrint,
  Palette,
  Eye,
  GraduationCap,
  HeartHandshake,
} from "lucide-react";

export default function SanarColombia() {
  return (
    <section id="propuestas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="text-4xl md:text-6xl font-black text-center text-purple-900 mb-20"
          data-aos="fade-up"
        >
          PROPUESTAS Y ACCIONES CONCRETAS
        </h2>

        <div className="grid md:grid-cols-3 gap-10" id="SaludMental">
          {[
            {
              icon: Heart,
              title:
                " Inclusión y contratación de personas en condición de discapacidad",
              desc: "Promoveremos la dignidad laboral como un punto central para el bienestar  de las personas con discapacidad.",
              link: "./InclusionLaboral",
              delay: 0,
            },
            {
              icon: Brain,
              title: " Creación de centros de mediación y atención psicosocial",
              desc: "Conforme a la salud mental es imprescindible fomentar diversas iniciativas que permitan dar una respuesta adecuada a las crecientes necesidades de los ciudadanos.",
              link: "./MediacionPsicosocial",
              delay: 150,
            },
            {
              icon: Shield,
              title: "Programa de Familias del Cuidado (Red de Soporte)",
              desc: "Implementar una red nacional que reconozca, reduzca y redistribuya la carga del cuidado no remunerado, garantizando la salud mental",
              link: "./FamiliasCuidadoras",
              delay: 300,
            },
            {
              icon: Users,
              title:
                "Fortalecimiento de la red hospitalaria psicosocial y terapia preventiva",
              desc: "Aumentar la cobertura de atención en salud mental, prevención primaria y terapias psicosociales en centros hospitalarios y atención primaria en salud con enfoque comunitario. ",
              link: "/redHospitalariaPsicosocial",
              delay: 450,
            },
            {
              icon: PawPrint,
              title:
                "Fortalecimiento de la Ley de Mascotas, tenencia y de compañía",
              desc: "Modernizar y fortalecer el marco legal de tenencia responsable de animales de compañía para proteger bienestar animal, convivencia ciudadana y seguridad pública. ",
              link: "/tenenciaResponsableMascotas",
              delay: 450,
            },
            {
              icon: Palette,
              title: "Dignidad laboral y fomento de los artistas en Colombia",
              desc: "Impulsar políticas que reconozcan a artistas como trabajadores con acceso a seguridad social, incentivos, formación, espacios de trabajo cultural y empleo digno. ",
              link: "/dignidadLaboralArtistas",
              delay: 450,
            },
            {
              icon: Eye,
              title:
                " Control político y legislación eficiente para los ciudadanos",
              desc: "Implementar mecanismos de participación efectiva, transparencia en la gestión pública y modernización legislativa para responder a las necesidades ciudadanas. ",
              link: "/controlPoliticoCiudadano",
              delay: 450,
            },
            {
              icon: GraduationCap,
              title: " Educación para jóvenes y oportunidades para todos",
              desc: "Para generar una verdadera transformación e impacto en la sociedad colombiana es imprescindible el acceso a educación de calidad y oportunidades socioeconómicas para todos los jóvenes, enfocado en inclusión, digitalización y empleo con futuro. ",
              link: "/educacionJovenes",
              delay: 450,
            },
            {
              icon: HeartHandshake,
              title: "Seguridad para el ciudadano (personal, social y mental) ",
              desc: "Esta propuesta se fundamenta en desarrollar y combinar estrategias de seguridad física y bienestar mental con enfoque comunitario y territorial para garantizar seguridad integral . ",
              link: "/seguridadCiudadana",
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
