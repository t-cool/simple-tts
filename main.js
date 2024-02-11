function tts(text){
  const speechSynthesis = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance();
  utterance.lang = 'en-US';
  utterance.text = text;
  window.speechSynthesis.speak(utterance);
}

tts('I went to Tokyo to get a job but I got a pickpocketed.');
