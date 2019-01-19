'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/event.js')
const playersEvents = require('./players/event.js')
const statsEvents = require('./stats/event.js')

// const DataTable = require('../../node_modules/datatables.net-bs/js/dataTables.bootstrap4')
// const store = require('./store.js')

$(() => {
  authEvents.addHandlers()
  playersEvents.addHandlers()
  statsEvents.addHandlers()

  $('.project-2').on('click', () => {
    $('.project-requirements').removeClass('hidden')
    $('.ranking, .my-team, .show-stats-button, .season-averages, .season-totals, #player-message').addClass('hidden')
    $('#content, .my-fantasy-team').empty()
  })

  $('.project-2-v2').on('click', () => {
    $('.ranking, .my-team, .show-stats-button, .season-averages, .season-totals').removeClass('hidden')
    $('.project-requirements, #player-message').addClass('hidden')
    $('#content').empty()
  })

  $('.carousel').carousel({
    interval: 3000
  })
})
