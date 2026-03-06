function showSection(id){

let sections=document.querySelectorAll(".section");

sections.forEach(sec=>sec.style.display="none");

document.getElementById(id).style.display="block";

}

showSection("home");


function speakText(selector){

let text=document.querySelector(selector).innerText;

let speech=new SpeechSynthesisUtterance(text);

speech.lang="en-US";

speechSynthesis.speak(speech);

}


function toggleLanguage(){

alert("Language switch example. Hindi translation can be added later.");

}


let questions=[

{q:"Study of plants is called?",a:"Botany"},
{q:"Study of animals is called?",a:"Zoology"},
{q:"Smallest unit of matter?",a:"Atom"},
{q:"Process plants make food?",a:"Photosynthesis"},
{q:"Animals with backbone?",a:"Vertebrates"},
{q:"Animals without backbone?",a:"Invertebrates"},
{q:"Cell discovered by?",a:"Robert Hooke"},
{q:"DNA full form?",a:"Deoxyribonucleic Acid"},
{q:"Energy currency of cell?",a:"ATP"},
{q:"Study of fungi?",a:"Mycology"}

];

for(let i=11;i<=50;i++){

questions.push({
q:"General Biology Question "+i,
a:"A"
})

}


let html="";

questions.forEach((q,i)=>{

html+=`

<div class="quizQ">

<p>${i+1}. ${q.q}</p>

<input type="text" id="q${i}" placeholder="Your Answer">

</div>

`;

});

document.getElementById("quizContainer").innerHTML=html;


function submitQuiz(){

let score=0;

questions.forEach((q,i)=>{

let ans=document.getElementById("q"+i).value;

if(ans.toLowerCase()==q.a.toLowerCase()) score++;

});

document.getElementById("score").innerText="Your Score: "+score+" / "+questions.length;

  }
