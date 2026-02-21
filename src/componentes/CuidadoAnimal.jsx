import React from "react";
import { Heart, PawPrint, ShieldCheck } from "lucide-react";

export default function CuidadoAnimal() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Título */}
        <h2
          className="text-4xl md:text-6xl font-black text-center text-purple-900 mb-6"
          data-aos="fade-up"
        >
          Proteger la Vida También es Gobernar
        </h2>

        <p
          className="text-center text-gray-700 max-w-3xl mx-auto mb-20 text-lg"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          El cuidado de los animales refleja el nivel de humanidad de una
          sociedad. Defenderlos es un compromiso ético, social y político con
          Bogotá.
        </p>

        {/* Card principal */}
        <div
          className="max-w-6xl mx-auto bg-gray-50 rounded-3xl p-10 md:p-14 shadow-xl hover:shadow-2xl transition-all"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="grid md:grid-cols-2 gap-14 items-center">
            {/* Imágenes */}
            <div className="grid grid-cols-2 gap-6">
              <div className="relative group">
                <img
                  src="https://res.cloudinary.com/dl7kjajkv/image/upload/v1771640819/WhatsApp_Image_2026-01-29_at_7.23.50_AM_cafvr9.jpg"
                  alt="Protección y cuidado de animales en Bogotá"
                  className="w-full h-full object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform"
                />
              </div>

              <div className="relative group">
                <img
                  src="https://res.cloudinary.com/dl7kjajkv/image/upload/v1771640752/WhatsApp_Image_2026-01-29_at_7.23.50_AM_qybc4y.jpg"
                  alt="Bienestar animal como política pública"
                  className="w-full h-full object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform"
                />
              </div>
            </div>

            {/* Contenido */}
            <div>
              <div className="mb-8">
                <PawPrint className="w-20 h-20 text-orange-500 mb-4" />

                <h3 className="text-3xl font-black text-purple-900">
                  Bienestar Animal como Política Pública
                </h3>

                <p className="text-lg text-gray-700 mt-4">
                  Una Bogotá justa también protege a quienes no tienen voz.
                  Promovemos acciones reales contra el maltrato y el abandono.
                </p>
              </div>

              {/* Ejes */}
              <div className="space-y-5">
                {[
                  {
                    icon: ShieldCheck,
                    text: "Fortalecimiento de la protección legal y sanciones efectivas",
                  },
                  {
                    icon: Heart,
                    text: "Programas de adopción, esterilización y atención veterinaria",
                  },
                  {
                    icon: PawPrint,
                    text: "Educación ciudadana para una convivencia responsable",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <item.icon className="w-6 h-6 text-orange-500 mt-1" />
                    <p className="text-gray-800 font-medium">{item.text}</p>
                  </div>
                ))}
              </div>

              {/* Cierre */}
              <div className="mt-10">
                <p className="text-lg font-semibold text-purple-900">
                  Cuidar a los animales es cuidar la vida
                </p>
                <p className="text-gray-700 mt-2">
                  Este compromiso también hace parte de nuestro proyecto para
                  Bogotá.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
