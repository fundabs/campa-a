// src/views/Galeria.jsx
import { ArrowLeft, Camera, Heart, MapPin, Calendar } from "lucide-react";
import Footer from "../componentes/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Galeria() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Aquí pones TODAS tus fotos de la campaña (solo cambia las rutas y descripciones)
  const fotos = [
    {
      src: "https://res.cloudinary.com/dl7kjajkv/image/upload/v1763837762/maria_politica/WhatsApp_Image_2025-11-21_at_2.51.04_PM_1_ivb7ch.jpg",
      alt: "Evento en Kennedy",
      lugar: "Kennedy",
      fecha: "15 nov 2025",
      descripcion: "Más de 800 personas en el gran encuentro comunitario",
    },
    {
      src: "https://res.cloudinary.com/dl7kjajkv/image/upload/v1763837762/maria_politica/WhatsApp_Image_2025-11-21_at_3.12.12_PM_1_j7tzsl.jpg",
      alt: "Equipo de voluntarios",
      lugar: "Ciudad Bolívar",
      fecha: "10 nov 2025",
      descripcion: "Nuestro equipo crece cada día",
    },
    {
      src: "https://res.cloudinary.com/dl7kjajkv/image/upload/v1763837761/maria_politica/WhatsApp_Image_2025-11-21_at_2.51.25_PM_1_el8wvd.jpg",
      alt: "Abrazos con la gente",
      lugar: "Suba",
      fecha: "8 nov 2025",
      descripcion: "El cariño de los bogotanos es nuestra mayor fuerza",
    },
    {
      src: "https://res.cloudinary.com/dl7kjajkv/image/upload/v1763837761/maria_politica/WhatsApp_Image_2025-11-21_at_2.54.48_PM_1_ughogy.jpg",
      alt: "Taller en colegio",
      lugar: "Bosa",
      fecha: "5 nov 2025",
      descripcion: "Educación emocional llegando a los niños",
    },
    {
      src: "https://res.cloudinary.com/dl7kjajkv/image/upload/v1763837762/maria_politica/WhatsApp_Image_2025-11-21_at_2.56.28_PM_1_jqu3kt.jpg",
      alt: "Caminata por Bogotá",
      lugar: "Centro",
      fecha: "3 nov 2025",
      descripcion: "Recorriendo las calles con dignidad y compromiso",
    },
    {
      src: "https://res.cloudinary.com/dl7kjajkv/image/upload/v1763837762/maria_politica/WhatsApp_Image_2025-11-21_at_3.00.08_PM_1_erlojd.jpg",
      alt: "Centro de escucha",
      lugar: "Usme",
      fecha: "21 nov 2025",
      descripcion: "Primer centro comunitario inaugurado",
    },
    {
      src: "https://res.cloudinary.com/dl7kjajkv/image/upload/v1763837762/maria_politica/WhatsApp_Image_2025-11-21_at_3.05.35_PM_1_fxtzsh.jpg",
      alt: "Centro de escucha",
      lugar: "Usme",
      fecha: "1 nov 2025",
      descripcion: "Primer centro comunitario inaugurado",
    },
    {
      src: "https://res.cloudinary.com/dl7kjajkv/image/upload/v1763837763/maria_politica/WhatsApp_Image_2025-11-21_at_3.12.23_PM_1_ynjd8v.jpg",
      alt: "Centro de escucha",
      lugar: "Usme",
      fecha: "21 nov 2025",
      descripcion: "Primer centro comunitario inaugurado",
    },
    // Agrega todas las que quieras – ¡no hay límite!
  ];

  return (
    <>
      {/* HERO DE LA GALERÍA */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-purple-900 via-purple-800 to-orange-700 text-white">
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <Link
            to="/"
            className="absolute top-8 left-8 flex items-center gap-2 hover:text-orange-300 transition"
          >
            <ArrowLeft className="w-6 h-6" /> Volver al inicio
          </Link>

          <Camera className="w-20 h-20 mx-auto mb-8 opacity-80" />
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-tight">
            Galería de la
            <span className="block text-orange-400 mt-4">Campaña</span>
          </h1>
          <p className="mt-8 text-xl sm:text-3xl font-light max-w-4xl mx-auto">
            Momentos reales, sonrisas verdaderas, cambio que se ve
          </p>
          <div className="mt-12 flex items-center justify-center gap-8 text-4xl font-black">
            <div className="text-center">
              <Heart className="w-12 h-12 mx-auto text-red-400 fill-current animate-pulse" />
              <p className="text-lg mt-2">+8.000</p>
              <p className="text-sm opacity-80">personas alcanzadas</p>
            </div>
          </div>
        </div>
      </section>

      {/* GRID DE FOTOS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {fotos.map((foto, i) => (
              <div
                key={i}
                onClick={() => setSelectedPhoto(foto)}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover:scale-105"
              >
                <img
                  src={foto.src}
                  alt={foto.alt}
                  className="w-full h-64 md:h-80 object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-4">
                  <div className="text-white">
                    <p className="font-bold text-lg flex items-center gap-2">
                      <MapPin className="w-5 h-5" /> {foto.lugar}
                    </p>
                    <p className="text-sm flex items-center gap-2">
                      <Calendar className="w-4 h-4" /> {foto.fecha}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX – FOTO GRANDE AL HACER CLIC */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="max-w-5xl max-h-full">
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <div className="text-center text-white mt-6">
              <p className="text-2xl font-bold">{selectedPhoto.descripcion}</p>
              <p className="text-lg mt-2 opacity-80">
                {selectedPhoto.lugar} • {selectedPhoto.fecha}
              </p>
            </div>
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-8 right-8 text-white text-4xl font-bold hover:text-orange-400 transition"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* CTA FINAL */}
      <section className="py-32 bg-gradient-to-r from-purple-900 to-orange-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl sm:text-7xl font-black mb-8">
            ¿Quieres ser parte de estas fotos?
          </h2>
          <p className="text-2xl mb-12">
            Súmate como voluntario y vive el cambio en primera fila
          </p>
          <Link
            to="/inscribirse"
            className="inline-block bg-white text-purple-900 px-16 py-6 rounded-full text-2xl font-black hover:bg-gray-100 transition shadow-2xl hover:scale-105"
          >
            Únete a la Campaña
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
