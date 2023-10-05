// eslint-disable-next-line no-undef
const socket = io('/')
// eslint-disable-next-line no-undef
socket.emit('join-room', ROOM_ID, 10)

socket.on('user-connected', (userId) => {
  console.log('User connected', userId)
})
