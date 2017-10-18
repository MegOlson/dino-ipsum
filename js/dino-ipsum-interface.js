import { DinoIpsum } from './../js/dino-ipsum.js';

$(document).ready(function(){
  $("#generate").click(function(e){
    e.preventDefault();
    var api_word = "";
    var getDinos = $.get('http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=3&words=15').then(function(response){
      $('.dino-ipsum').text(response[0]);
    }).fail(function(error){
      $('.errors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
    });
  });
});
