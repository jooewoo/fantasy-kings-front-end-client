'use strict'

const authMessage = (message) => {
  $('.message-auth').html(`${message}`)
  $('.message-auth').show(200)
  setTimeout(function () {
    $('.message-auth').fadeOut(200)
  }, 2000)
}

module.exports = authMessage
