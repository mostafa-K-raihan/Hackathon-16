$(document).ready(function(){
	$("#signOut").click(function() {
		$.ajax({
  			url: baseurl + 'index.php/Api_controller/signOut'
		}).done(function() {
			location.reload();
		});
	});
});
