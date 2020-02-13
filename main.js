$(document).ready(function () {
  var memory = new Memory()
  memory.newGame()
  memory.log()
  memory.deal()
  $('.cards').flip()
})

