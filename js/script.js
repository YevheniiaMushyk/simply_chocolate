const animItems = document.querySelectorAll(".anim-items");
if (animItems.length > 0) {
	function animOnScroll(param) {
		window.addEventListener("scroll", animOnScroll);
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 6;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if (scrollY > animItemOffset - animItemPoint && scrollY < animItemOffset + animItemHeight) {
				animItem.classList.add("_animtitle");
			} else {
				animItem.classList.remove("_animtitle");
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.scrollX || document.documentElement.scrollLeft,
			scrollTop = window.scrollY || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
	}
}
