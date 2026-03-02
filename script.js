document.getElementById("startBtn").addEventListener("click", function(){
    let poem = document.getElementById("poem").innerText;
    let speech = new SpeechSynthesisUtterance(poem);

    speech.lang = "hi-IN";   // Hindi voice
    speech.rate = 1;         // speed (1 normal)
    speech.pitch = 1;         // voice pitch

    window.speechSynthesis.speak(speech);
});
