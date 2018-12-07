'use strict'
const config = require('../config.js')
const store = require('../store.js')

const createPlayer = () => {
  return $.ajax({
    url: config.apiUrl + '/players/',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json'
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
    data: JSON.stringify(playerId)
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

const updatePlayer = (index, value, over) => {
  return $.ajax({
    url: config.apiUrl + `/players/` + store.gameID,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    contentType: 'application/json',
    data: JSON.stringify(
      {
        'game': {
          'cells': {
            'index': index,
            'value': value
          },
          'over': over
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
