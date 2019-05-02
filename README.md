# friend-finder

## This application Allows a user to enter there name and then select values between 1 and 5 for 10 different questions

### This application demonstrates the ability to post data from a web site to a server where it is processed and returns a result back to the client side

#### Login:

    1. The user starts at the home page where they click a button to go to the survey page, this is achieved by node and express handling the route requests

    2. The user enters their name and selects answers from the list of ten questions

    3. The application uses an ajax post request to send the entered data to the server

    4. The server takes the body of the post request parses it and then uses an algorithm to determine which friend from the array of friend objects has less of a differential than the others

    5. The server then returns the one friend object to the browser where it is parsed and sent to a modal window to display the name of the friend that is most compatible.

    6. The user also has at all time the ability to access the full list of friends on the server side by clicking the link at the footer of either the home or survey page
