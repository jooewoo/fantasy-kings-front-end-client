'use strict'

const hideStar = (teamData) => {
  if (teamData.length === 0) {
    $('.player-message').html('You have successfully gotten the stats for all players!')
  } else {
    teamData.map(players => {
      $('.stat-player-' + players.stat.id).data('id', players.id)
      $('#delete-player-button-' + players.stat.id).removeClass('hidden')
      $('#add-player-button-' + players.stat.id).addClass('hidden')
      $('.player-message').html('You have successfully gotten the stats for all players!')
    })
  }
}

module.exports = hideStar
