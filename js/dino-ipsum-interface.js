import { DinoIpsum } from './../js/dino-ipsum.js';

$(document).ready(function(){
  let dinoIpsum = new DinoIpsum();
  let apiOutput = "";
  let dinofy = [];
  let start = "";
  $("#generateParagraph").click(function(e){
    e.preventDefault();
    $("input:checkbox[name=dinofy]:checked").each(function(){
        dinofy.push($(this).val());
    });
    $.get('http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=3&words=50').then(function(response){
      apiOutput = response[2];
      if (dinofy.includes("title")) {
        let title = apiOutput.slice(0, 5);
        title = title.join(" ");
        $('.dinoTitle').text(title);
      }

      apiOutput = response[0].join(" ");
      if (dinofy.includes("font")) {
        $('.dino-paragraph, .dinoTitle').addClass('dino-font');
        $('.dino-paragraph').text(dinoIpsum.wordInsert(apiOutput));
      }

      if (dinofy.includes("start")) {
        start = "Dino ipsum saurus ";
        $('.dino-paragraph').text(start + dinoIpsum.wordInsert(apiOutput));
      }else{
        $('.dino-paragraph').text(dinoIpsum.wordInsert(apiOutput));
      }

    }).fail(function(error){
      $('.errors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
    });

  });


  $("#generateWord").click(function(e){
    e.preventDefault();
    $.get('http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=3&words=50').then(function(response){
      apiOutput = response[0][0];
      $('.dino-word').text(apiOutput);
    }).fail(function(error){
      $('.errors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
    });
  });
});
