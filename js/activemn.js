$(document).ready(function(){
	var curentURL = $(location).attr('href');
	$("ul.menu-link").find("a[href='"+ curentURL +"']").addClass('curent');
});