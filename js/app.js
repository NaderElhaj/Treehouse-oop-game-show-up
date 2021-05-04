const game = new Game();
const keys = document.querySelectorAll('.key');
console.log(document.getElementById("btn__reset"))
document.getElementById("btn__reset").addEventListener('click',()=>{
    game.startGame();
})
for(let key=0;key<keys.length;key++){
    keys[key].addEventListener('click',(e)=>{
        console.log(keys[key].innerHTML)
            game.handleInteraction(keys[key])
    })
}