//initialising the tiles randomly
let numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
let count=0
value=0
let clickedVal=[]
clickedTile=0

for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]]; // Swap elements
}
for(let k=0;k<=15;k++){
    pick=document.getElementById(`tile${k}`)
    
    pick.src=`${numbers[k]%8}.jpg`
    pick.setAttribute('data-value',`${numbers[k]%8}`)
}

function reveal(tilename){
    card=document.getElementById(tilename)
    card.style.opacity=1
    clickedTile=tilename
    val=card.getAttribute('data-value')
    
}

