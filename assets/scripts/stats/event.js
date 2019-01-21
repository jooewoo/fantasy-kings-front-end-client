'use strict'

// const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

const onShowAllStats = (event) => {
  event.preventDefault()
  ui.showAllStatsSuccess(store.signInStats)
  api.showAllStats()
    .then(ui.showAllStatsSuccess)
    .then(() => api.showTeam())
    .then(ui.updateTeamId)
    .catch(ui.failure)
}

const onCreateTeam = (event) => {
  event.preventDefault()
  const teamId = $(event.currentTarget).data('id')
  store.statId = $(event.currentTarget).data('id')

  api.createPlayerToTeam(teamId)
    .then(ui.createTeamSuccess)
    .then(() => api.showTeam())
    .then(ui.updateTeamId)
    .catch(ui.failure)
}

const onDeleteTeam = (event) => {
  event.preventDefault()
  const teamId = $(event.target).closest('tr').data('id')
  store.deleteId = $(event.target).closest('td').data('id')

  api.deletePlayerFromTeam(teamId)
    .then(ui.deleteTeamSuccess)
    .then(() => api.showTeam())
    .then(ui.updateTeamId)
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
  $('.content').on('click', '.add-player-button', onCreateTeam)
  $('.content').on('click', '.delete-player-button', onDeleteTeam)
  $('.my-team').on('click', onShowTeam)
}

module.exports = {
  onShowAllStats,
  onCreateTeam,
  onDeleteTeam,
  onShowTeam,
  addHandlers
}
