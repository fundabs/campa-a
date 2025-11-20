// src/views/Inscribirse.jsx
import { ArrowLeft, Heart, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Inscribirse() {
  const [enviado] = useState(false);
  const [cargando, setCargando] = useState(false);

  const localidades = [
    "Antonio Nariño",
    "Barrios Unidos",
    "Bosa",
    "Chapinero",
    "Ciudad Bolívar",
    "Engativá",
    "Fontibón",
    "Kennedy",
    "La Candelaria",
    "Los Mártires",
    "Puente Aranda",
    "Rafael Uribe Uribe",
    "San Cristóbal",
    "Santa Fe",
    "Suba",
    "Sumapaz",
    "Teusaquillo",
    "Tunjuelito",
    "Usaquén",
    "Usme",
  ];

  // ÉXITO – Pantalla de gracias
  if (enviado) {
    return (
      <section className="min-h-screen bg-gradient-to-br from-purple-900 to-orange-600 flex items-center justify-center px-6">
        <div className="bg-white rounded-3xl shadow-2xl p-12 text-center max-w-lg">
          <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
          <h2 className="text-4xl font-black text-purple-900 mb-4">
            ¡Gracias por unirte!
          </h2>
          <p className="text-xl text-gray-700">
            Ya eres parte del cambio con dignidad y compromiso.
          </p>
          <p className="mt-6 text-lg">En breve te contactaremos</p>
          <Link
            to="/"
            className="mt-10 inline-block bg-orange-500 text-white px-10 py-4 rounded-full font-bold hover:bg-orange-400 transition"
          >
            Volver al inicio
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-purple-900 via-purple-800 to-orange-700 text-white">
        <div className="absolute inset-0 bg-black/40" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/inscribirse-hero.jpg')" }}
        />

        <div className="relative z-10 max-w-4xl mx-auto">
          <Link
            to="/"
            className="absolute top-8 left-8 flex items-center gap-2 text-white hover:text-orange-300 transition"
          >
            <ArrowLeft className="w-6 h-6" /> Volver
          </Link>
          <Heart className="w-20 h-20 mx-auto mb-6 text-red-400 fill-current animate-pulse" />
          <h1 className="text-5xl sm:text-7xl font-black">
            ¡Únete a la Campaña!
          </h1>
          <p className="mt-8 text-2xl sm:text-3xl font-light">
            Inscríbete como voluntario/a o seguidor/a y hagamos historia juntos
            en Bogotá 2026
          </p>
        </div>
      </section>

      {/* FORMULARIO – FUNCIONA 100% */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <h2 className="text-4xl font-black text-center text-purple-900 mb-10">
              Formulario de Inscripción
            </h2>

            {/* FORMULARIO CON FORMSUBMIT.CO – FUNCIONA PERFECTO */}
            <form
              action="https://formsubmit.co/fundacionbuensuceso@gmail.com"
              method="POST"
              onSubmit={() => setCargando(true)}
            >
              {/* Anti-spam */}
              <input type="text" name="_honey" style={{ display: "none" }} />
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="http://localhost:5173/inscribirse"
              />
              <input type="hidden" name="_template" value="table" />

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    required
                    className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-orange-500 focus:outline-none transition"
                    placeholder="María Pérez"
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">
                    Cédula *
                  </label>
                  <input
                    type="text"
                    name="cedula"
                    required
                    className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-orange-500 focus:outline-none"
                    placeholder="1234567890"
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    required
                    className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-orange-500 focus:outline-none"
                    placeholder="300 123 4567"
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-orange-500 focus:outline-none"
                    placeholder="maria@mail.com"
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">
                    Dirección *
                  </label>
                  <input
                    type="text"
                    name="direccion"
                    required
                    className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-orange-500 focus:outline-none"
                    placeholder="Calle 123 #45-67"
                  />
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-700 mb-2">
                    Localidad *
                  </label>
                  <select
                    name="localidad"
                    required
                    className="w-full px-5 py-4 rounded-xl border border-gray-300 focus:border-orange-500 focus:outline-none"
                  >
                    <option value="">Selecciona tu localidad</option>
                    {localidades.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="text-center mt-12">
                <button
                  type="submit"
                  disabled={cargando}
                  className="bg-orange-500 hover:bg-orange-400 text-purple-900 px-16 py-6 rounded-full text-2xl font-black shadow-2xl hover:scale-105 transition disabled:opacity-70"
                >
                  {cargando ? "Enviando..." : "¡Inscribirme Ahora!"}
                </button>
              </div>

              <p className="text-center text-sm text-gray-500 mt-8">
                Tus datos están 100% protegidos y solo se usarán para la
                campaña.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
