import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './bootstrap.min.css';
import Navbar from "./components/common/Encabezado";
import Footer from "./components/common/Footer";
import Inicio from "./components/principal/Inicio";
import Error404 from "./components/error/Error404";
import Actualidad from "./components/categorias/Actualidad";
import Deportes from "./components/categorias/Deportes";
import Espectaculos from "./components/categorias/Espectaculos";
import Economia from "./components/categorias/Economía";
import Fotografia from "./components/categorias/Fotografía";
import Politica from "./components/categorias/Política";
import Salud from "./components/categorias/Salud";
import Tecnologia from "./components/categorias/Tecnología";
import Login from "./components/login/Login";
import Sesion from "./components/login/Sesion";
function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/login">
          <Login></Login>
        </Route>
        <Route exact path="/Inicio de Sesion">
          <Sesion></Sesion>
        </Route>
        <Route exact path="/">
          <Inicio></Inicio>
        </Route>
        <Route exact path="/actualidad">
          <Actualidad></Actualidad>
        </Route>
        <Route exact path="/deportes">
          <Deportes></Deportes>
        </Route>
        <Route exact path="/economia">
          <Economia></Economia>
        </Route>
        <Route exact path="/espectaculos">
          <Espectaculos></Espectaculos>
        </Route>
        <Route exact path="/fotografia">
          <Fotografia></Fotografia>
        </Route>
        <Route exact path="/politica">
          <Politica></Politica>
        </Route>
        <Route exact path="/salud">
          <Salud></Salud>
        </Route>
        <Route exact path="/tecnologia">
          <Tecnologia></Tecnologia>
        </Route>
        <Route exact path="*">
          <Error404></Error404>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
