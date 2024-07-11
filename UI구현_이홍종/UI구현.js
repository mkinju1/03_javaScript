
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const input3 = document.querySelector("#input3");
const input4 = document.querySelector("#input4");
const input5 = document.querySelector("#input5");
const input6 = document.querySelector("#input6");


const bg = document.querySelector("#Background");



const changeBtn = document.querySelector("#changeButton");




changeBtn.addEventListener("click", function(){

  bg.style.width = `${input1.value}px`;

  bg.style.height = `${input2.value}px`;
  
  bg.style.backgroundColor = `${input5.value}`;

  bg.style.fontSize = `${input3.value}px`;

  bg.style.color = `${input4.value}`;

  bg.innerHTML = `${input6.value}`;


});
