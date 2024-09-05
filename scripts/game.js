
const grid = document.querySelector("#grid")
var cells = ['','','','','','','','','']
var elements = grid.getElementsByClassName("cell")
var winnerMessage = document.querySelector("#winnerMessage")
var currentSymbol = 'X' 
var numberOfSymbols = 0
var gameOver = false

function checkDiagonals() {
    if(cells[0] == this.currentSymbol && cells[0] == cells[4] && cells[4] == cells[8]) return true
    if(cells[6] == this.currentSymbol && cells[6] == cells[4] && cells[4] == cells[2]) return true
    return false
}

function checkRows() {
    if(cells[0] == this.currentSymbol && cells[0] == cells[1] && cells[1] == cells[2]) return true
    if(cells[3] == this.currentSymbol && cells[3] == cells[4] && cells[4] == cells[5]) return true
    if(cells[6] == this.currentSymbol && cells[6] == cells[7] && cells[7] == cells[8]) return true
    return false
}

function checkColumns() {
    if(cells[0] == this.currentSymbol && cells[0] == cells[3] && cells[3] == cells[6]) return true
    if(cells[1] == this.currentSymbol && cells[1] == cells[4] && cells[4] == cells[7]) return true
    if(cells[2] == this.currentSymbol && cells[2] == cells[5] && cells[5] == cells[8]) return true
    return false
}


function hasWinner() {
  return  checkDiagonals() || checkRows() || checkColumns() 
}

function isOver(){
    return hasWinner() || numberOfSymbols == 9
}

function startGame(){
    for (let i = 0; i < 9; i++) {
        elements[i].addEventListener('click',addSymbol)
      }
}

function addSymbol (e){
    if(!gameOver){
    const symbol = document.createElement('div')
    if (currentSymbol == 'O') symbol.classList.add('circle')
    else {
        symbol.classList.add('cross')
        symbol.innerText = currentSymbol
        
    }
    e.target.append(symbol)
    cells [e.target.id-"0"] = currentSymbol
    e.target.removeEventListener('click',addSymbol)
    numberOfSymbols += 1
    if (hasWinner()) {
        winnerMessage.innerText = 'WINNER IS ' + currentSymbol
        gameOver = true
    }
    else if(numberOfSymbols==9) winnerMessage.innerText = 'DRAW'
    
    if(currentSymbol == 'X') currentSymbol = 'O'
    else currentSymbol = 'X'
    

}
}

startGame()