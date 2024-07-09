// 준비한 이미지 파일명을 저장할 배열
const images = ["a.jpg", "b.jpg", "c.jpg", "d.jpg"];

// 클래스가 key인 요소를 모두 얻어와 배열형태로 저장
const keys = document.querySelectorAll(".key");
// 입력키 : Q W E R
// 인덱스 : 0 1 2 3



/* 문서 전체에 keydown 이벤트 리스너 추가*/
// document.addEventListener("keydown", function(e){
  // e.key : 입력한 key
  // console.log(e.key);


/*   if(e.key === 'q'){
    keys[0].style.backgroundColor = "pink";wer

  } else if(e.key === 'w'){
    keys[1].style.backgroundColor = "pink";
  } //여기에 계속 엘스이프 해도 되는데 swith 방법이 효율적*/

/*   switch(e.key){
    case 'q' : keys[0].style.backgroundColor = "skyblue"; break;
    case 'w' : keys[1].style.backgroundColor = "skyblue"; break;
    case 'e' : keys[2].style.backgroundColor = "skyblue"; break;
    case 'r' : keys[3].style.backgroundColor = "skyblue"; break;
  }
}); */

//이것도 위와 같은 결과

document.addEventListener("keydown", function(e){
  // e : 이벤트 객체
  // e.key : 입력한 key
  // console.log(e.key);

  let index; // 인덱스를 저장할 변수

  // 문자열.toUpperCase() : 문자열을 대문자로 변환
  // 문자열.toLowerCase() : 문자열을 소문자로 변환

  switch(e.key.toLowerCase()){ // toLowerCase : 입력 키를 소문자로 변환
    case 'q': index = 0; break;
    case 'w': index = 1; break;
    case 'e': index = 2; break;
    case 'r': index = 3; break;
    default : return; // 다른 키 입력 시 종료
  }

  // keys[index].style.backgroundColor = "pink";

  // 배경을 이미지로 지정
  keys[index].style.backgroundImage = `url("../images/13_입력된키확인/${images[index]}")`;

  // 글자색 투명으로 변경
  // - rgba(red, green, blue, alpha)
  // - rgb 값은 0 ~ 255 / alpha(투명도) 0(투명) ~ 1(불투명)
  keys[index].style.color = "rgba(0, 0, 0, 0)";
});



/* 문서 전체에 keyup 이벤트 리스너 추가*/
/* document.addEventListener("keyup", function(e){

  switch(e.key){
    case 'q' : keys[0].style.backgroundColor = "white"; break;
    case 'w' : keys[1].style.backgroundColor = "white"; break;
    case 'e' : keys[2].style.backgroundColor = "white"; break;
    case 'r' : keys[3].style.backgroundColor = "white"; break;
  }
}); */

/*  위 방법과 동일한 결과

/* 문서 전체에 keyup 이벤트 리스너 추가*/
document.addEventListener("keyup", function(e){
  let index;

  switch(e.key.toLowerCase()){
    case 'q': index = 0; break;
    case 'w': index = 1; break;
    case 'e': index = 2; break;
    case 'r': index = 3; break;
    default: return;
  }

  // keys[index].style.backgroundColor = "white";

  //배경 이미지 제거
  keys[index].style.backgroundImage = "none";

  //
  keys[index].style.color = "";
});


/* 이미지가 마우스 따라다니게 하기 */

// 숨겨놓은 이미지
const corsorImage = document.querySelector("#cursorImage");

// 문서 전체에 "mousemove"(마우스가 움직였을 때) 감지 추가
document.addEventListener("mousemove", function(e){

  // console.log(e);
  // e.pageX : 가로 방향 마우스 위치(왼쪽에서 떨어진 px수)
  // e.pageY : 세로 방향 마우스 위치(윗쪽에서 떨어진 px수)

  cursorImage.style.left = `${e.pageX}px`;
  cursorImage.style.top = `${e.pageY -50}px`;  
  // e.page x나 y 뒤에 +- 로 이미지 별로 마우스에 맞게 
  // 각자 원하는 위치로 조정(이미지의 크기에 따라 세부 조정)
})