const express = require('express');

const router = express.Router();

// Pega todos da rota
router.get('/', (req, res) => {
    console.log('Olá')
    res.send();
})

// Adiciona o que foi passado no body da req e devolve em formato json
router.post('/', (req, res) => {
    console.log(req.body);
    res.status(200).json(req.body);
})


// Pega o item(objeto) referente ao ID passado/informado no caminho
router.get('/:id', (req, res) => {
    console.log(req.params.id);
    res.send(`ID: ${req.params.id}`)
})

router.put('/:id', (req, res) => {
    res.send(`PUT ID ${req.params.id}`)
})

router.delete('/:id', (req, res) => {
    res.send(`DELETE ID ${req.params.id}`)
})

router.delete('')

module.exports = router;