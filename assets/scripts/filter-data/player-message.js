'use strict'

const playerMessage = () => {
  $('.player-message').show(200)
  setTimeout(function () {
    $('.player-message').fadeOut(200)
  }, 3000)
}

module.exports = playerMessage
