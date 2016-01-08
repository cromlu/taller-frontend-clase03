// var n1 ,n2;
// n1 = 20;
// n2 = 30;
// var resultado = n1 + n2;
// var header = document.getElementById('Mi_primer_ID');

// header.innerHTML += 'resultado: ' + resultado; 




var menu_box = document.querySelector('.Header-Main__Nav');

var div_menu_open = document.getElementById('box_1');
var div_menu_close = document.getElementById('box_2');

var btn_menu_open = document.getElementById('btn_menu-open');
btn_menu_open.addEventListener("click", Evento_btn_Menu__open);

function Evento_btn_Menu__open (){
	div_menu_open.classList.add('display-none');
	menu_box.classList.remove('display-none');
	div_menu_close.classList.remove('display-none');
}


var btn_menu_close = document.getElementById('btn_menu-close');
btn_menu_close.addEventListener("click", Evento_btn_Menu__close);

function Evento_btn_Menu__close (){
	div_menu_close.classList.add('display-none');
	menu_box.classList.add('display-none'); 	
	div_menu_open.classList.remove('display-none');

}


