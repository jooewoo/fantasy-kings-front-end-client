'use strict'
const store = require('../store.js')

const signUpSuccess = (signUpResponse) => {
  // $('#game-message').show()
  $('#game-message').html('You signed up successfully')
  // $('#game-message').removeClass('error-message')
  // $('#game-message').addClass('success-message')
  // $('#game-message').fadeOut(5000)
}

const signInSuccess = (signInResponse) => {
  store.user = signInResponse.user
  // console.log(store)
  $('#game-message').html('You signed in successfully')
}

const changePasswordSuccess = () => {
  $('#game-message').html('You changed password successfully')
}

const signOutSuccess = () => {
  $('#game-message').html('You signed out successfully')
}

const failure = (failureResponse) => {
  $('#game-message').html('Something went wrong, please try again.')
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
