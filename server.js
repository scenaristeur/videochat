import express from 'express'
import http from 'http'
import { Server as SocketIOServer } from 'socket.io'
// import path from "path";
import { v4 as uuidv4 } from 'uuid'

const app = express()
const server = http.createServer(app)
const io = new SocketIOServer(server)

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3000

// Serve the static files from the public directory
// const publicDirectoryPath = path.join(
//   new URL(".", import.meta.url).pathname.substring(1)
// );
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.redirect(`/${uuidv4()}`)
})

app.get('/:room', (req, res) => {
  res.render('room', { roomId: req.params.room })
})

// // Send the index.html file for any other requests
// app.get("/chat", (req, res) => {
//   const indexPath = path.resolve('public', "index.html");
//   res.sendFile(indexPath);
// });

io.on('connection', (socket) => {
  console.log('A user has connected')

  socket.on('join-room', (roomId, userId) => {
    console.log('join', roomId, userId)
    socket.join(roomId)
    socket.broadcast.to(roomId).emit('user-connected', userId)
    // .broadcast('user-connected', userId)
  })

  socket.on('sendMessage', (message, callback) => {
    console.log(`Message received: ${message}`)
    io.emit('message', message)
    callback()
  })

  socket.on('disconnect', () => {
    console.log('A user has disconnected')
  })
})

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
