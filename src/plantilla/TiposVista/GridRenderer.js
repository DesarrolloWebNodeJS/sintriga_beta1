import React from 'react';
import PropTypes from 'prop-types';
import ListaVista from './ListaVista';
import ListaSimpleVista from './ListaSimpleVista';
import TablaVista from './TablaVista';
import TablaSimpleVista from './TablaSimpleVista';
import ImpresionVista from './ImpresionVista';
// TODO: implementar vista impresion y  vista vcard para cualquier dato

const GridRenderer = ({ clientes, vista, totalClientes }) => {
  const esTabla = vista === 'tabla';
  const esLista = vista === 'lista';
  return (
    <div>
      {vista === 'impresion' && <ImpresionVista clientes={clientes} totalClientes={totalClientes}/>}
      {esLista && !esTabla && <ListaVista clientes={clientes}/>}
      {!esLista && esTabla && <TablaVista />}
      {!esLista && vista === 'l-simple' && <ListaSimpleVista clientes={clientes}/>}
      {!esTabla && vista === 't-simple' && <TablaSimpleVista/>}
    </div>
  );
};

GridRenderer.defaultProps = {
  vista: 'impresion'
};

GridRenderer.propTypes = {
  clientes: PropTypes.array.isRequired,
  vista: PropTypes.string,
  totalClientes: PropTypes.number
};

export default GridRenderer;
