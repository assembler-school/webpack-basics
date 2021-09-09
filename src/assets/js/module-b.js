$('#jquery').append('<button id="button">Click</button>')

const message = $('<p class="text"></p>')
$('#button').on('click', () => {
  message.text('hello jquery')
  $('#button').after(message)
})
