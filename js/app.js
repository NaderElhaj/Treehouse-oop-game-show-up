const keys = document.querySelectorAll('.key');
const game = new Game();
document.getElementById("btn__reset").addEventListener('click',()=>{
    game.startGame();
    for(let key=0;key<keys.length;key++){
        keys[key].addEventListener('click',(e)=>{
                game.handleInteraction(keys[key])
        })
    }
})

