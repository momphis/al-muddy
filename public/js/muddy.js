$(function() {
  var world   = new World('#world')
    , socket  = io.connect(window.location.hostname)

  socket.on('connect', function() {
    $('#input').focus()

    $('#input').keyup(function(event) {
      if (event.keyCode == 13) {
        socket.emit('message', $('input').val())
        world.selfMesssage($('input').val())

        $('#input').val('')
      }
    })
  })

  socket.on('updateWorld', function(data) {
    world.update(data)
  })
})
