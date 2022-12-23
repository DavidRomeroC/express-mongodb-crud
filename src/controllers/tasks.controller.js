const Task = require('../models/Task')

const renderTask = async (req, res) => {
    try {
        const tasks = await Task.find().lean()//lean para que devuelva una lista de objetos para consumir, es decir ya no sean objetos de mongodb sino de javascript
        res.render('index', { tasks })
    } catch (error) {
        console.log(error)
    }
}

const createTask = async (req, res) => {
    const task = Task(req.body) //prepara la data recibida con el esquema creado y asigna un id, listo para ser enviado a la base de datos
    await task.save()
    res.redirect('/')
}

const renderTaskEdit = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id).lean()//lean para transformar arreglo de objetos de mongodb a arreglo de objetos de javascript
        res.render('edit', { task })
    } catch (error) {
        console.log(error.message)
    }
}

const editTask = async (req, res) => {
    const { id } = req.params
    await Task.findByIdAndUpdate(id, req.body)
    res.redirect('/')
}

const deleteTask = async (req, res)=>{
    const {id} = req.params
    await Task.findByIdAndDelete(id)
    res.redirect('/')
}

const taskToggleDone = async (req, res)=>{
    const {id} = req.params
    const task = await Task.findById(id)
    task.done = !task.done;
    await task.save()
    res.redirect('/')
}

module.exports = {
    renderTask,
    createTask,
    renderTaskEdit,
    editTask,
    deleteTask,
    taskToggleDone,
};