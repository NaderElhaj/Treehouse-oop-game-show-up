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

  removeLife() {
    tries[this.missed].firstChild.src = "./images/lostHeart.png";
    this.missed += 1;
    if (this.missed == 5) {
      this.gameOver();
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
  gameOver() {
    overlay.style.display = "block";

    if (this.checkForWin()) {
      btn.textContent = "win";
      btn.className = "win";
    } else {
      btn.textContent = "loss";
      btn.className = "lose";
    }
    for (let i = 0; i < this.activePhrase.phrase.length; i++) {
      ul.removeChild(ul.firstChild);
      tries[i].firstChild.src = "./images/liveHeart.png";
    }
    for (let i = 0; i < keys.length; i++) {
      keys.forEach((element) => {
        element.className = "key";
        element.disabled = false;
      });
    }
    this.missed = 0;
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
