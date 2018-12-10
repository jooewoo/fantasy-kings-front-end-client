'use strict'
const store = require('../store.js')

const signUpSuccess = (signUpResponse) => {
  // $('#game-message').show()
  $('#player-message').html('You signed up successfully')
  // $('#game-message').removeClass('error-message')
  // $('#game-message').addClass('success-message')
  // $('#game-message').fadeOut(5000)
}

const signInSuccess = (signInResponse) => {
  store.user = signInResponse.user
  // console.log(store)
  $('#player-message').html('You signed in successfully')
  $('div[style*=block]').removeAttr('style')
  $('div.btn-group-1').removeClass('hidden')
  $('.btn-group-1, #change-password-dropdown, #sign-out-button').show()
  $('#sign-up-form-dropdown, #sign-in-form-dropdown').hide()
  $('.btn-group-1').removeClass('hidden')
}

const changePasswordSuccess = () => {
  $('#player-message').html('You changed password successfully')
}

const signOutSuccess = () => {
  $('#player-message').html('You signed out successfully')
  $('div[style*=block]').removeAttr('style')
  $('#change-password-dropdown, #sign-out-button').addClass('hidden')
  $('#sign-up-form-dropdown, #sign-in-form-dropdown').show()
  $('#content').empty()
}

const failure = (failureResponse) => {
  $('#player-message').html('Something went wrong, please try again.')
  // $('#game-message').removeClass('success-message')
  // $('#game-message').addClass('error-message')
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  failure
}
