'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/event.js')
const playersEvents = require('./players/event.js')
const statsEvents = require('./stats/event.js')
const store = require('./store.js')

$(() => {
  authEvents.addHandlers()
  playersEvents.addHandlers()
  statsEvents.addHandlers()
  $('.project-2').on('click', () => {
    $('.project-requirements').removeClass('hidden')
    $('.ranking, .my-players, .show-stats-button, .season-averages, .season-totals').addClass('hidden')
    $('#content').empty()
  })
  $('.project-2-v2').on('click', () => {
    $('.ranking, .my-team, .show-stats-button, .season-averages, .season-totals').removeClass('hidden')
    $('.project-requirements').addClass('hidden')
    $('#content').empty()
  })
  // $('.stats-table-1').click(() => {
  //   $(`.stats-table-1`).toggle()
  // })
  // $('.content').click(`#stats-table-${store.statsId}`, () => {
  //   $(`#stats-table-${store.statsId}`).toggle()
  // })
})
