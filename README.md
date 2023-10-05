# video chat
- https://www.youtube.com/watch?v=DvlyzDZDEq4
- https://medium.com/@rupesh.sengar.official/building-a-real-time-chat-app-with-socket-io-node-js-and-express-js-using-es6-syntax-e77f76e8f5e4
- peerjs
- https://doc-kurento.readthedocs.io/en/6.9.0/tutorials/node/tutorial-one2many.html


# peer RTC server
npm i -g peer
peerjs --port 3001

# https 
$ openssl genrsa -out key.pem
$ openssl req -new -key key.pem -out csr.pem
$ openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
$ rm csr.pem