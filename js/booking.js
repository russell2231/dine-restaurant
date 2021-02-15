const customSelectWrapper = document.querySelector('.custom-select-wrapper');
const customSelect = document.querySelector('.custom-select');
const customSelectOptions = document.querySelectorAll('.custom-option');
const partyWrapper = document.querySelector('.party-wrapper');
let partyNumber = 4;

// Selection of custom select
for (const option of customSelectOptions) {
	option.addEventListener('click', function () {
		if (!this.classList.contains('selected')) {
			const selectedOption = document.querySelector('.custom-option.selected');
			const selectedValue = document.querySelector(
				'.custom-select__trigger span'
			);
			selectedOption.classList.remove('selected');
			this.classList.add('selected');
			selectedValue.textContent = this.textContent;
		}
	});
}

// Close custom select menu when clicked outside
window.addEventListener('click', function (e) {
	const select = document.querySelector('.custom-select');
	if (!select.contains(e.target)) {
		select.classList.remove('open');
	}
});

// Toggle custom select menu
customSelectWrapper.addEventListener('click', () => {
	customSelect.classList.toggle('open');
});

// Add or remove from party
partyWrapper.addEventListener('click', function (e) {
	const party = document.querySelector('.party');
	if (e.target.classList.contains('subtract')) {
		if (partyNumber > 1) {
			partyNumber--;
		}
		if (partyNumber === 1) {
			party.value = `${partyNumber} person`;
		} else {
			party.value = `${partyNumber} people`;
		}
	} else if (e.target.classList.contains('add')) {
		if (partyNumber < 25) {
			partyNumber++;
		}
		party.value = `${partyNumber} people`;
	}
});

// Change the minutes number input to look like time
document.querySelector('.minutes').addEventListener('change', function () {
	if (this.value === '0') {
		this.value = `00`;
	}
});
