import React from 'react';
import BarraMenu from './components/BarraSuperior/BarraMenu';
import BarraInferior from './components/BarraInferior/BarraInferior';

import Principal from './pages/Principal/Principal';

import Ordenes from './pages/Ordenes/Ordenes';
import AgregarOrden from './pages/Ordenes/AgregarOrden';
import EditarOrden from "./pages/Ordenes/EditarOrden";

import Citas from "./pages/Citas/Citas";
import AgendarCita from './pages/Citas/AgendarCita';
import EditarCita from './pages/Citas/EditarCita';

import Productos from './pages/Productos/Productos';
import AgregarProducto from "./pages/Productos/AgregarProducto";
import EditarProducto from "./pages/Productos/EditarProducto";

import Clientes from "./pages/Clientes/Clientes";
import AgregarCliente from './pages/Clientes/AgregarCliente';
import EditarCliente from './pages/Clientes/EditarCliente';

import Formulario from "./pages/Formulario/Formulario";
import F1_Personal from './pages/Formulario/Crear/F1_Personal';
import F2_DataRostro from './pages/Formulario/Crear/F2_DataRostro';
import F3_Patologica from './pages/Formulario/Crear/F3_Patologica';
import F4_Caracteristicas from './pages/Formulario/Crear/F4_Caracteristicas';
import F5_CE_AC from './pages/Formulario/Crear/F5_CE_AC';
import F6_Diagnostico from './pages/Formulario/Crear/F6_Diagnostico';
import F7_Observaciones from './pages/Formulario/Crear/F7_Observaciones';

import MenuEditar from './pages/Formulario/Editar/MenuEditar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BarraMenu></BarraMenu>
      <Routes>
        <Route index element={<Principal />} />
        <Route path='/principal' element={<Principal />}></Route>

        <Route path='/ordenes' element={<Ordenes />}></Route>
        <Route path='/citas' element={<Citas />}></Route>
        <Route path='/productos' element={<Productos />}></Route>
        <Route path='/clientes' element={<Clientes />}></Route>
        <Route path='/formularios' element={<Formulario />}></Route>

        <Route path='/ordenes/agregarorden' element={<AgregarOrden />}></Route>
        <Route path='/ordenes/editarorden' element={<EditarOrden />}></Route>

        <Route path='/citas/agendarcita' element={<AgendarCita />}></Route>
        <Route path='/citas/editarcita' element={<EditarCita />}></Route>

        <Route path='/productos/agregarproducto' element={<AgregarProducto />}></Route>
        <Route path='/productos/editarproducto' element={<EditarProducto />}></Route>

        <Route path='/clientes/agregarcliente' element={<AgregarCliente />}></Route>
        <Route path='/clientes/editarcliente' element={<EditarCliente />}></Route>

        <Route path='/formularios/pag1' element={<F1_Personal />}></Route>
        <Route path='/formularios/pag2' element={<F2_DataRostro />}></Route>
        <Route path='/formularios/pag3' element={<F3_Patologica />}></Route>
        <Route path='/formularios/pag4' element={<F4_Caracteristicas />}></Route>
        <Route path='/formularios/pag5' element={<F5_CE_AC />}></Route>
        <Route path='/formularios/pag6' element={<F6_Diagnostico />}></Route>
        <Route path='/formularios/pag7' element={<F7_Observaciones />}></Route>

        <Route path='/formularios/editarform' element={<MenuEditar />}></Route>
      </Routes>
      <BarraInferior></BarraInferior>
    </div>
  );
}

export default App;
