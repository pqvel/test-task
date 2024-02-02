export const select = ({
	selectSelector,
	inputSelector,
	valueSelector,
	btnSelector,
	itemSelector,
	activeClass,
}) => {
	const selects = document.querySelectorAll(selectSelector);

	selects.forEach((select) => {
		const selectInput = select.querySelector(inputSelector);
		const selectBtn = select.querySelector(btnSelector);
		const selectValue = select.querySelector(valueSelector);
		const selectitems = select.querySelectorAll(itemSelector);

		let isOpenSelect = false;

		const closeSelect = () => {
			if (isOpenSelect) {
				isOpenSelect = false;
				select.classList.remove(activeClass);
			}
		};

		const openSelect = () => {
			isOpenSelect = true;
			console.log(activeClass);
			select.classList.add(activeClass);
		};

		selectBtn.addEventListener("click", (e) => {
			e.stopPropagation();
			isOpenSelect ? closeSelect() : openSelect();
		});

		document.addEventListener("click", closeSelect);

		selectitems.forEach((item) => {
			item.addEventListener("change", (e) => {
				selectitems.forEach((selectItem) => (selectItem.checked = false));
				e.target.checked = true;
				selectInput.value = e.target.value;
				selectValue.textContent = e.target.value;
				closeSelect();
			});
		});
	});
};
