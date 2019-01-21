'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
// const store = require('../store.js')

const onSignUp = (event) => {
  event.preventDefault()
  const userData = getFormFields(event.target)
  $(event.target).trigger('reset')
  $('#sign-up-form').trigger('reset')

  api.signUp(userData)
    .then(ui.signUpSuccess)
    .then(() => api.signIn(userData))
    .then(ui.signInSuccess)
    .then(() => api.showAllStats())
    .then(ui.showAllStatsSuccess)
    .then(() => api.showTeam())
    .then(ui.showTeamSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = (event) => {
  event.preventDefault()
  const userData = getFormFields(event.target)
  $(event.target).trigger('reset')
  $('#sign-up-form').trigger('reset')

  api.signIn(userData)
    .then(ui.signInSuccess)
    .then(() => api.showAllStats())
    .then(ui.showAllStatsSuccess)
    .then(() => api.showTeam())
    .then(ui.showTeamSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = (event) => {
  event.preventDefault()
  const userData = getFormFields(event.target)
  $(event.target).trigger('reset')
  api.changePassword(userData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = (event) => {
  $('#change-password-form').trigger('reset')
  $('#sign-in-form').trigger('reset')
  $('#sign-up-form').trigger('reset')
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onShowAllStats = (event) => {
  event.preventDefault()
  api.showAllStats()
    .then(ui.showAllStatsSuccess)
    .catch(ui.failure)
}

const onShowTeam = (event) => {
  event.preventDefault()
  api.showTeam()
    .then(ui.showTeamSuccess)
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#sign-up-form').on('submit', onSignUp)
  $('#sign-in-form').on('submit', onSignIn)
  $('#change-password-form').on('submit', onChangePassword)
  $('#sign-out-button').on('click', onSignOut)

  $('.input-field-clear-class').on('click', () => {
    $('.input-field-clear').val('')
  })
}

module.exports = {
  onShowAllStats,
  onShowTeam,
  addHandlers
}
