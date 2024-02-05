const subscribeModal = document.getElementsByClassName("subscribe-modal")[0];
const successModal = document.getElementsByClassName("success-modal")[0];

const emailInput = document.getElementById("emailAddr");

const submitBtn = document.getElementById("submit-btn");
const dismissBtn = document.getElementById("dismiss-btn");

const isEmailAddr = (text) => {
  const re =
    /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
  return re.test(text);
};

const onSubmitClicked = (e) => {
  e.preventDefault();
  if (isEmailAddr(emailInput.value)) {
    subscribeModal.classList.add("hide");
    successModal.classList.remove("hide");
  } else {
    console.log("NOT EMAIL PATTERN");
  }
};

const onDismissClicked = (e) => {
  e.preventDefault();
  subscribeModal.classList.remove("hide");
  successModal.classList.add("hide");
};

submitBtn.addEventListener("click", onSubmitClicked);
dismissBtn.addEventListener("click", onDismissClicked);
