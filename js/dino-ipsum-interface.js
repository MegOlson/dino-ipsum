import { DinoIpsum } from './../js/dino-ipsum.js';

$(document).ready(function(){
  $("#generate").click(function(e){
    e.preventDefault();
    let apiWord = "";
    let getDinos = $.get('http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=3&words=15').then(function(response){
      apiWord = response[0].join(" ");
      $('.dino-ipsum').text(apiWord);
    }).fail(function(error){
      $('.errors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
    });
  });
});
