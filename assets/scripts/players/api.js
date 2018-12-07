'use strict'
const config = require('../config.js')
const store = require('../store.js')

const createPlayer = (playerData) => {
  return $.ajax({
    url: config.apiUrl + '/players/',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(
      {
        'player': {
          'first_name': playerData.first_name,
          'last_name': playerData.last_name,
          'personal_info': playerData.personal_info,
          'team': playerData.team,
          'stats': playerData.stats,
          'league': playerData.league,
          'user_id': store.user.id
        }
      }
    )
  })
}

const getPlayer = (playerId) => {
  return $.ajax({
    url: config.apiUrl + '/players/' + playerId,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(
      {
        'player': {
          'user_id': store.user.id
        }
      })
  })
}

const showAllPlayers = (playerData) => {
  return $.ajax({
    url: config.apiUrl + `/players`,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(playerData)
  })
}

const updatePlayer = (playerData) => {
  return $.ajax({
    url: config.apiUrl + `/players/` + playerData.id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(
      {
        'player': {
          'first_name': playerData.first_name,
          'last_name': playerData.last_name,
          'personal_info': playerData.personal_info,
          'team': playerData.team,
          'stats': playerData.stats,
          'league': playerData.league,
          'user_id': store.user.id
        }
      }
    )
  })
}

module.exports = {
  createPlayer,
  getPlayer,
  showAllPlayers,
  updatePlayer
}
