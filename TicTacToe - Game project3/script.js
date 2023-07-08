console.log("Welcome to Tic Tac Toe Game")
let music = new Audio("start.wav")
let yourTurn = new Audio("ting.mp3")
let gameFinish = new Audio("hit.wav")
let turn = "X"
let isgameOver = false;

//  function change the turn
const changeTurn= ()=>{
    return turn==="X"? "0": "X"
}

// function to check for a win 
const checkWin = ()=>{
    let boxText=document.getElementsByClassName("boxText");
    let wins = [
        [0,1,2,-11,5,0],
        [3,4,5,-11,15,0],
        [6,7,8,-11,25,0],
        [0,3,6,-21,15,90],
        [1,4,7,-11,15,90],
        [2,5,8,-1,15,90],
        [0,4,8,-10,16,45],
        [2,4,6,-11,15,135],
    ]
    wins.forEach(e =>{
        if ((boxText[e[0]].innerText===boxText[e[1]].innerText) && (boxText[e[2]].innerText===boxText[e[1]].innerText) && 
            (boxText[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxText[e[0]].innerText + 'won'
            isgameOver=true
            music.play();
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width= "200px"
            document.querySelector(".line").style.width = "30vw";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`

        }
    })
}

//  game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(Element=>{
    let boxText = Element.querySelector(".boxText");
    Element.addEventListener('click',()=>{
        if(boxText.innerText===""){
            boxText.innerText= turn;
            turn = changeTurn();
            yourTurn.play();
            checkWin();
            if(!isgameOver){
                document.getElementsByClassName("info")[0].innerText= "Turn for" + turn;
            }
        }
    })
})
//  Add onclick listener to reset button
reset.addEventListener('click', ()=>{
    let boxText = document.querySelectorAll(".boxText");
    Array.from(boxText).forEach(element =>{
        element.innerText=""
    });
    turn = 'X';
    isgameOver = false
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText= "Turn for" + turn;
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width= "0px"
    


})