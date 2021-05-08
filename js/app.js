const game = new Game();
const keys = document.querySelectorAll('.key');
document.getElementById("btn__reset").addEventListener('click',()=>{
    game.startGame();
})
for(let key=0;key<keys.length;key++){
    keys[key].addEventListener('click',(e)=>{
            game.handleInteraction(keys[key])
    })
}

