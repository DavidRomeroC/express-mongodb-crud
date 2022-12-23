const { Router } = require('express')
const { renderTask, createTask, renderTaskEdit, editTask, deleteTask, taskToggleDone } = require('../controllers/tasks.controller')

const router = Router()

router.get('/', renderTask)

router.get('/about', (req, res) => {
    res.render('about')
})

router.post('/task/add', createTask)

router.get('/tasks/:id/toggleDone', taskToggleDone)

router.get('/tasks/:id/edit', renderTaskEdit)

router.post('/tasks/:id/edit', editTask)

router.get('/tasks/:id/delete', deleteTask)


module.exports = router;