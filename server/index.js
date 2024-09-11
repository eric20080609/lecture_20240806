const express = require('express')
const router = require('./routes/index')
const cors = require('cors')
require('dotenv').config({ path: '.env.local' })
const connectDB = require('./config/connectDB')
const cookiesParser = require('cookie-parser')
const { app, server } = require('./socket/index.js')

// const app = express()

// CORS허용은 맨위에 존재해야함
app.use(cors({
    origin: `${process.env.FRONTEND_URL}`,
    credentials: true
}))
app.use(express.json())
app.use(cookiesParser())
app.use('/api', router)

connectDB().then(()=>{
    console.log('일단, 몽고DB랑 연결은 성공함')
    server.listen(8080, ()=>{
        console.log(`socket/http/express가 실행되었습니다.`)
    })
})
