// Add the modules imported from NPM
// Creating a server
const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server, {
    cors: { origin: '*', }
})

//io object emits events and print comments to the terminal
io.on('connection', socket => {
    console.log('Connected')//when connected print  connected on terminal
    socket.on('msg', mydata => {
        console.log('Sever received: ', mydata) //when mydata is received print Sever received: {user: , msg: }
        io.emit('msg', mydata)
    })
})

// Make webserver listen to PORT 4000 and if so print 'Listening to port 4000' on terminal
server.listen(4000, () => {
    console.log('Listening to port 4000');
})