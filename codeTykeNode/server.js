const express = require('express');
var cors = require('cors')
const app = express();
const port = 8080;

app.use(cors())

let questionArr = [
  {
    id:1,
    title:"Select All the Strings",
    additionalInfo:'Click on the boxes that are "strings". Remember that the easiest way to recognize a string is to check if it is surrounded by " or \'.',
    totalQuestions:2,
    nextQuestionId:2,
    possibleAnswers: [
      {
        "image": "https://i.ibb.co/M6bQZ4R/bool.png",
        "text": "true",
        "type": "boolean"
      },
      {
        "image": "https://i.ibb.co/9ncNJF1/number.png",
        "text": "43",
        "type": "number"
      },
      {
        "image": "https://i.ibb.co/6wr1QbV/girls.png",
        "text": "4 Girls",
        "type": "string"
      },
      {
        "image": "https://i.ibb.co/6BsyfRD/bus.png",
        "text": "School Bus",
        "type": "string"
      }
    ]
  },
  {
    id:2,
    title:"sdfsdfsdfsdfsd",
    additionalInfo:'sdfsdsdfdsfsdf',
    totalQuestions:2,
    nextQuestionId:3,
    possibleAnswers: [
      {
        "image": "https://i.ibb.co/M6bQZ4R/bool.png",
        "text": "dsfdsf",
        "type": "boolean"
      },
      {
        "image": "https://i.ibb.co/9ncNJF1/number.png",
        "text": "sdfds",
        "type": "number"
      },
      {
        "image": "https://i.ibb.co/6wr1QbV/girls.png",
        "text": "sdfsdfsddsf",
        "type": "string"
      },
      {
        "image": "https://i.ibb.co/6BsyfRD/bus.png",
        "text": "sdfdsfsd",
        "type": "string"
      }
    ]
  }
]

app.get('/problems/:id', (req, res) => {
  let id = req.params.id;
  res.json(questionArr[id-1]);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
