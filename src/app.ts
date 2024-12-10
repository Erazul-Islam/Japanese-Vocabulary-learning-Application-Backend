import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import router from './app/routes/route'
import globalErrorHandler from './app/modules/middleware/globalErrorHandler'
import notFound from './app/modules/middleware/notFound'
const app: Application = express()
const port = 3000


app.use(express.json())
app.use(cors())

app.use('/api', router);

console.log(process.cwd())

app.use(globalErrorHandler)
app.use(notFound);

export default app