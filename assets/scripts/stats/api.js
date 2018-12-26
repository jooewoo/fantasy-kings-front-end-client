'use strict'
const config = require('../config.js')
const store = require('../store.js')

const showAllStats = () => {
  return $.ajax({
    url: config.apiUrl + `/stats`,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json'
  })
}

const createPlayerToTeam = (playerId) => {
  // console.log(playerData)
  return $.ajax({
    url: config.apiUrl + '/teams/',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(
      {
        'team': {
          'user_id': store.user.id,
          'stat_id': playerId
        }
      }

    )
  })
}

const deletePlayerFromTeam = (playerId) => {
  // console.log(playerData)
  return $.ajax({
    url: config.apiUrl + '/teams/' + playerId,
    method: 'DELETE',
    contentType: 'application/json',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const showTeam = () => {
  return $.ajax({
    url: config.apiUrl + '/teams/',
    method: 'GET',
    contentType: 'application/json',
    headers: {
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
  showAllStats,
  createPlayerToTeam,
  deletePlayerFromTeam,
  showTeam
}
