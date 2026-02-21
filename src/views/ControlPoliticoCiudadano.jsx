import { ArrowLeft, Laptop, BarChart3, Eye, Zap, Scale } from "lucide-react";
import Footer from "../componentes/Footer";
import { Link } from "react-router-dom";

export default function ControlPoliticoCiudadano() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-purple-900 to-purple-700 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/control-politico-hero.jpg')" }}
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
            Control Político
            <span className="block text-orange-400 mt-4">
              al Servicio del Ciudadano
            </span>
          </h1>

          <p className="mt-8 text-xl sm:text-3xl font-light max-w-4xl mx-auto">
            Transparencia • Participación • Legislación que responde
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
                icon: Laptop,
                tag: "E-democracia",
                title: "Incidencia Ciudadana Digital",
                text: "Plataforma donde el ciudadano prioriza inversión local, vota decisiones públicas y hace seguimiento en tiempo real a proyectos y contratación.",
              },
              {
                icon: BarChart3,
                tag: "Datos Abiertos",
                title: "Seguimiento a la Contratación",
                text: "Integración con datos abiertos del SECOP II para vigilar contratos, cronogramas y ejecución de recursos públicos.",
              },
              {
                icon: Eye,
                tag: "Transparencia",
                title: "Rendición de Cuentas Activa",
                text: "Evolucionar audiencias públicas a Diálogos de Gestión Territorial con respuesta obligatoria a hallazgos ciudadanos.",
              },
              {
                icon: Scale,
                tag: "Control Social",
                title: "Veedurías y Observatorios",
                text: "Fortalecer observatorios ciudadanos con apoyo técnico, análisis de datos y acceso directo a información pública.",
              },
              {
                icon: Zap,
                tag: "Eficiencia",
                title: "Legislación Ágil y Técnica",
                text: "Depuración de normas obsoletas y agenda de Legislación de Emergencia Social para agilizar trámites en salud, vivienda y empleo.",
              },
              {
                icon: Laptop,
                tag: "Modernización",
                title: "Gobierno Digital",
                text: "Uso de tecnologías para acercar el Estado al ciudadano, reducir burocracia y mejorar la toma de decisiones públicas.",
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
              Marco Legal de Participación y Transparencia
            </h3>

            <ul className="space-y-6 text-gray-800 text-lg">
              <li>
                <strong>
                  Ley 1622 de 2013 (Estatuto de Ciudadanía Juvenil):
                </strong>{" "}
                Garantiza la participación efectiva de jóvenes en la vida
                política y pública.
              </li>
              <li>
                <strong>Ley 1757 de 2015:</strong> Establece mecanismos de
                participación democrática y control ciudadano.
              </li>
              <li>
                <strong>Ley 1712 de 2014:</strong> Garantiza la transparencia y
                el acceso a la información pública.
              </li>
              <li>
                <strong>Política de Gobierno Digital (MinTIC):</strong>{" "}
                Respaldan técnicamente la implementación de plataformas de
                e-democracia.
              </li>
            </ul>
          </div>

          {/* CIERRE */}
          <div className="text-center mt-20">
            <Link
              to="/inscribirse"
              className="inline-block bg-orange-500 hover:bg-orange-400 text-purple-900 px-12 py-6 rounded-full text-2xl font-black shadow-2xl hover:scale-105 transition"
            >
              Participar para Transformar
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
