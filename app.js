const board = document.querySelector('#board')
const colors = ['#1240AB','#e74c3c', '#D235D2', '#8e44ad', '#8243D6', '#9FEE00', '#CE0071', '#FFF340', '#FF0000', '#33CCCC', '#e67e22', '#2ecc71']
const SQUARES_NUMBER = 900

for (let i = 0; i < SQUARES_NUMBER; i++) {
 const square = document.createElement('div')
 square.classList.add('square')


 square.addEventListener('mouseover', setColor)

    square.addEventListener('mouseleave', removeColor)

    board.append(square)

 }
 
 function setColor(event) {
    const element = event.target
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color} `

 }


 function removeColor(event) {
    const element = event.target     
    element.style.backgroundColor ='#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
 }

 function getRandomColor() {    
   return colors[Math.floor(Math.random() * colors.length)]
 }