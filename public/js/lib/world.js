var World = function(selector) {
  this.selector = selector
}

World.prototype.update = function(data) {
  $(this.selector).append(data)
  $(this.selector).attr({ scrollTop: $(this.selector).attr('scrollHeight') })
}

World.prototype.selfMesssage = function(message) {
  this.update("<span class='self'>" + message + "</span>\r\n")
}

World.prototype.systemMessage = function(message) {
  this.update("\r\n<span class='yellow'># " + message + "</span>\r\n")
}
