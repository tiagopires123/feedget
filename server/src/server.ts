import express from 'express'
import cors from 'cors'
import { routes } from './routes'

const app = express()

// GET, POST, PUT, PATCH, DELETE

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333, () => {
  console.log('HTTP server running!')
})