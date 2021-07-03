function clickAction() {
    score.textContent = '0';
    if (indiaCorrect.checked) {
    score.textContent = Number(score.textContent) + 1;
    
  }
}
  button.onclick = clickAction;