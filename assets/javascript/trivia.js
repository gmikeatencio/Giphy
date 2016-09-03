var questions = [{
      "questionText" : "Hey, here is the question", 
      "answers": [{      
      "answer": {
          "text": "correct answer",
          "correct": true,
              },
      "answer": {
          "text": "new one",
          "correct": false,
              }
      }]       
      
  }, {
     "questionText" : "Hey, here is another question",

     "answers": [{
     "answer": {
          "text": "correct answer 2",
          "correct": true,
              },
      "answer": {
          "text": "new one 2",
          "correct": false,
              }
      }]           
  }]
var correctCount = 0;
var wrongCount = 0;
var q=0;

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
  $('.quest').append("<p>" + questions[q].questionText + "</p>");

for (var i in questions[q]) {
   console.log(questions[q]);
}

/*
  for (i=0; i < questions[q].answers.length; i++){
  $('.quest').append("<div class='answer'><p>" + questions[q].answers[i].answer.text + "</p></div>");
  console.log(questions[q].answers.length);
  console.log(questions[q].answers);
  };
  */
  questTimer();
  q++;
  $('.answer').on('click', function(){
    console.log("hey there");
    console.log(this);
  });
  });