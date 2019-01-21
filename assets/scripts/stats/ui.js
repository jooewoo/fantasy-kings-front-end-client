'use strict'
const store = require('../store.js')
// const showPlayersTemplate = require('../templates/helpers/player-listings.handlebars')
const showStatsTemplate = require('../templates/helpers/stat-listings.handlebars')
const showTeamsTemplate = require('../templates/helpers/team-listings.handlebars')
const toggleStar = require('../filter-data/toggle-star.js')
const hideStar = require('../filter-data/hide-star.js')
const playerMessage = require('../filter-data/player-message.js')
const playerMessageFailure = require('../filter-data/player-message-failure.js')

const createTeamSuccess = (playerData) => {
  store.teamId = playerData.team.id

  $('.welcome-message').addClass('hidden')
  toggleStar('hide', playerData.team)
  clearTimeout(playerMessage())
}

const showAllStatsSuccess = (statData) => {
  store.stats = statData.stats
  const showStatsHtml = showStatsTemplate({ stats: store.signInStats })
  $('#content').html(showStatsHtml)

  $('.welcome-message').addClass('hidden')
  hideStar(store.signInTeam)
  $('.table').DataTable()
  clearTimeout(playerMessage())
}

const deleteTeamSuccess = () => {
  toggleStar('show', store.deleteId)

  clearTimeout(playerMessage())
}

const showTeamSuccess = (teamData) => {
  $('#content').empty()
  store.signInTeam = teamData.teams

  if (teamData.teams.length === 0) {
    $('.player-message').html('You have no players on your team. Please click on Players and add some players to your team!')
    clearTimeout(playerMessage())
  } else {
    const showTeamsHtml = showTeamsTemplate({ stats: teamData.teams })
    $('#content').html(showTeamsHtml)
    teamData.teams.map(player => {
      toggleStar('hide', player)
    })
    $('.player-message').html('You have successfully gotten the stats for your team!')
    clearTimeout(playerMessage())
    $('.table').DataTable()
  }
}

const updateTeamId = (teamData) => {
  store.signInTeam = teamData.teams
}

const failure = () => {
  $('.player-message-failure').html('Something went wrong, please try again.')
  clearTimeout(playerMessageFailure())
}

// const getPlayerSuccess = (playerData) => {
//   store.getPlayer = playerData.player
//   const showPlayersHtml = showPlayersTemplate({ players: playerData.player })
//   $('#content').html(showPlayersHtml)
// }

// const updatePlayerSuccess = (playerData) => {
//   const showPlayersHtml = showPlayersTemplate({ players: playerData.player })
//   $('#content').html(showPlayersHtml)
// }

module.exports = {
  createTeamSuccess,
  showAllStatsSuccess,
  deleteTeamSuccess,
  showTeamSuccess,
  updateTeamId,
  failure
}
