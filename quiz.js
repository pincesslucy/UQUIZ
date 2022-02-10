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
function prog() {
  const result = document.getElementById('prog');//결과
  const pages = document.getElementById('pages');//전체페이지
  let number = result.innerText;//현재
      number = parseInt(number)+1;
      result.innerText = number;
      if(result.innerText > pages.innerText){
        result.innerText = 1;
        fetchpageEnding('ending');
        setTimeout(function() {
          score();
          }, 2000);
      }
    }

    
//체력바
function move2() {
  var elem = document.getElementById("myBar");
  const width = document.getElementById('hp');//결과
  let number = width.innerText;//현재
      number = parseInt(number)-25;
      width.innerText = number;
      elem.style.width = number + "%";
      if(width.innerText <= 0){
        width.innerText = 100;
        fetchpageEnding('ending');
        setTimeout(function() {
          score();
          }, 2000);
      }
    }


  //점수
  var value = 0;
  function valueplus(){
      value += 12.5;
      console.log(value);

  }
  
