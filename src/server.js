import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import Rotas from './rotas.js'

const PORT = process.env.PORT

const app = express()

app.use(cors())
app.use(express.json())
Rotas(app)

app.listen(PORT, () => {
    console.log(`---> API rodando na porta ${PORT}`)
})