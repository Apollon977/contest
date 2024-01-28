const responsiveNavigation = document.querySelector('.responsive_navigation');
const overlay = document.querySelector('.overlay');
const resposive_header = document.querySelector('.resposive_header');
const action_button = document.querySelector('.action');

window.addEventListener('scroll', function () {
	let scrolled = window.scrollY;

	// Проверяем, сколько пикселей прокручено и обновляем значение top
	if (scrolled > 1) {
		responsiveNavigation.style.top = '0';
	} else {
		responsiveNavigation.style.top = '68px';
	}
});

action_button.addEventListener('click', () => {
	responsiveNavigation.classList.toggle('active');
	responsiveNavigation.classList.toggle(
		'hidden',
		!responsiveNavigation.classList.contains('active')
	);

	overlay.classList.toggle('active');
	overlay.classList.toggle('hidden', !overlay.classList.contains('active'));

	if (responsiveNavigation.classList.contains('active')) {
		resposive_header.style.position = 'relative';
		resposive_header.style.zIndex = '10';
	}
});

document.addEventListener('DOMContentLoaded', () => {
	const button = document.getElementById('action_button');
	const rect = document.getElementById('responsiveNavigation');

	button.addEventListener('click', () => {
		toggleTwoClasses(rect, 'active', 'hidden', 500);
	});
});

function toggleTwoClasses(element, first, second, timeOfAnimation) {
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
