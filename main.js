const hourTime = document.querySelector('.time-hour');
const minTime = document.querySelector('.time-min');
const secTime = document.querySelector('.time-sec');
const aMpM = document.querySelector('#am-time');
const message = document.querySelector('.message');
const wish = document.querySelector('.wish-heading-text');
const image = document.querySelector('.image');
const btn = document.querySelector('.wish-button');
const ts1 = document.querySelector('.ts1');
const ts2 = document.querySelector('.ts2');
const ts3 = document.querySelector('.ts3');
const d1 = new Date();
const hr1 = d1.getHours();


function addZero(timeFrame) {
    return timeFrame < 10 ? '0'.concat(timeFrame) : timeFrame
}
function time() {
  var d = new Date();
  var sec = d.getSeconds();
  var min = d.getMinutes();
  var hr = d.getHours();   
     hourTime.innerHTML =    `${addZero((hr % 12) || 12)}`
     minTime.innerHTML  =    `${addZero(min)}`
     secTime.innerHTML  =    `${addZero(sec)}`
     aMpM.innerHTML     =    `${hr >= 12 ? 'PM' : 'AM'}`
}
setInterval(time, 1000);


btn.addEventListener('click', party);
function party(){
  btn.innerText = "Let's Party";
  message.innerText = "Let's Have an Amazing Party !!";
  wish.innerText = "Enjoy the Party";
  image.innerHTML = '<img src="./img/Partydancers.svg" alt="">';
} 


ts1.addEventListener('click', ch1);
ts2.addEventListener('click', ch2);
ts3.addEventListener('click', ch3);
    
    
function ch1(){
  if (ts1.value == hr1){
    image.innerHTML = '<img src="./img/Sunny day-bro.svg" alt="">';
    message.innerText = "It's Wake-Up Time";
    wish.innerText = "Good Morning";
  }
  else{
    image.innerHTML = '<img src="./img/default.svg" alt="">';
    message.innerText = "";
    wish.innerText = "";
  }
};

function ch2(){
  if (ts2.value == hr1){
    image.innerHTML = '<img src="./img/Pizza sharing-cuate.svg" alt="">';
    message.innerText = "Let's have some Lunch !!";
    wish.innerText = "Good AfterNoon";
  }
  else{
    image.innerHTML = '<img src="./img/default.svg" alt="">';
    message.innerText = "";
    wish.innerText = "";
  }
};

function ch3(){
  if(ts3.value == hr1){  
    image.innerHTML = '<img src="./img/Sleep analysis-cuate.svg" alt="">';
    message.innerText = "Let's go to bed !!";
    wish.innerText = "Good Night";
  }
  else{
    image.innerHTML = '<img src="./img/default.svg" alt="">';
    message.innerText = "";
    wish.innerText = "";
  }
};