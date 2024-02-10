let hitCount = 0;
let isGameOver = false;
function GameStart() {
  document.getElementById("gamestatus").innerText = "Game Started";
  isGameOver = true;
  let Dainasor = document.getElementById("dainasor");
  let time = setInterval(() => {
    let i = Math.floor(Math.random() * 500) + 1;
    let j = Math.floor(Math.random() * 500) + 1;
    Dainasor.style.left = i + "px";
    Dainasor.style.top = j + "px";
  }, 1000);

  setTimeout(() => {
    clearTimeout(time);
    isGameOver = false;
    document.getElementById("gamestatus").innerText = "Game Over";
  }, 10000);
}
function hitcount() {
  if (isGameOver) {
    hitCount++;
    document.getElementById("hittotal").innerText = hitCount;
  }
}
