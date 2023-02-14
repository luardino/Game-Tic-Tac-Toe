const selectBox = document.querySelector('.select-box')
const selectXBtn = selectBox.querySelector('.playerX')
const selectOBtn = selectBox.querySelector('.playerO')
const playBoard = document.querySelector('.play-board')
const allBox = document.querySelectorAll('section span')
const players = document.querySelector('.players')

window.onload = () => {
    for(let i = 0; i < allBox.length; i++){
        allBox[i].setAttribute('onclick', 'clickedBox(this)')
    }

    selectXBtn.onclick = () =>{
        selectBox.classList.add('hide')
        playBoard.classList.add('show')
    }

    selectOBtn.onclick = ()=>{
        selectBox.classList.add('hide')
        playBoard.classList.add('show')
        players.setAttribute("class", 'players active player')
    }
}

let playerXIcon = "fas fa-times"
let playerOIcon = "fa-regular fa-circle"


function clickedBox(element){
    console.log(element)
    if(players.classList.contains('player')){
        element.innerHTML = `<i class = "${playerOIcon}"></i>`
        players.classList.add("active")
    }else{
        element.innerHTML = `<i class = "${playerXIcon}"></i>`
        players.classList.add("active")
    }
    element.style.pointerEvents = 'none'
}

/*function bot(){
    let array = [];
    for(let i = 0; i < allBox.length; i++){
        if(allBox[i].childElementCount == 0){
            array.push(i)
    }
*/