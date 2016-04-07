$(document).ready(function() {

	function rateIt(rating) {
		$.ajax({
			url: baseurl+'index.php/Api_controller/rateProduct',
			method: "POST",
			data: {
				productId: $("#productId").text(),
				rating: rating
			}
    	}).done(function() {
			location.reload();
		});
	}

	$("#rate1").click(function() {
		rateIt(1);
	});

	$("#rate2").click(function() {
		rateIt(2);
	});

	$("#rate3").click(function() {
		rateIt(3);
	});

	$("#rate4").click(function() {
		rateIt(4);
	});

	$("#rate5").click(function() {
		rateIt(5);
	});

});