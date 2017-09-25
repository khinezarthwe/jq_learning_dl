$(function(){
	var str = 'search in here';
	$('#keywd')
	.addClass('watermark')
	.val(str)
	.focus(function(){
		$(this).removeClass('watermark');
		if ($(this).val() === str ){
			$(this).val('');
		}
	})
	.blur(function(){
		if($(this).val() === ''){
			$(this).val(str);
			$(this).addClass('watermark');
		}
	});
	$('#fm')
	.submit(function(){
		if($('keywd').val() === str){
			$('keywd').val('');
		}
	});
});