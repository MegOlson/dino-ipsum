export class DinoIpsum {
  constructor() {
    this.dinoWords = ["cretaceous period", "teeth", "spit", "scratch", "fly", "egg", "fossils", "predator", "comit", "prey", "tar pit", "carnage", "roar", "stampede", "rex", "smithsonian", "scales", "amphibious", "hunt"];
  }

  wordInsert(paragraph) {
    let words = paragraph.split(" ");
    let randomWord = this.dinoWords[Math.floor(Math.random() * this.dinoWords.length)];
    words.splice(3, 0, randomWord);
    let newParagraph = words.join(" ");
    return newParagraph;
  }

  punctuationInsert(paragraph) {
    let array = [5, 8, 10];
    let words = paragraph.split(" ");
    let 
  }

}
