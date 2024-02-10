const subscribeModal = document.getElementsByClassName('subscribe-modal')[0];
const successModal = document.getElementsByClassName('success-modal')[0];

const emailInput = document.getElementById('emailAddr');
const emailDisplay = document.getElementById('email-addr');

const errorMessage = document.getElementById('error-message');

const submitBtn = document.getElementById('submit-btn');
const dismissBtn = document.getElementById('dismiss-btn');

const themeToggle = document.getElementById('theme-toggle');
const dataTheme = document.body.getAttribute('data-theme');

let wrongFormat = false;

const isEmailAddr = (text) => {
	const re =
		/(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
	return re.test(text);
};

const onSubmitClicked = (e) => {
	e.preventDefault();
	if (isEmailAddr(emailInput.value)) {
		emailInput.classList.remove('wrong-format-animation');
		emailDisplay.innerText = emailInput.value;
		emailInput.value = '';
		subscribeModal.classList.add('hide');
		successModal.classList.remove('hide');
	} else {
		wrongFormat = true;
		emailInput.classList.add('wrong-format');
		emailInput.classList.add('wrong-format-animation');
		errorMessage.classList.remove('hide');
	}
};

const onDismissClicked = (e) => {
	e.preventDefault();
	subscribeModal.classList.remove('hide');
	successModal.classList.add('hide');
};

const onEmailInputChanged = (e) => {
	e.preventDefault();
	if (wrongFormat && isEmailAddr(e.target.value)) {
		wrongFormat = false;
		emailInput.classList.remove('wrong-format');
		errorMessage.classList.add('hide');
	}
};

const onThemeToggle = (e) => {
	if (e.target.checked && dataTheme == 'light') {
		document.body.setAttribute('data-theme', 'dark');
		console.log('light');
	} else {
		document.body.setAttribute('data-theme', 'light');
		console.log('dark');
	}
};

submitBtn.addEventListener('click', onSubmitClicked);
dismissBtn.addEventListener('click', onDismissClicked);
emailInput.addEventListener('change', onEmailInputChanged);
themeToggle.addEventListener('change', onThemeToggle);
