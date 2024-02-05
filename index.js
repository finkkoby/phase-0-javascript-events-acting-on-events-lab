// Your code here
let dodger = document.querySelector("#dodger");
function moveDodgerLeft(e) {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
}
function moveDodgerRight(e) {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    if (left < 360) {
      dodger.style.left = `${left + 1}px`;
  }
 }

 document.addEventListener("keydown", function(e) {
  if(e.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if(e.key === "ArrowRight") {
    moveDodgerRight();
  }
 });
 document.addEventListener("keydown", moveDodgerLeft);
