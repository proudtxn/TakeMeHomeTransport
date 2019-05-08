function hideNav () {
	document.getElementById('sideBar').classList.toggle('active');
	document.getElementById('toggleBtn').classList.toggle('active');
	document.getElementById('menuBtn').classList.toggle('active');
	document.getElementById('rightSide').classList.toggle('active');
	document.getElementById('eventList').classList.toggle('active');
	document.getElementById('calendar').classList.toggle('active');
}

$(document).ready(function () {

	// SMOOTH SCROLLING - jQuery
	var scrollLink = $('.scroll');

	// Smooth scrolling
	scrollLink.click(function (e) {
		e.preventDefault();
		$('body,html').animate(
			{
				scrollTop: $(this.hash).offset().top
			},
			1000
		);
	});
});
