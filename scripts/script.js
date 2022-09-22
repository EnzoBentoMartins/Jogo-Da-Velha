var play1 = document.getElementById('nomeP1')
var play2 = document.getElementById('nomeP2')
var modal = document.getElementById('modal')
var modalTitle = document.getElementById('modalTitle')

function nomear() {
    play1.innerHTML = document.getElementById('p1').value
    play2.innerHTML = document.getElementById('p2').value
}

document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll('.square')

    squares.forEach((square) => {
        square.addEventListener('click', handleClick)
    })
})

function handleClick(event) {
    console.log(event.target.id)

    if (handleMovie(event.target.id)) {
        setTimeout(() => {
            if (playerTime == 0) {
                modalTitle.innerHTML = document.getElementById('p1').value + ' Ganhou'
            } else {
                modalTitle.innerHTML = document.getElementById('p2').value + ' Ganhou'
            }
            modal.style.display = 'block'
        }, 10)
    }
    updateSquares()
}

function updateSquares() {

    let squares = document.querySelectorAll('.square')

    squares.forEach((square) => {
        let position = square.id
        let symbol = board[position]

        if (symbol != '') {
            square.innerHTML = `<div class='${symbol}'></div>`
        }
    })
}