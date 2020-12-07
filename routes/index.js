var express = require('express');
var router = express.Router();
const controle = require('../controllers/controle')
const Nota = require('../models/modelo');


// Home
router.get('/', controle.home);

// Home DB
router.get('/homedb', controle.homeDB);

// Página de nota indidual
router.get('/nota/:id', controle.notaIndividual);

// Form - incompleto
router.get('/form', controle.mostraNota);

// Redirectionar
router.get('/notas', controle.redictHome)

module.exports = router;


// mongoose e mongo sandbox routes:
router.get('/add-nota', (req, res) => {
  const notaTeste = new Nota({
    id: 69,
    h: 'Testando Não fixa',
    b: 'notinha não fixa',
    pin: false
  });
  // Método pra salvar no banco de dados (assíncrona):
  notaTeste.save()
  .then((result) => {
    res.send(result)
    console.log('Aparentemente foi pra DB (index em routes)')
  })
  .catch((err) => {
    console.log(err);
  });
})

// Mostrar o que tem no banco de dados:
router.get('/todas-notas', (req, res) => {
  Nota.find()
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      console.log(err)
    })
})

// Mostrar uma nota
router.get('/uma-nota', (req, res) => {
  Nota.findById('5fcd52e100b2cda9e2e75994')
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      console.log(err)
    })
})