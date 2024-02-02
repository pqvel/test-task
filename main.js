import "./src/styles/general.scss";
import { select } from "./src/js/select";
import { rangeSlider } from "./src/js/rangeSlider";

select({
	selectSelector: ".select",
	inputSelector: ".select__input",
	valueSelector: ".select__value",
	btnSelector: ".select__btn",
	itemSelector: ".select__list-input",
	activeClass: "select--open",
});

rangeSlider({
	inputSelector: ".range__slider",
	outputSelector: ".range__value",
});
