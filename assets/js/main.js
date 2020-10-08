/* Set the width of the side navigation to 250px */
function openNav() {
	document.getElementById("mySidenav").style.width = "300px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}

$(".sidenav").mCustomScrollbar({
    theme: "dark-thick",
    scrollButtons:{ enable: true }
});

$(document).ready(function() {
	$('nav').removeClass('fixed-top-login');
});

/* $(function() {
    $('button:not(.btn), input[type="button"]:not(.btn)').addClass('btn btn-outline-primary btn-lg main-button');
    $('input[type=text], input[type=number], input[type=email]').addClass('form-control');
}); */