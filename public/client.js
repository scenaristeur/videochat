// eslint-disable-next-line no-undef
const socket = io('/')

// eslint-disable-next-line no-undef
const myPeer = new Peer(undefined, {
    host: '/',
    port: '3001'
})
console.log(myPeer)
myPeer.on('open', peerId =>{
// eslint-disable-next-line no-undef
socket.emit('join-room', ROOM_ID, peerId)
})



socket.on('user-connected', (userId) => {
  console.log('User connected', userId)
})
