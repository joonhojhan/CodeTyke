const express = require('express');
var cors = require('cors')
const app = express();
const port = 8080;

app.use(cors())

let questionArr = [
  {
    id:0,
    title:"Select All the Strings",
    additionalInfo:'Click on the boxes that are strings. Remember that the easiest way to recognize a string is to check if it is surrounded by " or \'.',
    totalQuestions:4,
    nextQuestionId:1,
    possibleAnswers: [
      {
        "image": "https://i.ibb.co/M6bQZ4R/bool.png",
        "text": "true",
        "type": "boolean",
        "isCorrect": false
      },
      {
        "image": "https://i.ibb.co/9ncNJF1/number.png",
        "text": "43",
        "type": "number",
        "isCorrect": false
      },
      {
        "image": "https://i.ibb.co/6wr1QbV/girls.png",
        "text": "'4 Girls'",
        "type": "string",
        "isCorrect": true
      },
      {
        "image": "https://i.ibb.co/6BsyfRD/bus.png",
        "text": "School Bus",
        "type": "string",
        "isCorrect": true
      }
    ]
  },
  {
    id:1,
    title:"Find the Integers",
    additionalInfo:'Integers are whole numbers. This means it is one number that doesn\'t include decimals',
    totalQuestions:4,
    nextQuestionId:2,
    possibleAnswers: [
      {
        "image": "https://i.ibb.co/M6bQZ4R/bool.png",
        "text": "142",
        "type": "number",
        "isCorrect": true
      },
      {
        "image": "https://i.ibb.co/9ncNJF1/number.png",
        "text": "Thirteen",
        "type": "string",
        "isCorrect": false
      },
      {
        "image": "https://i.ibb.co/6wr1QbV/girls.png",
        "text": "4 + 2",
        "type": "expression",
        "isCorrect": false
      },
      {
        "image": "https://i.ibb.co/6BsyfRD/bus.png",
        "text": "6",
        "type": "number",
        "isCorrect": true
      }
    ]
  },
  {
    id:2,
    title:"Which of these are booleans?",
    additionalInfo:'Boolean are named after George Boole. Simply put, a boolean is a true or false value.',
    totalQuestions:4,
    nextQuestionId: 3,
    possibleAnswers: [
      {
        "image": "https://i.ibb.co/M6bQZ4R/bool.png",
        "text": "true",
        "type": "boolean",
        "isCorrect": true
      },
      {
        "image": "https://i.ibb.co/9ncNJF1/number.png",
        "text": "This is true.",
        "type": "string",
        "isCorrect": false
      },
      {
        "image": "https://i.ibb.co/6wr1QbV/girls.png",
        "text": "4,453",
        "type": "number",
        "isCorrect": false
      },
      {
        "image": "https://i.ibb.co/6BsyfRD/bus.png",
        "text": "false",
        "type": "boolean",
        "isCorrect": true
      }
    ]
  },
  {
    id:3,
    title:"Not to string you along but...let's practice again with strings!",
    additionalInfo:'Remeber strings are letters and symbols surrounded by single or double quotations.',
    totalQuestions:4,
    nextQuestionId: 0,
    possibleAnswers: [
      {
        "image": "https://i.ibb.co/M6bQZ4R/bool.png",
        "text": "It's show time!",
        "type": "string",
        "isCorrect": true
      },
      {
        "image": "https://i.ibb.co/9ncNJF1/number.png",
        "text": "pop@open.com",
        "type": "string",
        "isCorrect": true
      },
      {
        "image": "https://i.ibb.co/6wr1QbV/girls.png",
        "text": "45",
        "type": "number",
        "isCorrect": false
      },
      {
        "image": "https://i.ibb.co/6BsyfRD/bus.png",
        "text": "false",
        "type": "boolean",
        "isCorrect": false
      }
    ]
  }
]

app.get('/problems/:id', (req, res) => {
  let id = req.params.id;
  res.json(questionArr[id]);
})

app.get('/checkanswer/:id', (req, res) => {
  let id = req.params.id;
  let answers = req.query.answers.split(",");
  let solutionArr = questionArr[id].possibleAnswers.map((answer)=>answer.isCorrect.toString());

  for(let i in answers){
    if(answers[i] !== solutionArr[i]){
      res.json({result:false});
      return;
    }
  }

  res.json({result:true});
  return;
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
