// eslint-disable-next-line no-undef
const socket = io('/')

const videoGrid = document.getElementById('video-grid')
// eslint-disable-next-line no-undef
const myPeer = new Peer(undefined, {
//   host: 'http://localhost',
//   port: '3001'
})
console.log(myPeer)

const myVideo = document.createElement('video')
myVideo.muted = true

if (!navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia = navigator.mediaDevices.getUserMedia || navigator.mediaDevices.webkitGetUserMedia || navigator.mediaDevices.mozGetUserMedia || navigator.mediaDevices.msGetUserMedia;
}

if (!navigator.getUserMedia) {
     alert('getUserMedia not supported in this browser.');
}


navigator.mediaDevices
  .getUserMedia({
    video: true,
    audio: true
  })
  .then((stream) => {
    addVideoStream(myVideo, stream)
  })

myPeer.on('open', (peerId) => {
  // eslint-disable-next-line no-undef
  socket.emit('join-room', ROOM_ID, peerId)
})

socket.on('user-connected', (userId) => {
  console.log('User connected', userId)
})

function addVideoStream(video, stream) {
  video.srcObject = stream
  video.addEventListener('loadedmetadata', () => {
    video.play()
  })
  videoGrid.append(video)
}
