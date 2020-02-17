# Code Tyke

Code Tyke is a language learning style app geared to 7-11 year olds who want to
learn about coding and computer science. In our classes we choose 1-2 features
each week and code them independently. In class we discuss any challenges we had
and conduct code reviews.

## Steps to participate

Fork the repository and follow the assignment below.

To the best of your ability, implement the change described below.

Don't forget to create a pull request.

## To run the app

### To start the react frontend server:
```
cd codeTykeReact
npm install
npm start
```
### To start the node backend server:
```
cd codeTykeNode
npm install
npm start
```

## This Week's Jira

This week we're tackling functionality of our multiple choice component. We want to handle all states in the life-cycle of this component initial load, ready to submit answer, incorrect answer and reset, correct answer and move to next question. 

Each condition has mobile and desktop designs. 

## On page load: 

Mobile design: https://projects.invisionapp.com/share/HDFTUIH7TVG#/screens/279072923
Desktop design: https://projects.invisionapp.com/share/2KFKXD5BXZU#/screens/276268031
  
- Submit button should be inactive. User clicking submit should have no response (later we'll implement a toast). 

- When user clicks on an answer card, the color should toggle between inactive (white) and active (blue). 

Mobile design: https://projects.invisionapp.com/share/HDFTUIH7TVG#/screens/279072922
Desktop design: https://projects.invisionapp.com/share/2KFKXD5BXZU#/screens/276268032

- Whenever one or more answer cards are selected, button should become active and turn green. 

- If user unselects all answers, button should return to inactive. 

## Upon submitting the answer:

-- Make use of the 'checkAnswer' function, passing in <questionId> and <checkboxStatus>
  
The backend will return a JSON response with :
```
{result: <boolean>}
```
## A correct answer should:

- Change text on submit button to 'Next'

- Show check icon and 'Correct' Text above button 

Mobile design: https://projects.invisionapp.com/share/HDFTUIH7TVG#/screens/279072919
Desktop design: https://projects.invisionapp.com/share/2KFKXD5BXZU#/screens/276268035

## An incorrect answer should: 

- Turn all submitted answers red for 1 second then fade back to inactive and uncheck all selections

- Show inactive submit button

- Show 'x' icon and text "Incorrect"

Mobile design: https://projects.invisionapp.com/share/HDFTUIH7TVG#/screens/279072921
Desktop design: https://projects.invisionapp.com/share/2KFKXD5BXZU#/screens/276268033

After Correct Answer:

- Clicking on "next" takes user to a question with an id that is found at "/problems/" + nextQuestionId
