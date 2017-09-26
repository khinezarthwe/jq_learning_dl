$(function(){
	$('#big').on('error',function(){
		$(this).attr('src','images/Noimage.jpg');
	})
	.attr('src',$('#list img:first-child').attr('src'));

	$('#list img').click(function(){
		var img = $(this);
		//$('#big').attr('src',$(this).attr('src'));
		$('#big')
		 .hide(1000,function() {
		  $(this).attr('src',img.attr('src'));
		 })
		 .show(2000);
	});
});