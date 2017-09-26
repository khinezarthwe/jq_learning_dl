$(function(){
	var onmousedown = function(e){
		if(e.which === 3){
			$(e.data.exp).css({
				display: 'block',
				top: e.pageY,
				left: e.pageX
			});
		}
		e.stopPropagation();
	};
	$('#data').mousedown({exp : '#menu2'}, onmousedown);
	$(document)
	.mousedown({exp : '#menu'}, onmousedown)
	.click(function(e){
		if(e.which === 1){
			$('#menu').css('display','none');
			$('#menu2').css('display','none');
		}
	})
	.contextmenu(function(e){
		e.preventDefault();
	});

	
	// $('form').submit(function(e){
	// 	if(!confirm('Are you sure to send your name?')){
	// 		e.preventDefault();
	// 	} 
	// });
	// $('#fm').keypress(function(e){
	// 	var k = e.which;
	// 	if(!(k >= 48 && k <= 57) || k === 45 || k === 8 || k ===0){
	// 		e.preventDefault();
	// 	}
	// });
});