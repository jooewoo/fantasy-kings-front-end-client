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
  $('#change-password-dropdown, #sign-out-button').show()
  $('#sign-up-form-dropdown, #sign-in-form-dropdown').hide()
}

const changePasswordSuccess = () => {
  $('#player-message').html('You changed password successfully')
}

const signOutSuccess = () => {
  $('#player-message').html('You signed out successfully')
  $('#change-password-dropdown, #sign-out-button').hide()
  $('#sign-up-form-dropdown, #sign-in-form-dropdown').show()
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
