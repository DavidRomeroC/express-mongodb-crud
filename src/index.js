import express from 'express'
import homeRoute from './routes/index.routes.js'

const app = express()

app.use(homeRoute)

app.listen(3000, ()=>{
    console.log('server on port 3000')
})