const featuresTopics = document.querySelectorAll('.features__list .list__item');

featuresTopics.forEach((topic, index) => {
	const slider = document.querySelectorAll('.features .slider');
	topic.addEventListener('click', () => {
		for (let topic of featuresTopics) {
			topic.classList.remove('selected');
		}
		topic.classList.add('selected');
		for (let slide of slider) {
			slide.style.transform = `translate(${index * -33.33}%)`;
		}
	});
});
