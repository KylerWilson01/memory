$(document).ready(function () {
  var memory = new Memory()
  memory.newGame()
  memory.log()
  memory.deal()
  $('.cards').flip()

  var num1 = ''
  var num2 = ''

  $('#board').on('click', '.front', function (e) {
    e.preventDefault()

    value = $(this).find('+ .back').html()

    $(this).parent().addClass('flipped')

    if (num1 === '') {
      num1 += value
    } else if (num2 === '') {
      num2 += value
    }
    console.log(num1, num2)
    setTimeout(() => {
      if (num1 === num2 && num1 !== '' && num2 !== '') {

        $(this).parent().removeClass('flipped').addClass('match')
        $(this).parent().siblings().find('+ .flipped').removeClass('flipped').addClass('match')


        $('.match').off('.flip')

        num1 = ''
        num2 = ''
      } else if (num1 !== num2 && num1 !== '' && num2 !== '') {
        setTimeout(() => {
          $('.flipped').flip(false)
        }, 500)

        setTimeout(() => {
          $(this).parent().siblings().removeClass('flipped')
          $(this).parent().removeClass('flipped')
        }, 600)


        num1 = ''
        num2 = ''
      }
    }, 100)

  })
})

