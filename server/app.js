import express from 'express'
import cors from 'cors'
import playersRouter from './routes/players.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Serve uploaded files
app.use('/uploads', express.static(new URL('../uploads', import.meta.url).pathname))

app.use('/api/players', playersRouter)

export default app
