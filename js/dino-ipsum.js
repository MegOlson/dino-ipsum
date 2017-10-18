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
    let words = paragraph.split(" ");
    for (let i = 0; i < words.length; i ++) {
      if (i % 10 === 0 && i !== 0) {
        words.splice(i, 0, ".");
      }
    }
    let finalParagraph = words.join(" ");
    return finalParagraph;
  }

}
