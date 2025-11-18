// src/views/Transparencia.jsx
import {
  ArrowLeft,
  CheckCircle,
  Users,
  FileText,
  TrendingUp,
  Shield,
  Lock,
  Eye,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Transparencia() {
  return (
    <>
      {/* HERO IMPACTANTE */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6 bg-gradient-to-br from-purple-900 via-purple-800 to-orange-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/transparencia-hero.jpg')" }} // opcional: pon una foto tuya con documentos o gente revisando datos
        />

        <div className="relative z-10 max-w-5xl mx-auto pt-10">
          <Link
            to="/"
            className="absolute top-0 left-0 flex items-center gap-2 hover:text-orange-300 transition"
          >
            <ArrowLeft className="w-6 h-6" /> Volver al inicio
          </Link>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-tight">
            Transparencia
            <span className="block text-orange-400 mt-4">Absoluta</span>
          </h1>

          <p className="mt-10 text-xl sm:text-3xl font-light max-w-4xl mx-auto">
            Cada peso, cada contrato y cada decisión será pública y verificable
            por todos los bogotanos.
          </p>

          <div className="mt-16 flex flex-wrap justify-center gap-8 text-2xl sm:text-4xl font-black">
            <div className="text-center">
              <div className="text-orange-300">100%</div>
              <div className="text-lg opacity-90 mt-2">Contratos públicos</div>
            </div>
            <div className="text-center">
              <div className="text-orange-300">24/7</div>
              <div className="text-lg opacity-90 mt-2">Portal en línea</div>
            </div>
            <div className="text-center">
              <div className="text-orange-300">0</div>
              <div className="text-lg opacity-90 mt-2">
                Tolerancia a la corrupción
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPROMISOS CLAROS Y VISUALES */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl sm:text-6xl font-black text-center text-purple-900 mb-16">
            Mi Pacto de Transparencia
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: Eye,
                title: "Portal Transparente Bogotá",
                desc: "Todos los contratos, licitaciones y gastos actualizados en tiempo real. Cualquier ciudadano podrá consultarlos desde su celular.",
              },
              {
                icon: FileText,
                title: "Rendición de cuentas mensual",
                desc: "Informe público detallado cada 30 días con gráficos, videos y datos descargables. Nada que esconder.",
              },
              {
                icon: Users,
                title: "Veedurías ciudadanas reales",
                desc: "Comités vecinales con poder vinculante para revisar proyectos y frenar irregularidades.",
              },
              {
                icon: Lock,
                title: "Cero contratos a dedo",
                desc: "Todas las contrataciones por mérito y licitación pública. Se acabaron los favores políticos.",
              },
              {
                icon: TrendingUp,
                title: "Presupuesto participativo",
                desc: "Los bogotanos deciden directamente en qué se invierte el 15 % del presupuesto distrital.",
              },
              {
                icon: Shield,
                title: "Auditoría externa independiente",
                desc: "Firma internacional revisará cada año las cuentas. Resultados 100 % públicos.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border-l-8 border-orange-500"
              >
                <item.icon className="w-14 h-14 text-orange-600 mb-6" />
                <h3 className="text-2xl font-bold text-purple-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                <CheckCircle className="w-8 h-8 text-green-500 mt-6" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LLAMADO FINAL FUERTE */}
      <section className="py-32 bg-gradient-to-r from-orange-600 to-purple-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl sm:text-7xl font-black mb-10">
            La corrupción se acaba
            <br />
            <span className="text-orange-300">cuando la gente ve todo</span>
          </h2>
          <p className="text-2xl mb-12 opacity-90">
            Bogotá merece una administración cristalina, sin secretos ni
            privilegios.
          </p>
          <Link
            to="/inscribirse"
            className="inline-block bg-white text-purple-900 px-16 py-6 rounded-full text-2xl font-black hover:bg-gray-100 transition shadow-2xl hover:scale-110"
          >
            Apóyame para Hacerlo Realidad
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-purple-950 text-white py-12 text-center">
        <p className="text-xl font-bold">María del Pilar García</p>
        <p className="opacity-80">
          Candidata con Dignidad & Compromiso • Bogotá 2026
        </p>
        <Link
          to="/"
          className="mt-6 inline-block text-orange-300 hover:text-orange-100 transition"
        >
          ← Volver al inicio
        </Link>
      </footer>
    </>
  );
}
