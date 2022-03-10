let select = document.querySelectorAll('.cerrency'),
  inp1 = document.querySelector('#num'),
  inp2 = document.querySelector('#ans'),
  btn = document.querySelector('.btn');

let host = 'www.frankfurter.app/currencies'

fetch(`https://${host}`)
  .then(res => res.json())
  .then(data => display(data))

function display(data) {
  const entries = Object.entries(data)

  for (let i = 0; i < entries.length; i++) {
    i++
    select[0].innerHTML = `<option value="${entries[i][0]}">${entries[i][0]}</option>`

  }
}