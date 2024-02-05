const subscribeModal = document.getElementsByClassName("subscribe-modal")[0];
const successModal = document.getElementsByClassName("success-modal")[0];

const submitBtn = document.getElementById("submit-btn");
const dismissBtn = document.getElementById("dismiss-btn");

const onSubmitClicked = (e) => {
  e.preventDefault();
  subscribeModal.classList.add("hide");
  successModal.classList.remove("hide");
};

const onDismissClicked = (e) => {
  e.preventDefault();
  subscribeModal.classList.remove("hide");
  successModal.classList.add("hide");
};

submitBtn.addEventListener("click", onSubmitClicked);
dismissBtn.addEventListener("click", onDismissClicked);
