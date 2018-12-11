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

const onShowAllStats = (event) => {
  event.preventDefault()
  $(event.target).trigger('reset')
  api.showAllStats()
    .then(ui.showAllStatsSuccess)
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
  $('').on('submit', onCreatePlayer)
  $('').on('submit', onGetPlayer)
  $('#show-stats-button').on('click', onShowAllStats)
  $('').on('submit', onUpdatePlayer)
  $('').on('submit', onDeletePlayer)
}

module.exports = {
  onCreatePlayer,
  onGetPlayer,
  onShowAllStats,
  onUpdatePlayer,
  onDeletePlayer,
  addHandlers
}
