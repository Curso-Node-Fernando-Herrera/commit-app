const { COMMIT_TYPE } = require('../src/config')

const CHOICES = {
  COMMIT: [
    {
      name: 'feat(): Agrega una nueva funcionalidad.',
      value: COMMIT_TYPE.FEAT,
    },
    {
      name: 'fix(): Arregla un bug.',
      value: COMMIT_TYPE.FIX,
    },
    {
      name: 'styles(): Agrega o modifica estilos.',
      value: COMMIT_TYPE.STYLE,
    },
    {
      name: 'doc(): Agrega nueva documentacion.',
      value: COMMIT_TYPE.DOC,
    },
  ],
}

module.exports = { CHOICES }
