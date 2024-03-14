document.querySelectorAll('.faq__content').forEach((item) => {
	item.style.maxHeight = 0;
});

document.querySelectorAll('.faq__button').forEach((button) => {
	const isOpened = document.querySelectorAll('.bi-caret-down-fill');

	button.addEventListener('click', (e) => {
		const faqContent = button.nextElementSibling;
		button.classList.toggle('active');

		if (button.classList.contains('active')) {
			faqContent.style.maxHeight = faqContent.scrollHeight + 'px';
			e.target.classList.replace('bi-caret-down-fill', 'bi-caret-up-fill');
		} else {
			faqContent.style.maxHeight = 0;
			e.target.classList.replace('bi-caret-up-fill', 'bi-caret-down-fill');
		}
	})
});