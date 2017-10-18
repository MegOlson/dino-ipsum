import { DinoIpsum } from './../js/dino-ipsum.js';

$(document).ready(function(){
  let apiOutput = "";
  let dinofy = [];
  $("#generateParagraph").click(function(e){
    e.preventDefault();
    $("input:checkbox[name=dinofy]:checked").each(function(){
        dinofy.push($(this).val());
        console.log(dinofy);
    });
    $.get('http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=3&words=50').then(function(response){
      apiOutput = response[0].join(" ");
      $('.dino-paragraph').text(apiOutput);
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
