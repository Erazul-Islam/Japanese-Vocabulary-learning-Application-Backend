import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import router from './app/routes/route'
import globalErrorHandler from './app/modules/middleware/globalErrorHandler'
import notFound from './app/modules/middleware/notFound'
const app: Application = express()

const corsOptions = {
    origin: ['http://localhost:5173','https://japanese-language.vercel.app'], 
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization' 
};

app.use(express.json())
app.use(cors(corsOptions))

app.use('/api', router);

console.log(process.cwd())

app.use(globalErrorHandler)
app.use(notFound);

export default app