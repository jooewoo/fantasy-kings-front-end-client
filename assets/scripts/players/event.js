'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

const onCreatePlayer = (event) => {
  event.preventDefault()
  const playerData = getFormFields(event.target)
  $(event.target).trigger('reset')
  console.log(playerData)
  api.createPlayer(playerData.player)
    .then(ui.createPlayerSuccess)
    .catch(ui.failure)
}

const onGetPlayer = (event) => {
  event.preventDefault()
  const playerData = getFormFields(event.target)
  $(event.target).trigger('reset')
  console.log(playerData)
  api.getPlayer(playerData.player.id)
    .then(ui.getPlayerSuccess)
    .catch(ui.failure)
}

const onShowAllPlayers = (event) => {
  event.preventDefault()
  $(event.target).trigger('reset')
  api.showAllPlayers()
    .then(ui.showAllPlayersSuccess)
    .catch(ui.failure)
}

const onUpdatePlayer = (event) => {
  event.preventDefault()
  const playerData = getFormFields(event.target)
  $(event.target).trigger('reset')
  console.log(playerData)
  api.updatePlayer(playerData)
    .then(ui.updatePlayerSuccess)
    .catch(ui.failure)
}

const onDeletePlayer = (event) => {
  event.preventDefault()
  const playerData = getFormFields(event.target)
  $(event.target).trigger('reset')
  console.log(playerData.player.id)
  store.playerId = playerData.player.id
  api.deletePlayer(playerData)
    .then(ui.deletePlayerSuccess)
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#create-player-form').on('submit', onCreatePlayer)
  $('#get-player-form').on('submit', onGetPlayer)
  $('#show-players-button-id').on('click', onShowAllPlayers)
  $('#update-player-form').on('submit', onUpdatePlayer)
  $('#delete-player-form').on('submit', onDeletePlayer)
}

module.exports = {
  onCreatePlayer,
  onGetPlayer,
  onShowAllPlayers,
  onUpdatePlayer,
  onDeletePlayer,
  addHandlers
}
