'use strict';

module.exports = function(Catseries) {
  Catseries.validatesUniquenessOf('titulo', {
    message: 'Este titulo ya existe'
  });
};
