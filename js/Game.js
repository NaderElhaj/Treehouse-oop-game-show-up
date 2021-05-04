const overlay = document.getElementById('overlay');
const btn = document.getElementById("btn__reset")
const tries = document.querySelectorAll('.tries')

class Game{
    constructor(phrases){
        this.missed = 0 ; 
        this.phrases = [new Phrase("Hello"),new Phrase("Hello"),new Phrase("Hello"),new Phrase("Hello"),new Phrase("Hello")];
        this.activePhrase = null ; 
    }
 
    removeLife(){
        console.log(tries)
        tries[this.missed].firstChild.src ="./images/lostHeart.png"
        this.missed+=1 ;
        if (this.missed==5){
            this.gameOver()
        }
    }
    checkForWin(){
     let check = true
        for (let i=0;i<this.activePhrase.phrase.length ; i++){
            if(document.querySelectorAll('li')[i].className !='show'){
                check =  false
            }
        }
        return check
        
    }
    gameOver(){
        overlay.style.display = "block"

        
        if (this.checkForWin()){
            btn.textContent = "win"
            btn.className="win"
        }else{
            btn.textContent = "loss"
            btn.className="lose"
        }
        console.log("hii")
        for (let i=0; i<this.activePhrase.phrase.length;i++){
            console.log(ul)
            console.log("hii")
            ul.removeChild(ul.firstChild) 
            tries[i].firstChild.src ="./images/liveHeart.png"
        }
        for(let i=0;i<keys.length;i++){
            keys.forEach(element => {
                element.className = "key"
                element.disabled=false
            });
        }
        this.missed = 0
    }
    
    getRandomPhrase(){
        console.log(this.phrases)
        return this.phrases[Math.floor(Math.random() * (this.phrases.length))]
    }
    startGame(){
        overlay.style.display = "none"
        this.activePhrase = this.getRandomPhrase() ; 
        console.log(this.activePhrase)
        this.activePhrase.addPhraseToDisplay();
    }
    handleInteraction(letter){
        letter.disabled = true;
        const phrase = this.getRandomPhrase();
            if (phrase.checkLetter(letter.textContent)){
                letter.classList.add("chosen") ;
                phrase.showMatchedLetter(letter.textContent);
                if(this.checkForWin()){
                    this.gameOver();
                 
                }
            }else{
                letter.classList.add("wrong") ;
                this.removeLife();

            }
        }

}