import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard/dashboard";
import { Login } from "./pages/Login/Login";
import { Cadastro } from "./pages/Cadastro/Cadastro";
import { Config } from "./pages/config/config";
import { Quality } from "./pages/qualidade";
import { Orthography } from "./pages/qualidade/components/ortografia";
import { Discipline } from "./pages/qualidade/components/discipline";
import { Genero } from "./pages/qualidade/components/genero";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/config" element={<Config />} />
        <Route path="/qualidade" element={<Quality />} />
        <Route path="/qualidade/orthography" element={<Orthography />} />
        <Route path="/qualidade/discipline" element={<Discipline />} />
        <Route path="/qualidade/genero" element={<Genero />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
