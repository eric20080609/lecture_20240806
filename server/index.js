const express = require('express')
const router = require('./routes/index')
const cors = require('cors')
require('dotenv').config({ path: '.env.local' })
const connectDB = require('./config/connectDB')
const cookiesParser = require('cookie-parser')

const app = express()

// CORS허용은 맨위에 존재해야함
app.use(cors({
    origin: `${process.env.FRONTEND_URL}`,
    credentials: true
}))
app.use(express.json())
app.use(cookiesParser())
app.use('/api', router)
app.get('/', (req,res)=>{
    res.json({
        message: "첫 페이지입니다."
    })
})

connectDB().then(()=>{
    app.listen(8080, ()=>{
        console.log(`몽고DB가 실행된 이후, 웹서버가 실행되었습니다.`)
    })
})
