import { DinoIpsum } from './../js/dino-ipsum.js';

describe("DinoIpsum", function(){
  let dinoIpsum;

  beforeEach(function(){
    dinoIpsum = new DinoIpsum();
  });

  it("should return an array", function(){
    expect(dinoIpsum.dinoWords instanceof Array).toEqual(true)
  });

  it("should insert english words into paragraph", function(){
    let paragraph = "Hello my name is Megan.";
    let words = dinoIpsum.wordInsert(paragraph).split(" ");
    expect(words.length).toEqual(6)
  });

  it("should insert english words into paragraph", function(){
    let paragraph = "Hello my name is Megan Atlasaurus Morosaurus Yuanmousaurus Scansoriopteryx Mojoceratops Unquillosaurus.";
    expect(dinoIpsum.punctuationInsert(paragraph)).toEqual(6)
  });
});
