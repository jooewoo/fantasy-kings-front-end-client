'use strict'

const playerMessageFailure = () => {
  $('.player-message-failure').show(200)
  setTimeout(function () {
    $('.player-message-failure').fadeOut(200)
  }, 3000)
}

module.exports = playerMessageFailure
