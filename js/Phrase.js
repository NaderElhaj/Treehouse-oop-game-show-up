const ul = document.querySelector('#phrase ul');

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }
  addPhraseToDisplay() {
    for(let i =0; i<this.phrase.length;i++){
      const letter = this.phrase[i];
      let li= document.createElement("li");
      if(letter==" "){
        li.classList.add("space");
        li.textContent = " ";
        ul.appendChild(li)
      }else{
        li.classList.add("hide")
        li.classList.add("letter")
        li.textContent =letter
        li.classList.add(letter)
        ul.appendChild(li)

      }
    }
  }


  checkLetter(letter) {
    return this.phrase.includes(letter) ? true : false
  }

  showMatchedLetter(t) {
    const letters = document.querySelectorAll("."+t);
    console.log(letters)
    for(let i=0; i<letters.length;i++){
      letters[i].className="show"
    }
  }
}
