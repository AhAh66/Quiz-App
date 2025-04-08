let questions = [
    {
        topic: "Computer Components",
        question: "Which part of the computer is considered the 'brain'?",
        possibleAnswer: ["Monitor", "CPU", "Keyboard", "RAM"],
        correctAnswer: "CPU"
    },
    {
        topic: "Storage Devices",
        question: "Which of the following is the fastest type of storage?",
        possibleAnswer: ["HDD", "SSD", "USB Flash Drive", "CD-ROM"],
        correctAnswer: "SSD"
    },
    {
        topic: "Internet & Web",
        question: "What does 'HTTP' stand for?",
        possibleAnswer: [
            "HyperText Transfer Protocol",
            "High Tech Text Processing",
            "Hyperlink Transmission Protocol",
            "Home Text Transfer Protocol"
        ],
        correctAnswer: "HyperText Transfer Protocol"
    },
    {
        topic: "Programming Languages",
        question: "Which programming language is mainly used for web development?",
        possibleAnswer: ["Python", "Java", "C++", "JavaScript"],
        correctAnswer: "JavaScript"
    }
    ,
    {
        topic: "History of Computers",
        question: "What was the first commercially available personal computer?",
        possibleAnswer: ["Apple I", "IBM PC", "Commodore 64", "Altair 8800"],
        correctAnswer: "Altair 8800"
    },
    {
        topic: "Cybersecurity",
        question: "What type of malware locks a user’s files and demands payment?",
        possibleAnswer: ["Trojan", "Worm", "Ransomware", "Spyware"],
        correctAnswer: "Ransomware"
    },
    {
        topic: "Operating Systems",
        question: "Which company developed the Windows operating system?",
        possibleAnswer: ["Apple", "Microsoft", "IBM", "Google"],
        correctAnswer: "Microsoft"
    },
    {
        topic: "Networking",
        question: "What is the standard protocol used for sending emails?",
        possibleAnswer: ["HTTP", "SMTP", "FTP", "TCP"],
        correctAnswer: "SMTP"
    },
    {
        topic: "Fun Fact",
        question: "Which tech company started in a garage?",
        possibleAnswer: ["Google", "Apple", "Amazon", "Facebook"],
        correctAnswer: "Apple"
    }
];
const container=document.querySelector(".container")
const progress=document.getElementById("prograss"); //level
const questionContainer=document.getElementById("questionContainer"); //topic /question
const answerContainer=document.getElementById("answerContainer"); //all possible
let questionsNumber=document.querySelector(".questionNumber")

let currentIndex=0;
let rightAnser=0;
let wrongAnswer=0;



function handleQuestion(index){
    //make programss
questionsNumber.innerHTML=`${currentIndex} of ${questions.length}`
progress.innerHTML='';
 // the question level
questions.forEach(question=>{
    progress.innerHTML+=`<span></span>`;
})

//update prograss
let spans=document.querySelectorAll("span");
for(let i=0;i<=index;i++){
    spans[i].classList.add("seen")
}

// Questions 
questionContainer.innerHTML=
`<h5>${questions[index].topic}</h5>

<p>${questions[index].question}</p>`


//Answer
answerContainer.innerHTML='';
questions[index].possibleAnswer.forEach(answer=>{
    answerContainer.innerHTML+=`<button>${answer}</button>`
})

let answers=document.querySelectorAll("button");
answers.forEach((answer)=>{
    answer.addEventListener("click",(e)=>{
        answers.forEach(btn=>btn.disabled=true)
        if(e.target.textContent === questions[index].correctAnswer){
            console.log("corect");
            e.target.classList.add("right");
            rightAnser++;

        }
        else{
            e.target.classList.add("wrong");
            console.log("wrong"); 
            wrongAnswer++;
        }
        
        // update and go to next question
        setTimeout(()=>{
            if(currentIndex=== questions.length-1){
                answerContainer.innerHTML='';
                questionContainer.innerHTML=''
                questionsNumber.innerHTML=''
                let funnymessage=funnyCommuint(rightAnser,questions.length)
        //result section
                container.innerHTML = `

    <div class="result-container">
        <h2>Quiz Completed! 🎉</h2>
        <p class="score">Right Answers: ${rightAnser}</p>
        <p>Wrong Answers: ${wrongAnswer}</p>
         <p>${funnymessage}</p>
        <button class="btn" onclick="startQuiz()">Try Again</button>
    </div>
`;
            }
            else{
                currentIndex++;
            }
            handleQuestion(currentIndex);
          
        },700) 
    })
}

);

};

//funny commuint in result
function funnyCommuint(score,total){
    let percentage =(score/total) *100;

    switch(true) {
        case (percentage === 100):
            return ` You are Genius! 🧠💥`;
        case (percentage >= 80):
            return "Excellent! 💻✨";
        case (percentage >= 60):
            return `Needs improvement... maybe it's time to Google a bit more? 🤔🔍`;
        case (percentage >= 40):
            return `Not bad! A little more practice and you'll be a pro!💡🔥` ;
        default:
            return "Oops! Try again! ";
    }
}
     currentIndex = 0;
    handleQuestion(currentIndex);



    function startQuiz() {
        location.reload();
        handleQuestion(currentIndex);
    }
