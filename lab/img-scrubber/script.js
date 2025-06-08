$(".slide-container__bar").on("input", function(val) {
	/* Get the value from the input element (0-100) */
	var value = $(this).val();
	/* Get the left image width percentage equal to value */
	$(".slide-container__left").css("width", value + "%"); // e.g 80%
	/* Set the right image width percentage equal to 100 minus value */
	$(".slide-container__right").css("width", 100 - value + "%"); // e.g 20%
});