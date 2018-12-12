'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

const onShowAllStats = (event) => {
  event.preventDefault()
  $(event.target).trigger('reset')
  api.showAllStats()
    .then(ui.showAllStatsSuccess)
    .catch(ui.failure)
}

const onCreateTeam = (event) => {
  event.preventDefault()
  store.statId = $(event.target).closest('tr').data('id')
  // console.log(store.statId)
  api.createTeam(store)
    .then(ui.createTeamSuccess)
    .catch(ui.failure)
}

const onDeleteTeam = (event) => {
  event.preventDefault()
  store.statId = $(event.target).closest('tr').data('id')
  // console.log(store.statId)
  api.deletePlayer(store.statId)
    .then(ui.deleteTeamSuccess)
    .catch(ui.failure)
}

const onShowTeam = (event) => {
  event.preventDefault()
  api.showTeam()
    .then(ui.showTeamSuccess)
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#show-stats-button').on('click', onShowAllStats)
  $('.content').on('click', '.stats-button', onCreateTeam)
  $('').on('submit', onDeleteTeam)
  $('.my-team').on('click', onShowTeam)
}

module.exports = {
  onShowAllStats,
  onCreateTeam,
  onDeleteTeam,
  onShowTeam,
  addHandlers
}
