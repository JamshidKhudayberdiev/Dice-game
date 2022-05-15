const newbtn = document.querySelector('.btn--new')
const rollbtn = document.querySelector('.btn--roll')
const holdbtn = document.querySelector('.btn--hold')
const dice = document.querySelector('.dice')

dice.style.display = 'none'

let  currentScore = 0
let activePlayer = 0
let totalScore = [0, 0]
let gameOver = false

rollbtn.addEventListener('click', ()=>{
  if(!gameOver){
    const radomNumber = Math.floor(Math.random() * 6)+ 1
    dice.src = `./dice-${radomNumber}.png`
    dice.style.display = 'block'

    if(radomNumber != 1){
        currentScore += radomNumber
        document.getElementById(`current--${activePlayer}`,).textContent = currentScore
    } else {
      switchPlayer()
    }

  }
})
holdbtn.addEventListener('click', ()=> {
    if (!gameOver){
      totalScore[activePlayer] += currentScore
    document.querySelector(`#score--${activePlayer}`).textContent = totalScore[activePlayer]


    if(totalScore[activePlayer] >= 20){
      gameOver = true
      document.querySelector('.player--0').classList.remove('player--active')
      document.querySelector('.player--1').classList.remove('player--active')
      document.querySelector(`'.player--${activePlayer}'`).classList.add('player--winner')
    } else{
      switchPlayer()
    }
    
    }
})


function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0
  currentScore = 0
  activePlayer = activePlayer == 0 ? 1 : 0
  document.querySelector('.player--0').classList.toggle('player--active')
  document.querySelector('.player--1').classList.toggle('player--active')
}

newbtn.addEventListener('click',()=>{
  currentScore = 0
  activePlayer = 0
  totalScore = [0, 0]
  gameOver = false
  document.getElementById('score--0').textContent = 0
  document.getElementById('score--1').textContent = 0
  document.getElementById('current--0').textContent = 0
  document.getElementById('current--1').textContent = 0
  document.querySelector('.player--0').classList.add('player--active')
  document.querySelector('.player--1').classList.remove('player--active')
  document.querySelector('.player--0').classList.remove('player--winner')
  document.querySelector('.player--1').classList.remove('player--winner')
  
})