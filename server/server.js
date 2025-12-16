import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDB from './configs/db.js'
import userRouter from './routes/userRoutes.js'
import reportsRouter from './routes/reportsRouter.js'
import needsRouter from './routes/needsRouter.js'
import jobRouter from './routes/jobRouter.js'
import categoryRouter from './routes/categoryRouter.js'

const app = express()

await connectDB()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Server is running')
})

app.use('/api/user', userRouter)
app.use('/api/reports', reportsRouter)
app.use('/api/needs', needsRouter)
app.use('/api/job', jobRouter)
app.use('/api/category', categoryRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})