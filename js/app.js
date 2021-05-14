const keys = document.querySelectorAll('.key');
document.getElementById("btn__reset").addEventListener('click',()=>{
    const game = new Game();

    game.startGame();
    for(let key=0;key<keys.length;key++){
        keys[key].addEventListener('click',(e)=>{
                game.handleInteraction(keys[key])
        })
    }
})

