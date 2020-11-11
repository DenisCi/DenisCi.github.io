let response = document.querySelector("#writing");

let myButton = document.querySelector("#myButton");

let zoom = document.querySelector("#image");

let i = 0;

zoom.hidden = true;

myButton.addEventListener('click', increment);

function increment(){
    myButton.textContent = "Continue";

    i++;

    if (i == 1){
        writing.textContent = "In 'The Medium is the Message,' McLuhan argues that the medium through which information is shared is just as important (or even more important than) the message itself. McLuhan presents the idea that technology changes the way we act and relate to each other. A relevant example is us here in class right now, talking over zoom on our laptops, which allows us to work from home but with way less in-person interaction. This changes the dynamics and 'feel' of the classroom environment quite a lot. Zoom allows us to be anywhere and be doing pretty much anything (as long as we have wifi) and still be in class, but you can choose to hide this information from your classmates by not turning on your camera and remaining muted. While a positive impact of this is that your background noise won't interfere with the class, it also has the negative impact of having the class be unable to see you or interact with you in a personal way. Another ability we have on zoom is private messaging, which, while possible, is harder to get away with in an in-person class. So as McLuhan said, these technologies affect how we behave. They create the rules within which we operate, allowing some methods of communication while stopping or hindering others.";
        document.body.style.backgroundColor = "#FE9691";
        zoom.hidden = false;
    }
    else if (i == 2){
        zoom.hidden = true;
        writing.textContent = "Another thing that should be considered is the context and intentions of the information being shared. Everyone has a bias, and it's easier than ever to make yours visible. This is especially important to consider when looking at news organizations. The way news is presented (the organization/channel in charge of making it, the script, and even the identity of the people who present it) can have a huge impact on what people think of current events. This is inherent in the medium. McLuhan writes that 'the living room has become a voting booth. Participation via television in Freedom Marches, in war, revolution, pollution, and other events is changing everything.' This statement is even more true today, when our phones, which are with us 24/7, have all the capabilities of the Television and way more beyond that, putting more news and information than ever at every single person's fingertips. While we can choose to avoid political news, we can't avoid the impact it has on our lives later on, say, by influencing the result of an election.";
        document.body.style.backgroundColor = "#93FE91";
    }
    else if (i == 3){
        writing.textContent = "McLuhan's insight into how the mass spread of information through different mediums affects our lives was incredibly impressive. Since the paper was written in 1967, McLuhan must have been able to see the trends in many aspects of society in order to so accurately explain (and predict) the effects of technology and different mediums. A great example of this is when he writes that 'the student finds no means of involvement for himself and cannot discover how the educational scheme relates to his mythic world of electronically processed data and experience that his clear and direct responses report.' Back in 1967, this statement made sense, but people did dispute it. Now, pretty much everyone accepts that what they learned in elementary school, middle school, and sometimes even high school, has no effect on your life after that time has passed. Of course there are exceptions to this, (eg; a school science experiment inspiring you to go into science or an english class inspiring you to be a writer) but for the most part, the actual content that you learned in most of your classes will not be useful for your job or personal life. ";
        document.body.style.backgroundColor = "#91A2FE";
    }
   
    else if (i == 4){
        myButton.hidden = true;
        writing.textContent = "Thank you for reading. Have a nice day!";
        document.body.style.backgroundColor = "#FFFF70";
    }
}