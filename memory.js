
let numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
let count=0
moves=0
match=0
let clickedVal=[]
clickedTile=[]

for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
}
for(let k=0;k<=15;k++){
    pick=document.getElementById(`tile${k}`)
    
    pick.src=`${numbers[k]%8}.jpg`
    pick.setAttribute('data-value',`${numbers[k]%8}`)
}

function reveal(tilename){
    card=document.getElementById(tilename)
    card.style.opacity=1
    val=card.getAttribute('data-value');
    clickedVal.push(val);
    clickedTile.push(tilename);
    count++;

    if (count === 2) {
        moves++;
        checkTiles();
    }
}

function checkTiles() {
    if (clickedVal[0] === clickedVal[1]) {
        clickedVal = [];
        clickedTile = [];
        count = 0;
        match++;
        
        if (match === 8) {
            setTimeout(endGame, 500); 
        }
    } else {

        setTimeout(() => {
            document.getElementById(clickedTile[0]).style.opacity = 0;
            document.getElementById(clickedTile[1]).style.opacity = 0;
            clickedVal = [];
            clickedTile = [];
            count = 0;
        }, 500);
    }

}
function endGame(){
    const board = document.getElementById("gameBoard");
    board.style.transition = "opacity 1s";
    board.style.opacity = 0; 

    setTimeout(() => {
        board.innerHTML = `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; color: white; background: black;">
                <h1>Congratulations!</h1>
                <p>You completed the game in <strong>${moves}</strong> moves.</p>
            </div>
        `;
        board.style.opacity = 1; 
    }, 1000);
}
    
