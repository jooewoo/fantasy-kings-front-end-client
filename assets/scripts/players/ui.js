'use strict'
const store = require('../store.js')
const showPlayersTemplate = require('../templates/helpers/player-listings.handlebars')
// const handlebars = require('handlebars')
// const config = require('../config.js')

const createPlayerSuccess = (playerData) => {
  // console.log(playerData)
  store.player = playerData.player
  const showPlayersHtml = showPlayersTemplate({ players: playerData.player })
  $('#content').html(showPlayersHtml)
}

const showAllPlayersSuccess = (playerData) => {
  store.players = playerData.players
  // console.log(store)
  const showPlayersHtml = showPlayersTemplate({ players: playerData.players })
  $('#content').html(showPlayersHtml)
}

const getPlayerSuccess = (playerData) => {
  store.getPlayer = playerData.player
  const showPlayersHtml = showPlayersTemplate({ players: playerData.player })
  $('#content').html(showPlayersHtml)
}

const updatePlayerSuccess = (playerData) => {
  // console.log(playerData)
  const showPlayersHtml = showPlayersTemplate({ players: playerData.player })
  $('#content').html(showPlayersHtml)
}

const deletePlayerSuccess = () => {
  // const showPlayersHtml = showPlayersTemplate({ players: store.players })
  // $('#content').html(showPlayersHtml)
  $('#content').html(`You have successfully deleted ${store.playerId}`)
}

const failure = () => {
  $('#content').html('Something went wrong, please try again.')
}

module.exports = {
  createPlayerSuccess,
  showAllPlayersSuccess,
  getPlayerSuccess,
  updatePlayerSuccess,
  deletePlayerSuccess,
  failure
}
