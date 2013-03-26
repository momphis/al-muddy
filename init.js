var fs      = require('fs')
  , net     = require('net')
  , http    = require('http')
  , express = require('express')

var formatter = require('./lib/formatter')

var config = JSON.parse(fs.readFileSync('config/config.json', 'utf8'))
  , app    = express()
  , server = http.createServer(app)
  , io     = require('socket.io').listen(server)

var createResponse = function(command, data) {
  return { command: command, data: data }
}

var log = function(string) {
  console.log('\033[36m[ muddy ]\033[0m → ' + string)
}

app.configure(function() {
  app.set('views', __dirname + '/views')
  app.use(express.static(__dirname + '/public'))
})

app.get('/', function(req, res) {
  res.render('index.ejs', {
    layout: false,
    locals: { mud: config.name }
  })
})

io.sockets.on('connection', function(socket) {
  var mud = net.createConnection(config.port, config.host)
  mud.setEncoding('utf8')

  log(socket.id + ' connected to ' + config.host + ':' + config.port)

  mud.addListener('data', function(data) {
    var formatted = formatter.go(data)

    socket.emit('updateWorld', formatted)
  })

  socket.on('message', function(data) {
    mud.write(data + "\r\n")
  })
})

server.listen(6660)
