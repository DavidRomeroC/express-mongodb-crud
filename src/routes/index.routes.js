const { Router } = require('express')
const Task = require('../models/Task')

const router = Router()

router.get('/', (req, res)=>{
    res.render('index')
})

router.get('/', (req, res)=>{
    res.render('index')
})

router.get('/about', (req, res)=>{
    res.render('about')
})

router.get('/edit', (req, res)=>{
    res.render('edit')
})

router.post('/task/add', async(req, res)=>{
    const task = Task(req.body) //prepara la data recibida con el esquema creado y asigna un id, listo para ser enviado a la base de datos
    const taskSaved = await task.save()
    console.log(taskSaved)
    res.send('tarea recibida')
})

module.exports = router;