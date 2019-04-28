# FriendFinder

Friend Finder implements friend matching based on the user's responses to a ten question survey. 
The user responds to questions with values from 1 (Strongly Disagree) to 5 (Strongly Agree). 
When the survey is submitted, an existing user record closest to the current user's responses is found and returned. 
The closest set of user responses is defined as the set with the lowest absolute difference for all ten questions combined.
<BR><BR>
Friend Finder application is meant to simulate a simple dating app. 
The application is implemented using a Node.js and Express server on the back end and the Materialize CSS framework on the front end.
<BR><BR>

Friend Finder is deployed to Heroku. 
Click <a href="https://friendfinder-yvette-v1.herokuapp.com/">here</a> for the demo.
<BR><BR>

1. Click the button to start the survey.
<img src="/app/screen1.png" width="850">

2. Complete the survey.
<img src="/app/screen2.png" width="850">
 
3. Get your results.
<img src="/app/screen3.png" width="850">
