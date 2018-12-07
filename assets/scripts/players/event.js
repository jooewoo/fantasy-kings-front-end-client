'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

const onCreatePlayer = (event) => {
  event.preventDefault()
  api.createPlayer()
    .then(ui.createPlayerSuccess)
    .catch(ui.failure)
}

const onGetPlayer = (event) => {
  event.preventDefault()
  const playerData = getFormFields(event.target)
  $(event.target).trigger('reset')
  if (playerData === '') {
    $('#game-message').html('Please enter an ID')
  } else {
    $('#game-message').addClass('hidden')
    api.getGame(playerData)
      .then(ui.getPlayerSuccess)
      .catch(ui.failure)
  }
}

const onShowAllPlayers = (event) => {
  event.preventDefault()
  $(event.target).trigger('reset')
  api.showAllPlayers()
    .then(ui.showAllPlayersSuccess)
    .catch(ui.failure)
}

const onUpdatePlayer = (event) => {
  const value = store.player
  const id = $(event.target).data().cellIndex
  const over = store.over
  const winner = store.winner
  api.updatePlayer(id, value, over)
    .then(ui.updatePlayer(id, value, over, winner))
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#start-game-button').on('click', onCreatePlayer)
  $('#previous-game').on('submit', onGetPlayer)
  $('#show-games-button').on('click', onShowAllPlayers)
  $('.box').on('click', onUpdatePlayer)
}

// const choosePlayerIcon = function (event) {
//   const hasClass = $(event.target).hasClass('player1')
//   let playerIcon = null
//   if (hasClass) {
//     playerIcon = 'player1'
//   } else {
//     playerIcon = 'player2'
//   }
//   const newIcon = config.imgUrl[playerIcon] = event.target.src
//   config.iconNames[playerIcon] = event.target.id
//   ui.changePlayerIcon(newIcon, playerIcon)
// }

module.exports = {
  onCreatePlayer,
  onGetPlayer,
  onShowAllPlayers,
  onUpdatePlayer,
  addHandlers
}
