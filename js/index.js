'use strict';

// Variables //

const responsive_search = document.querySelector('.responsive_search');
const navigate_items = document.querySelectorAll('.nav_navigate>.item');
const setting_items = document.querySelectorAll('.settings-items>.item');
const main_text_selectors = document.querySelectorAll(
	'.main_text-selector>.selector'
);
const question_buttons = document.querySelectorAll(
	'.main_text-question>.question_answer'
);
// Functions

const addActiveClass = event => {
	event.currentTarget.classList.add('active');
};

const removeActiveClass = element => {
	element.classList.remove('active');
};

const handleItemClick = (event, element) => {
	element.forEach(item => item.classList.remove('active'));
	event.currentTarget.classList.add('active');
};

// Header //

responsive_search.addEventListener('click', addActiveClass);

document.addEventListener('click', event => {
	if (!responsive_search.contains(event.target)) {
		removeActiveClass(responsive_search);
	}
});

document.addEventListener('keydown', event => {
	if (event.key === 'Enter' && responsive_search.contains(event.target)) {
		removeActiveClass(responsive_search);
	}
});

// Navigation

navigate_items.forEach(i =>
	i.addEventListener('click', event => handleItemClick(event, navigate_items))
);

// Setting Items

setting_items.forEach(i =>
	i.addEventListener('click', event => handleItemClick(event, setting_items))
);

// Selectors

main_text_selectors.forEach(i =>
	i.addEventListener('click', event =>
		handleItemClick(event, main_text_selectors)
	)
);

// Buttons

question_buttons.forEach(i =>
	i.addEventListener('click', event => handleItemClick(event, question_buttons))
);
