const responsive_navigation = document.querySelector('.responsive_navigation');
const overlay = document.querySelector('.overlay');
const resposive_header = document.querySelector('.resposive_header');
const action_button = document.querySelector('.action');
const profile_button = document.getElementsByClassName(
	'responsive_information-account'
);
const notif_modal = document.querySelector('.notif-modal');
const notif_button = document.querySelector(
	'.responsive_information-notification'
);
const modal_header = document.querySelector('.profile-modal');

document.addEventListener('DOMContentLoaded', () => {
	window.addEventListener('scroll', function () {
		let scrolled = window.scrollY;

		if (scrolled > 1) {
			responsive_navigation.style.top = '0';
		} else {
			responsive_navigation.style.top = '68px';
		}
	});

	action_button.addEventListener('click', () => {
		responsive_navigation.classList.toggle('active');
		responsive_navigation.classList.toggle(
			'hidden',
			!responsive_navigation.classList.contains('active')
		);
		overlay.classList.toggle('active');
		overlay.classList.toggle('hidden', !overlay.classList.contains('active'));
		if (responsive_navigation.classList.contains('active')) {
			resposive_header.style.position = 'relative';
			resposive_header.style.zIndex = '10';
		}
	});

	profile_button[0].addEventListener('click', () => {
		document.querySelector('.account_arrows').classList.toggle('active');
	});
});

document.addEventListener('DOMContentLoaded', () => {
	const button = document.getElementsByClassName('action_button');

	button.addEventListener('click', () => {
		navigation(responsive_navigation, 'active', 'hidden', 500);
	});
});

document.addEventListener('DOMContentLoaded', () => {
	const button_desktop = profile_button[0];
	const button_mobile = profile_button[1];
	const rect = modal_header;

	button_desktop.addEventListener('click', () => {
		navigation(rect, 'modal-visible', 'modal-hidden', 500);
	});

	button_mobile.addEventListener('click', () => {
		navigation(rect, 'modal-visible', 'modal-hidden', 500);
	});
});

document.addEventListener('DOMContentLoaded', () => {
	notif_button.addEventListener('click', () => {
		navigation(notif_modal, 'modal-visible', 'modal-hidden', 500);
	});
});

function navigation(element, first, second, timeOfAnimation) {
	if (!element.classList.contains(first)) {
		element.classList.add(first);
		element.classList.remove(second);
	} else {
		element.classList.add(second);
		window.setTimeout(function () {
			element.classList.remove(first);
		}, timeOfAnimation);
	}
}
