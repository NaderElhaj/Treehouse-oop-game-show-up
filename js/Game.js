const overlay = document.getElementById("overlay");
const btn = document.getElementById("btn__reset");
const tries = document.querySelectorAll(".tries");
let keyCodes = {
  65: "a",
  66: "b",
  67: "c",
  68: "d",
  69: "e",
  70: "f",
  71: "g",
  72: "h",
  73: "i",
  74: "j",
  75: "k",
  76: "l",
  77: "m",
  78: "n",
  79: "o",
  80: "p",
  81: "q",
  82: "r",
  83: "s",
  84: "t",
  85: "u",
  86: "v",
  87: "w",
  88: "x",
  89: "y",
  90: "z",
};
class Game {
  constructor(phrases) {
    this.missed = 0;
    this.phrases = [
      new Phrase("Hello"),
      new Phrase("Moukim"),
      new Phrase("Nader"),
      new Phrase("AZEEZA"),
      new Phrase("Zabeb"),
    ];
    this.activePhrase = null;
  }
  gameOver(gameWon) {
		let startbtn = document.querySelector("#overlay");
		const resetBtn = document.getElementById("btn__reset");
		let title = document.querySelector('.title');
		if (gameWon == "lose") {
			startbtn.style.display = 'block';
            startbtn.classList.toggle("lose");
            title.textContent = "You Lost :(";
            title.classList.add('vibrate-1')
            resetBtn.textContent = "Repeat :D ";
            resetBtn.addEventListener('click', () => {
				window.location.reload();
			})
		} else if (this.checkForWin()) {
			startbtn.style.display = 'block';
			startbtn.classList.toggle("win");
			resetBtn.textContent = "Repeat :D ";
			resetBtn.style.color = "black";
			resetBtn.style.fontWeight = "bold";
			title.textContent = "You Won the Game !";
			title.classList.add('kenburns-top');
			resetBtn.addEventListener('click', () => {
				window.location.reload();
			})
		}
	}


	removeLife() {
		let heart = document.querySelectorAll(".tries img");
		heart[0].src = "images/lostHeart.png";
		heart[0].parentNode.classList.remove("tries");
		this.missed++;
		if (this.missed == 5) {
			this.gameOver("lose");
		}
	}
  checkForWin() {
    let check = true;
    for (let i = 0; i < this.activePhrase.phrase.length; i++) {
      if (document.querySelectorAll("li")[i].className != "show") {
        check = false;
      }
    }
    return check;
  }


  getRandomPhrase() {
    return this.phrases[Math.floor(Math.random() * this.phrases.length)];
  }
  startGame() {
    overlay.style.display = "none";
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }
  handleInteraction(letter) {
    letter.disabled = true;
    const phrase = this.activePhrase;
    if (phrase.checkLetter(letter.textContent)) {
      letter.classList.add("chosen");
      phrase.showMatchedLetter(letter.textContent);
      if (this.checkForWin()) {
        this.gameOver();
      }
    } else {
      letter.classList.add("wrong");
      this.removeLife();
    }
  }

}
