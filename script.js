let language = "en";

const texts = {
    en: {
        title: "Science Study Portal",
        subtitle: "Botany | Zoology | Chemistry"
    },
    hi: {
        title: "विज्ञान अध्ययन पोर्टल",
        subtitle: "वनस्पति | जीव | रसायन"
    }
};

function toggleLanguage() {
    language = language === "en" ? "hi" : "en";

    document.getElementById("title").innerText = texts[language].title;
    document.getElementById("subtitle").innerText = texts[language].subtitle;
}

function speakText(text) {
    if (!text) return;
    let speech = new SpeechSynthesisUtterance(text);
    speech.lang = language === "hi" ? "hi-IN" : "en-US";
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}
