'use strict'
const store = require('../store.js')
const authMessage = require('../filter-data/auth-message.js')

const signUpSuccess = (signUpResponse) => {
  $('#sign-up-success').removeClass('hidden')
  $('.message-auth').html('You have successfully signed up')
}

const signInSuccess = (signInResponse) => {
  store.user = signInResponse.user

  $('.btn-group-1, #change-password-dropdown, #sign-out-button').show()
  $('div[style*=block]').removeAttr('style')
  $('div.btn-group-1').removeClass('hidden')
  $('#sign-up-form-dropdown, #sign-in-form-dropdown, #sign-up-failure, #sign-up-success, #sign-in-failure').hide()
  $('.btn-group-1, #sign-in-success, .project-2, .project-2-v2').removeClass('hidden')
  clearTimeout(authMessage('You have successfully signed in!'))
}

const changePasswordSuccess = () => {
  clearTimeout(authMessage('You have successfully changed your password'))
}

const signOutSuccess = () => {
  $('.btn-group-1, .project-requirements, #sign-in-success, #sign-up-success, #sign-up-failure, #change-password-success, #change-password-failure').addClass('hidden')
  $('#sign-up-form-dropdown, #sign-in-form-dropdown').show()
  $('#sign-out-success').removeClass('hidden')
  $('#content, .my-fantasy-team').empty()
  $('.my-team, .show-stats-button, .project-2, .project-2-v2').addClass('hidden')
  $('.change-password-form').trigger('reset')
  clearTimeout(authMessage('You have successfully signed out'))
}

const signUpFailure = (failureResponse) => {
  $('.message-auth-failure').html('There was an error! Someone probably has already taken the email.')
  $('.message-auth-failure').show(200)
  setTimeout(function () {
    $('.message-auth-failure').fadeOut(200)
  }, 2000)
}

const signInFailure = (failureResponse) => {
  $('.message-auth-failure').html('You have used the wrong email/password. Please try again.')
  $('.message-auth-failure').show(200)
  setTimeout(function () {
    $('.message-auth-failure').fadeOut(200)
  }, 2000)
}

const signOutFailure = (failureResponse) => {
  $('.message-auth-failure').html('Something has gone wrong, please try again!')
  $('.message-auth-failure').show(200)
  setTimeout(function () {
    $('.message-auth-failure').fadeOut(200)
  }, 2000)
}

const changePasswordFailure = (failureResponse) => {
  // $('div[style*=block]').removeAttr('style')
  $('.message-auth-failure').html('You have used the wrong email/password. Please try again.')
  $('.message-auth-failure').show(200)
  setTimeout(function () {
    $('.message-auth-failure').fadeOut(200)
  }, 2000)
}

const showAllStatsSuccess = (statData) => {
  store.signInStats = statData.stats
}

const showTeamSuccess = (teamData) => {
  store.signInTeam = teamData.teams
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  signUpFailure,
  signInFailure,
  signOutFailure,
  changePasswordFailure,
  showAllStatsSuccess,
  showTeamSuccess
}
