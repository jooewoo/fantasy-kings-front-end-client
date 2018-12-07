'use strict'
const store = require('../store.js')
const showPlayersTemplate = require('../templates/helpers/player-listings.handlebars')
// const handlebars = require('handlebars')
// const config = require('../config.js')

const showAllPlayersSuccess = (playerData) => {
  store.players = playerData.players
  const showPlayersHtml = showPlayersTemplate({ players: playerData.players })
  $('#content').html(showPlayersHtml)
}

const getPlayerSuccess = (playerData) => {
  store.player = playerData.player
  const showPlayersHtml = showPlayersTemplate({ players: playerData.player })
  $('#content').html(showPlayersHtml)
}

const updatePlayerSuccess = (playerData) => {
  $('#content').html('you have successfully updated the player')
}

const failure = () => {
  $('#content').html('Something went wrong, please try again.')
}

module.exports = {
  showAllPlayersSuccess,
  getPlayerSuccess,
  updatePlayerSuccess,
  failure
}
