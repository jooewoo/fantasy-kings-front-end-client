'use strict'
const store = require('../store.js')

const toggleStar = (state, teamData) => {
//   const playerTeam = []
//   teamData.map(player => {
//     playerTeam.push(player.stat.player)
//   })
//   const compare = statsData.filter(function (statsData) {
//     return playerTeam.indexOf(statsData.player) !== -1
//   })
// }
  if (state === 'hide') {
    $('.stat-player-' + teamData.stat.id).data('id', teamData.id)
    $('#delete-player-button-' + teamData.stat.id).removeClass('hidden')
    $('#add-player-button-' + teamData.stat.id).addClass('hidden')
    $('.player-message').html(`You have successfully added ${teamData.stat.player} to your team!`)
  } else if (state === 'show') {
    store.signInStats.map(player => {
      if (player.id === teamData) {
        $('.player-message').html(`You have successfully deleted ${player.player} from your team!`)
      }
    })
    $('#delete-player-button-' + teamData).addClass('hidden')
    $('#add-player-button-' + teamData).removeClass('hidden')
  }
}

module.exports = toggleStar
