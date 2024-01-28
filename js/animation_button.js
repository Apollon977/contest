'use strict';

let buttons = document.querySelectorAll('.default-button');

Array.prototype.forEach.call(buttons, function (b) {
	b.addEventListener('click', create_ripple);
});

function create_ripple(e) {
	let circle = document.createElement('div');
	this.appendChild(circle);

	let d = Math.max(this.clientWidth, this.clientHeight);

	circle.style.width = circle.style.height = d + 'px';

	circle.style.left = e.offsetX - d / 2 + 'px';
	circle.style.top = e.offsetY - d / 2 + 'px';

	circle.classList.add('ripple');

	setTimeout(() => {
		circle.remove();
	}, 1000);
}
