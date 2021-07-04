function clickAction() {
    score.textContent = '0';
    var x = document.getElementsByClassName("correct");
    for (var i = 0; i < x.length; i++) {
        x[i].style.color = "#00CE00";
    }
    var x = document.getElementsByClassName("nonCorrect");
    for (var i = 0; i < x.length; i++) {
        x[i].style.color = "#FF0000";
    }
    if (indiaCorrect.checked) {
      score.textContent = Number(score.textContent) + 1;
     
    
    }
    if (usaCorrect.checked) {
      score.textContent = Number(score.textContent) + 1;
      
      
    }
    if (azCorrect.checked) {
      score.textContent = Number(score.textContent) + 1;
      
      
    }
    if (ausCorrect.checked) {
      score.textContent = Number(score.textContent) + 1;
      
      
    }
    if (mongCorrect.checked) {
      score.textContent = Number(score.textContent) + 1;
      
      
    }
    if (ssCorrect.checked) {
      score.textContent = Number(score.textContent) + 1;
      
      
    }
    if (paraCorrect.checked) {
      score.textContent = Number(score.textContent) + 1;
      
      
    }
    if (canadaCorrect.checked) {
      score.textContent = Number(score.textContent) + 1;
      
      
    }
    if (mexicoCorrect.checked) {
      score.textContent = Number(score.textContent) + 1;
      
      
    }
    if (taiwanCorrect.checked) {
      score.textContent = Number(score.textContent) + 1;
      
      
    }
  }

answerButton.onclick = clickAction;