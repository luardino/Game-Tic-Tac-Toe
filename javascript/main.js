const selectBox = document.querySelector('.select-box')
selectXBtn = selectBox.querySelector('.playerX')
selectOBtn = selectBox.querySelector('.playerO')
playBoard = document.querySelector('.play-board')
allBox = document.querySelectorAll('section span')
players = document.querySelector('.players')

window.onload = ()=>{

    for(i = 0; i < allBox.length; i++){
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
    console.log(element);
    if(players.classList.contains('player')){
        element.innertHTML = `<i class = '${playerOIcon}'></i>`
    }else{
        element.innertHTML = `<i class = '${playerXIcon}'</i>`
    }
}