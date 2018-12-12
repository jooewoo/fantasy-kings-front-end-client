'use strict'
const store = require('../store.js')
const showPlayersTemplate = require('../templates/helpers/player-listings.handlebars')
const showStatsTemplate = require('../templates/helpers/stat-listings.handlebars')
const showTeamsTemplate = require('../templates/helpers/team-listings.handlebars')

const createTeamSuccess = (playerData) => {
  console.log(playerData)
  store.player = playerData.player
  const showTeamsHtml = showStatsTemplate({ players: playerData.team.stat })
  $('.my-team').html(showTeamsHtml)
}

const showAllStatsSuccess = (statData) => {
  store.stats = statData.stats
  console.log(statData.stats)
  const showStatsHtml = showStatsTemplate({ stats: statData.stats })
  $('#content').html(showStatsHtml)
}

const getPlayerSuccess = (playerData) => {
  store.getPlayer = playerData.player
  const showPlayersHtml = showPlayersTemplate({ players: playerData.player })
  $('#content').html(showPlayersHtml)
}

const updatePlayerSuccess = (playerData) => {
  console.log(playerData)
  const showPlayersHtml = showPlayersTemplate({ players: playerData.player })
  $('#content').html(showPlayersHtml)
}

const deletePlayerSuccess = () => {
  console.log(store)
  const showPlayersHtml = showPlayersTemplate({ players: store.players })
  $('#content').html(showPlayersHtml)
  // $('#content').html(`You have successfully deleted ${store.playerId}`)
}

const showTeamSuccess = (teamData) => {
  console.log(teamData.teams)
  store.teams = teamData.teams
  const showTeamsHtml = showTeamsTemplate({ stats: teamData.teams })
  $('.my-fantasy-team').html(showTeamsHtml)
}

const failure = () => {
  $('#content').html('Something went wrong, please try again.')
}

module.exports = {
  createTeamSuccess,
  showAllStatsSuccess,
  getPlayerSuccess,
  updatePlayerSuccess,
  deletePlayerSuccess,
  showTeamSuccess,
  failure
}
