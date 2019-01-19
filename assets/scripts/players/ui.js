'use strict'
const store = require('../store.js')
const showPlayersTemplate = require('../templates/helpers/player-listings.handlebars')
// const handlebars = require('handlebars')
// const config = require('../config.js')

const createPlayerSuccess = (playerData) => {
  store.player = playerData.player
  const showPlayersHtml = showPlayersTemplate({ players: playerData.player })
  $('#content').html(showPlayersHtml)
  $('.player-message').html(`You have successfully added ${store.player.first_name} ${store.player.last_name}!`)
  $('.player-message').show(200)
  setTimeout(function () {
    $('.player-message').fadeOut(200)
  }, 3000)
}

const showAllPlayersSuccess = (playerData) => {
  store.players = playerData.players
  if (playerData.players.length === 0) {
    $('.player-message').html('You have no players added! Please add a player!')
    $('.player-message').show(200)
    setTimeout(function () {
      $('.player-message').fadeOut(200)
    }, 3000)
  } else {
    const showPlayersHtml = showPlayersTemplate({ players: playerData.players })
    $('#content').html(showPlayersHtml)
    $('.player-message').html(`You have successfully gotten all players!`)
    $('.player-message').show(200)
    setTimeout(function () {
      $('.player-message').fadeOut(200)
    }, 3000)
  }
}

const getPlayerSuccess = (playerData) => {
  store.getPlayer = playerData.player
  const showPlayersHtml = showPlayersTemplate({ players: playerData.player })
  $('#content').html(showPlayersHtml)
}

const updatePlayerSuccess = (playerData) => {
  const showPlayersHtml = showPlayersTemplate({ players: playerData.player })
  $('#content').html(showPlayersHtml)
  $('.player-message').html(`You have successfully updated ${playerData.first_name} ${playerData.last_name}!`)
  $('.player-message').show(200)
  setTimeout(function () {
    $('.player-message').fadeOut(200)
  }, 3000)
}

const deletePlayerSuccess = () => {
  // const showPlayersHtml = showPlayersTemplate({ players: store.players })
  // $('#content').html(showPlayersHtml)
  $('.player-message').html(`You have successfully deleted ${store.playerId}`)
  $('.player-message').show(200)
  setTimeout(function () {
    $('.player-message').fadeOut(200)
  }, 3000)
}

const failure = () => {
  $('.player-message-failure').html('Something went wrong, please try again.')
  $('.player-message-failure').show(200)
  setTimeout(function () {
    $('.player-message-failure').fadeOut(200)
  }, 3000)
}

module.exports = {
  createPlayerSuccess,
  showAllPlayersSuccess,
  getPlayerSuccess,
  updatePlayerSuccess,
  deletePlayerSuccess,
  failure
}
