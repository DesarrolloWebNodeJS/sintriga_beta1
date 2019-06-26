'use strict';

module.exports = function(Catcapitulos) {
  Catcapitulos.validatesUniquenessOf('nombre', {
    message: 'Este nombre de capitulo ya existe'
  });
};
