export const rangeSlider = ({ inputSelector, outputSelector }) => {
	const input = document.querySelector(inputSelector);
	const output = document.querySelector(outputSelector);

	input.addEventListener("input", () => {
		output.textContent = `${input.value}%`;
	});
};
