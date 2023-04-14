const gameBoard =  document.getElementById('gameBord');
const infoDisplay = document.getElementById('info');

const starCells = [
    "", "", "",  "", "", "",  "", "", "",
];


let go  = "circle";
infoDisplay.textContent = "Circle Goes first";

function createBoard (){
    starCells.forEach((_cell, index) => {
        const cellEll = document.createElement("div");
        cellEll.classList.add("square");
        cellEll.id = index
        cellEll.addEventListener("click",addGo)
        gameBoard.append(cellEll);
    });
   
}
createBoard();

function addGo(e) {
    
    const goDisplay = document.createElement("div");
    goDisplay.classList.add(go);
   e.target.append(goDisplay);
    go = go === "circle" ? "cross" : "circle";
   infoDisplay.textContent = "it is " + go + "'s go."
   e.target.removeEventListener("click",addGo);
  console.log(go);
checkScore();
}


function checkScore(){
    const allSquares =  document.querySelectorAll(".square");
    console.log(allSquares)
    const winningCombos = [

             [0,1,2], [3,4,5], [6,7,8], [0,3,6], 
             [1,4,7], [2,5,8], [0,4,8], [2,4,6]   
          ];
          
          winningCombos.forEach(array=> {
            const circleWins = array.every(cell=> allSquares[cell].firstChild?.classList.contains("circle") );
            console.log(circleWins)
      
            if(circleWins){
infoDisplay.textContent = "Circle wins"
allSquares.forEach(square => square.replaceWith(square.cloneNode(true)));
return

            } 
           
        });

        winningCombos.forEach(array => {
            const crossWins = array.every(cell=> allSquares[cell].firstChild?.classList.contains("cross") );
            console.log(crossWins)
      
            if(crossWins){
infoDisplay.textContent = "Cross wins"
allSquares.forEach(square => square.replaceWith(square.cloneNode(true)));
return
            } 
           
        });
        
            
}


