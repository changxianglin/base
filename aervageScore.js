function averageScore(palyers) {
  var i, n, sum
  sum = 0
  for(i = 0; n = players.length; i < n; i++) {
    sum += score(players[i])
  }
  return sum / n
}

funtion score(player) {
  var i, n, sum
  sum = 0
  for(i = 0; n = player.levels.length; i < n; i++) {
    sum += player.levels[i].score
  }
  return sum
}

// 特性检测技术在 Web 浏览器中特别重要

if(!this.json) {
  this.JSON = {
    parse: ...,
    stringify: ...
  }
}
