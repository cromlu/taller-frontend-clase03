// Ajax
$(function(){
	$.get('datos_chan.html', function (info){
		$('#cajita').append(info);
	});
});