import React from "react";
import Typography from "@mui/material/Typography";

import { BANNER } from "./assets";
import { Header } from "./@core/components";

function App() {
  return (
    <div className="w-full h-full min-h-screen  bg-cover p-8 bg-[url('./assets/images/coding.jpg')] relative items-center justify-center flex">
      <div className="w-full h-full bg-gradient-to-r from-blue-500/20 to-blue-700/20 rounded-2xl p-4 backdrop-blur shadow-lg flex items-center flex-col justify-between ">
        <img src={BANNER} className="w-80 h-fit" alt="banner TDI Dev" />
        <div className="w-full sm:p-4 md:w-1/2 h-full flex items-center justify-center text-white flex-col">
          <Typography variant="h4" className="text-center">
            ¿Qué quieres aprender hoy?
          </Typography>
          <Typography variant="button" className="text-justify py-4">
            ¡TDI Dev ofrece tutoriales de programación, instalaciones y uso de
            programas populares! Aprende fácilmente con explicaciones claras y
            ejemplos prácticos. Únete a nuestra comunidad y crea tus propios
            proyectos. ¡Suscríbete ahora!
          </Typography>
        </div>
        <Header />
      </div>
    </div>
  );
}

export default App;
