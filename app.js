
let submitbutton = document.getElementById("button");
submitbutton.addEventListener('click',firstQuestion);
let headertext = document.getElementById("headertext");
let question1 = document.getElementById("question1");
let question2 = document.getElementById("question2");
let question3 = document.getElementById("question3");
let questionCounter = document.getElementById("questionCounter");
let errorMessage = document.getElementById("error");
let showAnswers = document.getElementById("showAnswers");

let counter = 0;
let points = 0;
let correctAnswer = "";


/* QUIZ FRÅGOR*/
let myQuestions = [
{
 question:"Vad heter huvudstaden i Sverige?",
 answers: {
     a:"Göteborg",
     b:"Malmö",
     c:"Stockholm"
 },
 correctAnswer: "c",
},

{
 question:"Vad heter huvudstaden i Italien?",
 answers: {
    a:"Milano",
    b:"Rom",
    c:"Turin"},
correctAnswer: "b"
 },
 {
  question:"Vad heter huvudstaden i Spanien?",
  answers: {
     a:"Barcelona",
     b:"Madrid",
     c:"Valencia"},
 correctAnswer: "b"
  },
  {
    question:"Vad heter huvudstaden i Tyskland?",
    answers: {
       a:"Berlin",
       b:"Hamburg",
       c:"Munchen"},
   correctAnswer: "a"
    },
    {
      question:"Vad heter huvudstaden i Slovakien?",
      answers: {
         a:"Belgrad",
         b:"Bratislava",
         c:"Prag"},
     correctAnswer: "b"
      },
      {
        question:"Vad heter huvudstaden i Vitryssland?",
        answers: {
           a:"Belgrad",
           b:"Kiev",
           c:"Minsk"},
       correctAnswer: "c"
        },
        {
          question:"Vad heter huvudstaden i Makedonien?",
          answers: {
             a:"Chisinau",
             b:"Skopje",
             c:"Podogorica"},
         correctAnswer: "b"
          },
          {
            question:"Vad heter huvudstaden i Estland?",
            answers: {
               a:"Riga",
               b:"Tallin",
               c:"Vilnius"},
           correctAnswer: "b"
            },
            {
              question:"Vad heter huvudstaden i Bulgarien?",
              answers: {
                 a:"Bryssel",
                 b:"Sofia",
                 c:"Zagreb"},
             correctAnswer: "b"
              },
              {
              question:"Vad heter huvudstaden i Polen?",
              answers: {
                 a:"Lissabon",
                 b:"Riga",
                 c:"Warzawa"},
             correctAnswer: "c"
              }          
];

/* QUIZ FUNKTIONER */


function getValue(){             //Hämtar värdet från radioknappen som användaren klickar i och returnerar.
let radios = document.getElementsByName("group1");
  for (let i = 0, length = radios.length; i < length; i++)
   {
     if (radios[i].checked)
     { 
     return radios[i].value;
     }
    }
}


function getQuestion(){    //Hämtar fråga från arrayen.
  questionCounter.innerHTML = "Fråga " + (counter+1) + " av 10"
  submitbutton.innerHTML ="Nästa fråga";
  headertext.innerHTML = myQuestions[counter].question;
  question1.innerHTML ='<input name="group1" type="radio" value="a">' + "a.) " + myQuestions[counter].answers.a;
  question2.innerHTML ='<input name="group1" type="radio" value="b">' + "b.) " +myQuestions[counter].answers.b;
  question3.innerHTML ='<input name="group1" type="radio" value="c">' + "c.) " +myQuestions[counter].answers.c;
  correctAnswer = myQuestions[counter].correctAnswer;
  counter++;
}


function firstQuestion(){   //Startar quizet.
  getQuestion();
  submitbutton.removeEventListener('click',firstQuestion);
  submitbutton.addEventListener('click',nextQuestions);
}

function nextQuestions(){     //Funktion under quizet.
errorMessage.innerHTML = "";
let userChoice = getValue();
if(userChoice == "a" || userChoice == "b" || userChoice == "c"){  //Kollar om radioknapp är vald.
if(userChoice == correctAnswer){
    points ++;
}
if(counter>9){  //Slutresultatet
  counter = 0;
  headertext.innerHTML = "Quizet är slut. Du fick " + points + "/10 rätt.";
  question1.innerHTML = "";
  question2.innerHTML = "";
  question3.innerHTML = "";
  submitbutton.innerHTML = "Börja om";
  questionCounter.innerHTML = "";
  points = 0;
  submitbutton.addEventListener('click',firstQuestion);
  submitbutton.removeEventListener('click',nextQuestions);
}
else{
getQuestion();
}
}
else
errorMessage.innerHTML = "Du måste välja ett svar!";

}



