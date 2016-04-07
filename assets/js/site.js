$(function() {
	$('#upload_file').submit(function(e) {
		e.preventDefault();
		$.ajaxFileUpload({
			url 			:'./upload/upload_file/', 
			secureuri		:false,
			fileElementId	:'userfile',
			dataType		: 'json',
			data			: {
				'title'		: $('#title').val(),
				'genre'		: $('input[name=genre]:radio:checked').val(),
				'isAlbum'	: $('input[name=album]:radio:checked').val(),
				'tprice'	: $('#priceInTaka').val(),
				'dprice'	: $('#priceInDollar').val(),
			},
			success	: function (data, status)
			{
				if(data.status != 'error')
				{
					$('#title').val('');
					$('#priceInTaka').val('');
					$('#priceInDollar').val('');
					$('input[name=genre]').attr('checked',false);
					$('input[name=album]').attr('checked',false);
				}
				alert(data.msg);
			}
		});
		return false;
	});
});
