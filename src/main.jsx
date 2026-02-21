// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import SaludMental from "./views/SaludMental";
import Transparencia from "./views/Transparencia";
import EducacionEmocional from "./views/EducacionEmocional";
import Articulos from "./views/Articulos";
import Galeria from "./views/Galeria";
import Inscribirse from "./views/Inscribirse";
import ScrollToTop from "./componentes/ScrollToHash";
import FamiliasCuidadoras from "./views/FamiliasCuidadoras";
import InclusionLaboral from "./views/InclusionLaboral";
import MediacionPsicosocial from "./views/MediacionPsicosocial";
import RedHospitalariaPsicosocial from "./views/RedHospitalariaPsicosocial";
import TenenciaResponsableMascotas from "./views/TenenciaResponsableMascotas";
import DignidadLaboralArtistas from "./views/DignidadLaboralArtistas";
import ControlPoliticoCiudadano from "./views/ControlPoliticoCiudadano";
import EducacionJovenes from "./views/EducacionJovenes";
import SeguridadCiudadana from "./views/SeguridadCiudadana";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/familiasCuidadoras" element={<FamiliasCuidadoras />} />
        <Route path="/salud-mental" element={<SaludMental />} />
        <Route path="/transparencia" element={<Transparencia />} />
        <Route path="/educacion-emocional" element={<EducacionEmocional />} />
        <Route path="/articulos" element={<Articulos />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/inscribirse" element={<Inscribirse />} />
        <Route path="/inclusionLaboral" element={<InclusionLaboral />} />
        <Route
          path="/mediacionPsicosocial"
          element={<MediacionPsicosocial />}
        />
        <Route
          path="/redHospitalariaPsicosocial"
          element={<RedHospitalariaPsicosocial />}
        />
        <Route
          path="/tenenciaResponsableMascotas"
          element={<TenenciaResponsableMascotas />}
        />
        <Route
          path="/dignidadLaboralArtistas"
          element={<DignidadLaboralArtistas />}
        />
        <Route
          path="/controlPoliticoCiudadano"
          element={<ControlPoliticoCiudadano />}
        />
        <Route path="/educacionJovenes" element={<EducacionJovenes />} />
        <Route path="/seguridadCiudadana" element={<SeguridadCiudadana />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
);
