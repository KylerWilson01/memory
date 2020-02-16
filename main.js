$(document).ready(function () {

  var memory = new Memory()
  memory.newGame()
  memory.log()
  memory.deal()
  $('.cards').flip()


  var num1 = ''
  var num2 = ''

  let score = 0
  let lives = 10
  $('#lives').html(`You have ${lives} lives remaining`)
  $('#score').html(`You have ${score} pairs flipped`)

  $('#board').on('click', '.front', function (e) {
    e.preventDefault()

    value = $(this).find('+ .back').html()

    $(this).parent().addClass('flipped')

    if (num1 === '') {
      num1 += value
    } else if (num2 === '') {
      num2 += value
    }

    setTimeout(() => {
      if (score === 9 && lives > 0) {
        $('#game').html(`You Win!!! <button id='reset'> Start New Game</button>`)
      } else if (lives <= 0) {
        $('#game').html(`You Lost :( Try again <button id='reset'> Start New Game</button>`)
      }
    }, 1000)

    setTimeout(() => {
      if (num1 === num2 && num1 !== '' && num2 !== '') {
        $(this).parent().siblings().find('+ .flipped').addClass('match').removeClass('flipped')
        $(this).parent().addClass('match').removeClass('flipped')
        $('.match').off('.flip')

        score++
        console.log(score, lives)
        $('#lives').html(`You have ${lives} lives remaining`)
        $('#score').html(`You have ${score} pairs flipped`)

        num1 = ''
        num2 = ''
      } else if (num1 !== num2 && num1 !== '' && num2 !== '') {
        $('.flipped').flip(false)

        setTimeout(() => {
          $(this).parent().siblings().removeClass('flipped')
          $(this).parent().removeClass('flipped')
        }, 0)

        lives--
        console.log(score, lives)
        $('#lives').html(`You have ${lives} lives remaining`)
        $('#score').html(`You have ${score} pairs flipped`)

        num1 = ''
        num2 = ''
      }
    }, 500)

  })
})

