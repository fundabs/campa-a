import {
  ArrowLeft,
  HeartHandshake,
  Users,
  GraduationCap,
  Wallet,
  Briefcase,
  Stethoscope,
  Scale,
} from "lucide-react";
import Footer from "../componentes/Footer";
import { Link } from "react-router-dom";

export default function FamiliasDelCuidado() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-purple-900 to-purple-700 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/familias-cuidado-hero.jpg')" }}
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
            Familias del Cuidado
            <span className="block text-orange-400 mt-4">
              Red Nacional de Soporte
            </span>
          </h1>

          <p className="mt-8 text-xl sm:text-3xl font-light max-w-4xl mx-auto">
            Reconocer • Reducir • Redistribuir la carga del cuidado
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
            <span className="text-5xl font-black">80%</span>
            <span className="text-lg sm:text-xl self-center opacity-90">
              de las personas cuidadoras son mujeres
            </span>
          </div>
        </div>
      </section>

      {/* PROPUESTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* EJES */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: Users,
                tag: "Identificación",
                title: "Registro Único de Cuidadores (RUC)",
                text: "Censo y caracterización para identificar perfiles, necesidades y niveles de vulnerabilidad socioeconómica de quienes ejercen el cuidado no remunerado.",
              },
              {
                icon: GraduationCap,
                tag: "Profesionalización",
                title: "Certificación con el SENA",
                text: "Ruta de certificación de competencias laborales que valida la experiencia del cuidado y abre acceso al empleo formal.",
              },
              {
                icon: Wallet,
                tag: "Protección de Ingresos",
                title: "Apoyo económico al cuidado",
                text: "Transferencias monetarias condicionadas e incentivos fiscales para hogares donde el cuidado impide la vinculación laboral a tiempo completo.",
              },
              {
                icon: Briefcase,
                tag: "Flexibilidad Laboral",
                title: "Sello Empresa Amiga del Cuidador",
                text: "Reconocimiento a empresas que ofrecen flexibilidad horaria, trabajo remoto y ajustes razonables para cuidadores.",
              },
              {
                icon: Stethoscope,
                tag: "Salud",
                title: "Telemedicina prioritaria",
                text: "Acceso preferente a telepsicología y orientación en salud para cuidadores que no disponen de tiempo para atención presencial.",
              },
              {
                icon: HeartHandshake,
                tag: "Equidad de Género",
                title: "Cuidar no debe empobrecer",
                text: "Reconocemos que el cuidado recae principalmente en mujeres y lo abordamos como una política de igualdad y justicia social.",
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
              Marco Legal que Respalda la Red de Cuidado
            </h3>

            <ul className="space-y-6 text-gray-800 text-lg">
              <li>
                <strong>Ley 2297 de 2023 (Ley del Cuidador):</strong> Reconoce y
                protege a los cuidadores, habilitando registros, flexibilidad
                laboral y acceso prioritario a salud.
              </li>
              <li>
                <strong>Ley 2456 de 2025:</strong> Crea los Fondos de Protección
                y Apoyo a Personas con Discapacidad y sus Cuidadores,
                permitiendo transferencias entre 0.25 y 1 SMMLV.
              </li>
              <li>
                <strong>Ley 1413 de 2010 (Economía del Cuidado):</strong>{" "}
                Reconoce el cuidado no remunerado como aporte económico real
                (≈20% del PIB), justificando inversión pública.
              </li>
              <li>
                <strong>Sentencia T-147 de 2023:</strong> La Corte
                Constitucional reconoce el cuidado como derecho humano y
                responsabilidad compartida del Estado.
              </li>
            </ul>
          </div>

          {/* CIERRE */}
          <div className="text-center mt-20">
            <Link
              to="/inscribirse"
              className="inline-block bg-orange-500 hover:bg-orange-400 text-purple-900 px-12 py-6 rounded-full text-2xl font-black shadow-2xl hover:scale-105 transition"
            >
              Apoyar a Quienes Cuidan
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
