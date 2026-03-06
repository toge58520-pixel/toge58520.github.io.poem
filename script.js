function showSection(id){

let sections=document.querySelectorAll(".section")

sections.forEach(sec=>sec.style.display="none")

document.getElementById(id).style.display="block"

}

showSection("home")


function speakText(element){

let text=element.innerText

let speech=new SpeechSynthesisUtterance(text)

speech.lang="en-US"

speechSynthesis.speak(speech)

}


let questions=[

{q:"Plants study is called?",a:"Botany"},
{q:"Animals study is called?",a:"Zoology"},
{q:"Matter study is called?",a:"Chemistry"}

]

for(let i=1;i<=47;i++){

questions.push({q:"Sample science question "+i,a:"A"})

}

let quizHTML=""

questions.forEach((q,index)=>{

quizHTML+=`

<p>${index+1}. ${q.q}</p>

<input type="text" id="q${index}">

`

})

document.getElementById("quizContainer").innerHTML=quizHTML


function submitQuiz(){

let score=0

questions.forEach((q,index)=>{

let ans=document.getElementById("q"+index).value

if(ans.toLowerCase()==q.a.toLowerCase()) score++

})

document.getElementById("score").innerText="Your Score: "+score+" / "+questions.length

  }
