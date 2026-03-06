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

{
q:"What is the study of plants called?",
options:["Botany","Zoology","Chemistry","Physics"],
answer:"Botany"
},

{
q:"What is the study of animals called?",
options:["Botany","Zoology","Astronomy","Geology"],
answer:"Zoology"
},

{
q:"Which process helps plants make food?",
options:["Respiration","Photosynthesis","Digestion","Absorption"],
answer:"Photosynthesis"
},

{
q:"Which part of plant absorbs water?",
options:["Leaf","Stem","Root","Flower"],
answer:"Root"
},

{
q:"Animals with backbone are called?",
options:["Invertebrates","Vertebrates","Reptiles","Mammals"],
answer:"Vertebrates"
},

{
q:"Which science studies matter?",
options:["Chemistry","Biology","Botany","Zoology"],
answer:"Chemistry"
},

{
q:"Smallest unit of matter?",
options:["Cell","Atom","Molecule","Electron"],
answer:"Atom"
},

{
q:"Animals without backbone are called?",
options:["Vertebrates","Invertebrates","Mammals","Birds"],
answer:"Invertebrates"
}

]


for(let i=0;i<42;i++){

questions.push({

q:"General science practice question "+(i+9),

options:["Option A","Option B","Option C","Option D"],

answer:"Option A"

})

}



let quizHTML=""

questions.forEach((q,index)=>{

quizHTML+=`<div class="quizQ">

<p>${index+1}. ${q.q}</p>

`

q.options.forEach(opt=>{

quizHTML+=`

<label>

<input type="radio" name="q${index}" value="${opt}">

${opt}

</label><br>

`

})

quizHTML+=`</div><br>`

})

document.getElementById("quizContainer").innerHTML=quizHTML



function submitQuiz(){

let score=0

questions.forEach((q,index)=>{

let selected=document.querySelector('input[name="q'+index+'"]:checked')

if(selected && selected.value==q.answer){

score++

}

})

document.getElementById("score").innerText="Your Score: "+score+" / "+questions.length

  }
