const express = require('express')
const { Server } = require('socket.io')
const http = require('http')

const app = express()

/**
 * socket connection
 */
const server = http.createServer(app)
const io = new Server(server,{
  cors: {
    origin: process.env.FRONTEND_URL,
    credentials: true
  }
})

const onlineUser = new Set()

io.on('connection', async(socket)=>{
  console.log('연결된 사용자', socket.id)
  const token = socket.handshake.auth.token
  const user = await getUserDetailsFromToken(token)
  if (!user){ // 토큰이 없거나, 토큰이 만료되었을때
    socket.destroy()
    return // 나가기
  }

  // 소켓방에 일단 집어넣어
  socket.join(user?._id?.toString())
  onlineUser.add(user?._id?.toString())

  // 접속하면 제일먼저 하는일
  io.emit('onlineUser', Array.from(onlineUser))

  // 연결된 사용자 끊어졌을 때
  socket.on('disconnect',()=>{
    console.log('연결끊어짐', socket.id)
  })
})

module.exports = {
  app,
  server
}