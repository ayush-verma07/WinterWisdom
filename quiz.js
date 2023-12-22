/* Made by Kevin*/
/* Helped by Naythan w/ questions*/

const questions = [
    {
        question: "What date do people typically celebrate Christmas in the United States ?",
        optionA: "December 25",
        optionB: "January 1",
        optionC: "November 25",
        optionD: "December 31",
        correctOption: "optionA"
    },

    {
        question: "Which of the following is an iconic Christmas movie ?",
        optionA: "Mission Impossible: Ghost Protocol",
        optionB: "Oppenheimer",
        optionC: "Titanic",
        optionD: "Die Hard",
        correctOption: "optionD"
    },

    {
        question: "In the movie Home Alone, Kevin McCallister is left by himself after his family forgets to bring him on vacation. Where are they planning to vacation ?",
        optionA: "New York",
        optionB: "Shanghai",
        optionC: "Moscow",
        optionD: "Paris",
        correctOption: "optionD"
    },

    {
        question: "In the Winter of 1914, many soldiers (primarily British and German) along the Western front temporarily stopped hostilites to exchange gifts and play games. What game were they documented as playing ?",
        optionA: "Golf",
        optionB: "Soccer",
        optionC: "American Football",
        optionD: "Badminton",
        correctOption: "optionB"
    },

    {
        question: "What is the name of the Grinch's dog in How the Grinch Stole Christmas ?",
        optionA: "Max",
        optionB: "John",
        optionC: "Duke",
        optionD: "Sam",
        correctOption: "optionA"
    },

    {
        question: "Which countries celebrate Boxing Day following Christmas ?",
        optionA: "Southeast Asia",
        optionB: "North America",
        optionC: "Commonwealth Countries",
        optionD: "South America",
        correctOption: "optionC"
    },

    {
        question: "What is Christmas celebrating ?",
        optionA: "Santa Claus and gift giving",
        optionB: "Fried Chicken",
        optionC: "The Birth of Jesus",
        optionD: "The Pilgrims",
        correctOption: "optionC"
    },

    {
        question: "What portion of all retail sales in the US come from the holiday season ?",
        optionA: "1/6",
        optionB: "1/4",
        optionC: "1/12",
        optionD: "1/2",
        correctOption: "optionA"
    },

    {
        question: "How many countries in the world celebrate Christmas ?",
        optionA: "73",
        optionB: "34",
        optionC: "190",
        optionD: "161",
        correctOption: "optionD"
    },

    {
        question: "Which soda company is known for using Santa in their advertising ?",
        optionA: "Pepsi",
        optionB: "Dr.Pepper",
        optionC: "Mountain Dew",
        optionD: "Coca-Cola",
        correctOption: "optionD"
    },

    {
        question: "Eastern Orthodoxy churches use the Julain calendar rather than the Gregorian calendar, and as such they celebrate Christmas on a different date. What date do they typically celebrate Cristmas ?",
        optionA: "December 22nd",
        optionB: "January 7th",
        optionC: "December 5th",
        optionD: "February 13th",
        correctOption: "optionB"
    },

    {
        question: "Early American Puritans did not celebrate Christmas because they saw it as a Catholic holiday. When was Christmas officially recognized in the US as an official holiday ?",
        optionA: "1776",
        optionB: "1652",
        optionC: "1870",
        optionD: "1903",
        correctOption: "optionC"
    },

    {
        question: "The English name of Santa Claus is derived from Sinterklaas. What language does Sinterklass come from ?",
        optionA: "German",
        optionB: "Finnish",
        optionC: "Portuguese",
        optionD: "Dutch",
        correctOption: "optionD"
    },

    {
        question: "Music is often associated with the holiday season. Which of the following songs is the most popular Christmas music ?",
        optionA: '"Jingle Bell Rock"',
        optionB: '"All I Want for Christmas is You"',
        optionC: '"Sleigh Ride"',
        optionD: '"Rudolph the Red-Nosed Reindeer"',
        correctOption: "optionB"
    },

    {
        question: "One of the most important parts of decorating for Christmas is setting up the Christmas tree, a tradition that dates back even before Christianity. However, lights were not added to the tree until much later. Which of the following historical figures was alledged to start the tradition ?",
        optionA: "Teddy Roosevelt",
        optionB: "Peter the Great",
        optionC: "Martin Luther",
        optionD: "King James I",
        correctOption: "optionC"
    },

]


let shuffledQuestions = [] 

function handleQuestions() { 
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0 

function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] 
    const currentQuestionAnswer = currentQuestion.correctOption 
    const options = document.getElementsByName("option"); 
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            correctOption = option.labels[0].id
        }
    })

    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ 
            indexNumber++ 
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ 
            indexNumber++
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



function handleNextQuestion() {
    checkForAnswer() 
    unCheckRadioButtons()
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}


function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}


function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}


function handleEndGame() {
    let remark = null
    let remarkColor = null

    if (playerScore <= 3) {
        remark = "Get better, at least you have the holidays to practice because no one invited you to a party."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "I'll take average."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}