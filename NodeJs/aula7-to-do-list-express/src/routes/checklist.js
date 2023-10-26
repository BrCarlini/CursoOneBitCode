const express = require('express');

const router = express.Router();

const Checklist = require('../models/checklist')


// Pega todos da rota
// Async - Para informar que é uma função assincrona
router.get('/', async (req, res) => {

    try{
        // Await - Aguarda para buscar tudo do database
        let checklists = await Checklist.find({})
        res.status(200).json(checklists)

    } catch (error) {
        res.status(500).json(error)
    }


})



// Adiciona o que foi passado no body da req e devolve em formato json
router.post('/', async (req, res) => {
    let { name } = req.body
    

    try{
        let checklist = await Checklist.create({ name })
        res.status(200).json(checklist)
    } catch(error) {
        res.status(422).json(error)
    }

})


// Pega o item(objeto) referente ao ID passado/informado no caminho
router.get('/:id', async (req, res) => {
    
    try{
        let checklist = await Checklist.findById(req.params.id)
        res.status(200).json(checklist)
    }catch(error){
        res.status(422).json(error)
    }

})



router.put('/:id', (req, res) => {
    res.send(`PUT ID ${req.params.id}`)
})

router.delete('/:id', (req, res) => {
    res.send(`DELETE ID ${req.params.id}`)
})

router.delete('')

module.exports = router;