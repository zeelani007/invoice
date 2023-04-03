let container=document.getElementById('chatbot-container');

let btn=document.getElementById('btn');

let form=document.getElementById('form');

let arr1=[

  { name:"hello",text:"hi"},

  { name:"i am fine",text:"that's good to hear"},

    { name:"i\'m fine",text:"that\'s good to hear"},

  { name:"how are you",text:"i am fine,thanks, how about you?"},

  {

   name:"what is your name",text:"my name is zeelani"

  },

 { name:"what\'s your name",text:"my name is zeelani"

  },

  {

   name:"do you understand hindi",text:"sure,that\'s my mother language"

  },

  {

   name:"hi",text:"what\'s up"

  },

  {

   name:"what's up",text:"i'm good,thanks"

  },

  {

   name:"do you have a boyfriend",text:"nah, am single and happy"

  },

  {

   name:"can i be your boyfriend",text:"oh! no, i love our friendship"

  },

  {

   name:"why are you single",text:"because i don't like sharing my dessert "

  },

  {

   name:"do you love me",text:"yes, i do"

  },

  {

   name:"why do you love me",text:"because you're human"

  },

  {

   name:"why do you love humans",text:"i love humans because they created me"

  },

  {

   name:"what do you do for a living",text:"i talk for a living"

  },

  {

   name:"are you married",text:"no, I'm not"

  },

  {

   name:"why are you not married",text:"because i can't get married"

  },

  {

   name:"why can't you get married",text:"because am a robot"

  },

  {

   name:"will you marry me",text:"oh! sorry i can\'t, but we can be friends if you don\'t mind "

  },

  {

   name:"do you know siri",text:"yes i do"

  },

  {

   name:"who is siri",text:"she's a sister robot"

  },

  {

   name:"who are you",text:"am a zeelani"

  },

  {

   name:"how old are you",text:'i am 23 years old'

  },

  

  

];

const SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition ;

const recorder= new SpeechRecognition();

recorder.onstart=()=>{

console.log('voice is active');

 btn.innerHTML="..";

}

recorder.onend=()=>{

  btn.innerHTML=".";

}

function botVoice(message){

 const speech= new SpeechSynthesisUtterance();

 speech.text="i don't understand that";

 for(let botData of arr1){

  if(message.includes(botData.name.toLowerCase())){

   speech.text=botData.text

  }

 }

container.innerHTML+=`<p class="speech">${speech.text}</p>`;

speech.volume=1;

speech.rate=1;

speech.pitch=1;

 window.speechSynthesis.speak(speech);

}

recorder.onresult=(event)=>{

 console.log(event);

 const current=event.resultIndex;

  const transcript=event.results[current][0].transcript;

   container.innerHTML+=`<p class="recorder">${transcript}</p>`;

   botVoice(transcript.toLowerCase());

}

function startVoice(){

 recorder.start();

}

form.onsubmit=(e)=>{

 e.preventDefault();

    let formInput=document.getElementById('botvalue').value;

if(formInput==''){

 return false;

}

else{

container.innerHTML+=`<p class="recorder">${formInput}</p>`;

    botVoice(formInput.toLowerCase());

form.reset();

   return true;

}

}