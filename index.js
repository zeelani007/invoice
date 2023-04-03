let container=document.getElementById('chatbot-container');

let btn=document.getElementById('btn');

let form=document.getElementById('form');

let arr1=[

  { name:"hello",text:"hi"},

  { name:"How Do I Shop Online",text:"Please refer to our How To Shop page which walks you through the shopping process"},

    // { name:"i\'m fine",text:"that\'s good to hear"},

  { name:"How Do I Check My Order Status",text:"You can view your order status at any time once you have placed your order, through My Orders options after logging in to your Neeru's Kitchen account on Neeru's Kitchen website. We try and dispatch all the orders from our warehouse within two working days and then you can track your order from Track your order option on the homepage of www.Neeru's Kitchen.com through the UPS tracking system."},

  {

   name:"How Long Will It Take To Receive My Order?",text:"We make every effort to process your order as quickly as possible. We usually require 15 working days to dispatch your order."},



  {

   name:"How Do I Track My Order?",text:"You can track your order on our Order Tracking page. If you do not have a tracking number or delivery confirmation number, please contact us. If you are not sure whether or not your order has shipped yet, you can check the status of your recent orders in My Account"

  },

  {

   name:"How Do I Contact Customer Service?",text:"Please email us through our Contact Us page"

  },

  {

   name:"How Can I Cancel My Order?",text:"Once you confirm payment of your order, your order cannot be changed or cancelled."

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