var questions = [{
      "questionText" : "Hey, here is the question",        
      "answer1": {
          "text": "correct",
          "correct": true,
              },
      "answer2": {
          "text": "new one",
          "correct": false,
              }
  }, {
      "questionText" : "Hey, here is another question",        
      "answer1": {
          "text": "correct 2",
          "correct": true,
              },
      "answer2": {
          "text": "new one 2",
          "correct": false,
              }
  }]
var correctCount = 0;
var wrongCount = 0;

function questTimer() {
var seconds_left = 10;
var interval = setInterval(function() {
    $('.timer').html(seconds_left);
    seconds_left --
    if (seconds_left <= 0)
    {     $('.timer').html("Time is up!");
       clearInterval(interval);
    }
}, 1000);
}


$('#startButt').on('click', function(){
	$('.start').empty();
	q=0;
	$('.quest').html("<p>" + questions[q].questionText + "</p>");
	questTimer();
	$('.answ').append("<div class='ans'> <p>" + questions[q].answer1.text + "</p></div>");
	$('.answ').append("<div class='ans'> <p>" + questions[q].answer2.text + "</p></div>");
});

//$('.answ').on('click', function(){

	//if (questions[q])

