const { Router } = require('express')
const Task = require('../models/Task')

const router = Router()

router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find().lean()//lean para que devuelva una lista de objetos para consumir, es decir ya no sean objetos de mongodb sino de javascript
        res.render('index', { tasks })

    } catch (error) {
        console.log(error)
    }
})

router.get('/about', (req, res) => {
    res.render('about')
})

router.post('/task/add', async (req, res) => {
    const task = Task(req.body) //prepara la data recibida con el esquema creado y asigna un id, listo para ser enviado a la base de datos
    await task.save()
    res.redirect('/')
})

router.get('/edit/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id).lean()//lean para transformar arreglo de objetos de mongodb a arreglo de objetos de javascript
        res.render('edit', { task })
    } catch (error) {
        console.log(error.message)
    }
})

router.post('/edit/:id', async (req, res) => {
    const {id} = req.params
    await Task.findByIdAndUpdate(id, req.body)
    res.redirect('/')
})

router.get('/delete/:id', async (req, res)=>{
    const {id} = req.params
    await Task.findByIdAndDelete(id)
    res.redirect('/')
})

module.exports = router;