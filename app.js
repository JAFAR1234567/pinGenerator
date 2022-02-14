const generatePin = document.querySelector(".generate-btn");
const pinInput = document.querySelector("#pin-input");
const calcInput = document.querySelector("#calc-input");
const calcBtns = document.querySelectorAll(".button");

function randomPin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";
  if (pinString.length == 4) {
    return (pinInput.value = pin);
  } else {
    return randomPin();
  }
}
generatePin.addEventListener("click", (e) => {
  randomPin();
});


  calcBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const number = e.target.innerText;
      if (isNaN(number)) {
        if (number == "C") {
          calcInput.value = "";
        }
        if (number == "Del") {
          calcInput.value = calcInput.value.slice(0,-1);
        }
      } else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        return (calcInput.value = newNumber);
      }
    });
  });


const submitBtn = document.querySelector(".submit-btn");
const notifySuccess = document.querySelector(".notify-success");
const notifyFail = document.querySelector(".notify-fail");
submitBtn.addEventListener("click", (e) => {
  if(pinInput.value == calcInput.value){
    notifySuccess.style.display = 'block';
    notifyFail.style.display = 'none';
  }
  else{
    notifySuccess.style.display = 'none';
    notifyFail.style.display = 'block';
  }
  console.log();
});
