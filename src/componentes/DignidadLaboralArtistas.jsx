import {
  ArrowLeft,
  Palette,
  ShieldCheck,
  Wallet,
  Building2,
  Users,
  Scale,
} from "lucide-react";
import Footer from "../componentes/Footer";
import { Link } from "react-router-dom";

export default function DignidadLaboralArtistas() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-purple-900 to-purple-700 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/artistas-hero.jpg')" }}
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
            Dignidad Laboral
            <span className="block text-orange-400 mt-4">
              para Artistas y Creadores
            </span>
          </h1>

          <p className="mt-8 text-xl sm:text-3xl font-light max-w-4xl mx-auto">
            El arte es trabajo • La cultura también cotiza
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
                icon: Palette,
                tag: "Reconocimiento",
                title: "Artistas como Trabajadores",
                text: "Reconocer formalmente a los artistas y gestores culturales como trabajadores con acceso a seguridad social, incentivos y empleo digno.",
              },
              {
                icon: ShieldCheck,
                tag: "Formalización",
                title: "Estatuto del Trabajador del Arte",
                text: "Reglamentar la contratación por obra o labor artística garantizando cotización proporcional a salud, pensión y ARL, incluso para ingresos inferiores a un SMMLV.",
              },
              {
                icon: Wallet,
                tag: "Protección Social",
                title: "Fondo de Solidaridad Pensional",
                text: "Activación de la subcuenta de subsistencia para artistas mayores, asegurando un Bono Pensional Vitalicio a quienes no alcanzaron semanas por informalidad.",
              },
              {
                icon: Building2,
                tag: "Descentralización",
                title: "Cocrea Regional",
                text: "Extender el incentivo tributario del 165% a municipios categoría 4, 5 y 6, priorizando la contratación digna de talento artístico local.",
              },
              {
                icon: Users,
                tag: "Economía Cultural",
                title: "Red de Espacios de Co-creación",
                text: "Transformar infraestructuras públicas subutilizadas en nodos culturales con talleres, conectividad y espacios de exhibición sin costo.",
              },
              {
                icon: Scale,
                tag: "Derechos",
                title: "Remuneración Justa",
                text: "Garantizar el pago justo por comunicación pública y circulación de obras, fortaleciendo la sostenibilidad del sector cultural.",
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
              Marco Legal de la Dignidad Artística
            </h3>

            <ul className="space-y-6 text-gray-800 text-lg">
              <li>
                <strong>Ley 2466 de 2025:</strong> Establece el estatus laboral
                de artistas y trabajadores culturales, fortaleciendo la
                formalización y la protección social.
              </li>
              <li>
                <strong>Ley 2381 de 2024:</strong> Facilita el acceso a
                pensiones en sectores informales y de ingresos variables como el
                artístico.
              </li>
              <li>
                <strong>Ley 1403 de 2010 (Ley Fanny Mikey):</strong> Garantiza
                derechos de remuneración por comunicación pública de obras
                artísticas y culturales.
              </li>
            </ul>
          </div>

          {/* CIERRE */}
          <div className="text-center mt-20">
            <Link
              to="/inscribirse"
              className="inline-block bg-orange-500 hover:bg-orange-400 text-purple-900 px-12 py-6 rounded-full text-2xl font-black shadow-2xl hover:scale-105 transition"
            >
              Defender la Cultura y el Trabajo Digno
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
