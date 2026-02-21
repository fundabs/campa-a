import Reac from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="bg-purple-950 text-white py-12 px-6 md:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Contenido principal */}
            <div className="text-center md:text-left">
              <p className="text-2xl md:text-3xl font-bold text-orange-300 mb-2">
                María del Pilar García
              </p>
              <p className="opacity-80 text-lg mb-6">
                Psicóloga • Candidata Bogotá 2026 • Dignidad & Compromiso
              </p>
              <Link
                to="/"
                className="inline-flex items-center text-orange-300 hover:text-orange-100 transition-colors duration-300 font-medium"
              >
                <span className="mr-2">←</span> Volver al inicio
              </Link>
            </div>

            {/* Redes sociales */}
            <div className="footer-social">
              <h3 className="text-xl font-bold text-orange-300 mb-4 flex items-center justify-center md:justify-start">
                <span className="mr-2">🌎</span> Síguenos
              </h3>
              <div className="flex gap-6">
                <a
                  href="https://www.instagram.com/mariadelpilar_hipnosis?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-800 hover:bg-purple-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                  aria-label="Instagram"
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"
                    alt="Instagram"
                    className="w-6 h-6 filter invert"
                  />
                </a>
                <a
                  href="https://www.facebook.com/Pilarporelbuensuceso"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-800 hover:bg-purple-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                  aria-label="Facebook"
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg"
                    alt="Facebook"
                    className="w-6 h-6 filter invert"
                  />
                </a>
                <a
                  href="https://www.youtube.com/@FUNDABSCOLOMBIA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-800 hover:bg-purple-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                  aria-label="YouTube"
                >
                  <img
                    src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg"
                    alt="YouTube"
                    className="w-6 h-6 filter invert"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Línea separadora y copyright */}
          <div className="mt-12 pt-8 border-t border-purple-700 text-center">
            <p className="opacity-70 text-sm">
              © {new Date().getFullYear()} María del Pilar García. Todos los
              derechos reservados.
            </p>
          </div>
          <a
            className="opacity-70 text-sm absolute bottom-4 right-6"
            href="https://protechsolucionesplus.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Protech Soluciones Plus"
          >
            protechsolucionesplus.com
          </a>
        </div>
      </footer>
    </>
  );
}
