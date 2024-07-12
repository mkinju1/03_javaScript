/* setTimeout() 확인 */
const check1 = document.querySelector("#check1");
check1.addEventListener('click', () => {
  
  // 비동기 동작 즉, 동시에 실행
  // == 해당 setTimeout 함수를 수행 후
  // 종료를 기다리지않고 다음으로 넘어감
  // 그래서 뒤의 즉시 출력이 콘솔에 먼저 뜸
  window.setTimeout(()=>{
    console.log("3초 후에 출력되는 문자열");
  }, 3000); // 3000 ms == 3s


  setTimeout(()=>{
    console.log("2초 후에 출려되는 문자열");
  }, 2000);

  setTimeout(()=>{
    console.log("1초 후에 출려되는 문자열");
  }, 1000);


  console.log("클릭 즉시 출력되는 문자열");

});




/* setInterval() 확인 */

// 즉시 실행 함수
(()=>{
  const clock = document.querySelector("#clock");

  clock.innerText = new Date(); //시간 객체 Date
  // new Date() : 현재 시간을 저장한 객체 생성

  // 1초가 지날 때마다 #clock인 요소의 내용으로 현재 시간을 대입
  setInterval(()=>{
    clock.innerText = new Date();
  }, 1000);

})();
