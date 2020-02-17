## Past Assignments

## Week 3

On mobile, to best utilize space, a question's description is shown in a modal that is triggered by clicking an info icon.

You can see the icon here: https://projects.invisionapp.com/share/HDFTUIH7TVG#/screens/279091047

https://projects.invisionapp.com/share/HDFTUIH7TVG#/screens/279072924

Whenever the modal is open, there should be a light gray overlay. If the user taps somewhere not on the modal, it should close. Scrolling should be locked when the modal is open and enabled when the modal is closed.

Note: you may need to source the icon from somewhere like icomoon. Extra credit if you identify any other elements that should be converted into icons.


## Week 2

## Jira

You'll notice that each time you click on the submit button, it takes about 1.5 seconds for the following question to load. User should see a spinning loader icon until the promise sends its response.


## Week 1

## Jira 1:

We need the question area to be mobile friendly. Currently the answers are somewhat responsive however they need to be set for the following screen sizes:

greater than 500px - all images should sit in a single row


less than 500px - images should sit in a 2x2 grid, submit button should be full width (see mockup)
https://projects.invisionapp.com/share/HDFTUIH7TVG#/screens/279091047


## Jira 2:

Each question is part of a series of questions. The JSON contains a question id (the index of the question its series), as well as a totalQuestions property, which is an integer representing the total number of questions.

Create a progress bar showing the user where they are in the series of questions. Ie if there are 4 questions in a series and the user is on question  2, the progress bar should be 50% covered.

The progress bar should be animated each time the user advances to the next question.

https://projects.invisionapp.com/share/HDFTUIH7TVG#/screens/279091047
