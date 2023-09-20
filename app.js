//Get Input
const input = document.getElementById("input");
//Get Button
const btn = document.querySelector(".btn");
//Ger Error Message
const errorMsg = document.querySelector(".error-msg");
const succesMsg = document.querySelector(".success-msg");

function notifyMe() {
  let inputValue = input.value;

  if (inputValue === "") {
    errorMsg.classList.add("active");
    succesMsg.classList.remove("active");
    input.classList.add("active");
  } else if (inputValue.endsWith(".com") && inputValue.includes("@")) {
    succesMsg.classList.add("active");
    errorMsg.classList.remove("active");
    input.classList.remove("active");
  } else {
    errorMsg.classList.add("active");
    succesMsg.classList.remove("active");
    input.classList.add("active");
  }
}

btn.addEventListener("click", notifyMe);
