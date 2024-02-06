const subscribeModal = document.getElementsByClassName("subscribe-modal")[0];
const successModal = document.getElementsByClassName("success-modal")[0];

const emailInput = document.getElementById("emailAddr");
const emailDisplay = document.getElementById("email-addr");

const errorMessage = document.getElementById("error-message");

const submitBtn = document.getElementById("submit-btn");
const dismissBtn = document.getElementById("dismiss-btn");

let wrongFormat = false;

const isEmailAddr = (text) => {
  const re =
    /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
  return re.test(text);
};

const onSubmitClicked = (e) => {
  e.preventDefault();
  if (isEmailAddr(emailInput.value)) {
    emailDisplay.innerText = emailInput.value;
    emailInput.value = "";
    subscribeModal.classList.add("hide");
    successModal.classList.remove("hide");
  } else {
    wrongFormat = true;
    emailInput.classList.add("wrong-format");
    errorMessage.classList.remove("hide");
  }
};

const onDismissClicked = (e) => {
  e.preventDefault();
  subscribeModal.classList.remove("hide");
  successModal.classList.add("hide");
};

const onChanged = (e) => {
  e.preventDefault();
  if (wrongFormat && isEmailAddr(e.target.value)) {
    wrongFormat = false;
    emailInput.classList.remove("wrong-format");
    errorMessage.classList.add("hide");
  }
};

submitBtn.addEventListener("click", onSubmitClicked);
dismissBtn.addEventListener("click", onDismissClicked);
emailInput.addEventListener("change", onChanged);
