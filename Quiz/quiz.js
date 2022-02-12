//ajax
      function fetchpage(name){
        fetch(name).then(function(response){
          response.text().then(function(text){
            document.querySelector('article').innerHTML = text;
          })
        });
      }
//홈 ajax
      function fetchpagehome(name){
        fetch(name).then(function(response){
          response.text().then(function(text){
            document.querySelector('#home').innerHTML = text;
          })
        });
      }
      if(location.hash){
        fetchpage(location.hash.substring(2));
      } else {
        fetchpage('홈');
      }
//엔딩 ajax
function fetchpageEnding(name){
  fetch(name).then(function(response){
    response.text().then(function(text){
      document.querySelector('#ending').innerHTML = text;
    })
  });
}
  //점수산출
  function score() {
    const edit = document.getElementById('score');
    edit.innerHTML = value + '점';
  }

//진행도
var i = 0;
var width2 = 1;
var num = 0;
function prog() {
  const result = document.getElementById('prog');//결과
  const pages = document.getElementById('pages');//전체페이지
  
  let number = num;//현재
      number = (parseInt(number)+1);

      var persent = (number / pages.innerText) * 100;
      result.innerText = persent;
      num = number;
      
      if (i == 0) {
        i = 1;
        var elem2 = document.getElementById("myBar2");
        
        var number2 = width2;
        var id = setInterval(frame, 10);
        function frame() {
          if (width2 >= (number / pages.innerText) * 100) {
            clearInterval(id);
            i = 0;
          } else {
            number2++;
            width2 = number2;
            elem2.style.width = width2 + "%";
          }
        }
      }

      if(num >= pages.innerText){
        result.innerText = 1;
        fetchpageEnding('ending');
        setTimeout(function() {
          score();
          while(x < wrong.length){
            wrong[x] = x+1 + '. ' +wrong[x] + '<br>';
          x=x+1;
          }
          document.getElementById('wrongcont').innerHTML = wrong; //오답넣기
          }, 2000);
      }
    }

    
//체력바감소(오답)
var bar = 100;
var wrong = [];
var x = 0;
function move2() {
  var elem = document.getElementById("myBar");
  const width = document.getElementById('hp');//결과
  let number3 = width.innerText;//현재
      number3 = parseInt(number3)-25;
      width.innerText = number3;
        var id = setInterval(frame, 10);
        function frame() {
          if (bar <= number3) {
            clearInterval(id);
            i = 0;
          } else {
            bar--;
            elem.style.width = bar + "%";
          }
        }

      var Qcontent = document.getElementById('W').innerText;
      //오답보기에 오답넣기
      wrong.push(Qcontent);      
      console.log(wrong);
      //엔딩으로
      if(width.innerText <= 0){
        width.innerText = 100;
        fetchpageEnding('ending');
        setTimeout(function() {
          score();//스코어넣기
          while(x < wrong.length){
            wrong[x] = x+1 + '. ' +wrong[x] + '<br>';
          x=x+1;
          }
          document.getElementById('wrongcont').innerHTML = wrong; //오답넣기(콤마제거필요)
          }, 2000);
      }
    }


  //점수
  var value = 0;
  function valueplus(){
      value += 12.5;

  }
  
