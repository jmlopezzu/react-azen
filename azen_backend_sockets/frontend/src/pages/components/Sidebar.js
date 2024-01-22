import React from 'react'

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>Opciones Preferidas</h3>
      <ul className="sidebar-menu">
        <li>* Listado de tipo de cuenta bancaria</li>
        <li>* Visualiza control de ventas de la misma</li>
        <li>* Informe comparativo de premios en poder el publico azen... </li>
        <li>* Listado de devoluciones por agente</li>
        <li>* Cambio de clave de usuarios personales</li>
        <li>* Edición de p.... pagados</li>
        <li>* Informe de estado de ...</li>
        <li>* Edición de centro de costos </li>
        <li>* Estado total de cuotas</li>
        <li>* Edición de ...</li>
        <hr></hr>
      </ul>
      <h3>Opciones Frecuentes </h3>
        <ul className="sidebar-menu1">
          <li>Editar CRUD </li>
          <br></br>
          <li>Visualiza control de ventas de la misma</li>
          <br></br>
          <li>Informe comparativo de premios en poder el publico azen... </li>
        </ul>
    </aside>
  );
}

