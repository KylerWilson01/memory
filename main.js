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

    if (num1 === '') {
      num1 += value
    } else {
      num2 += value
    }
    console.log(num1, num2)

    if (num1 === num2) {
      num1 = ''
      num2 = ''
      console.log('yay!')
    } else if (num1 !== num2 && num1 !== '' && num2 !== '') {
      num1 = ''
      num2 = ''
      console.log('grr!')
    }
  })
})

