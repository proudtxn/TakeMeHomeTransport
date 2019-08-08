function hideNav () {
	document.getElementById('sideBar').classList.toggle('active');
	document.getElementById('toggleBtn').classList.toggle('active');
	document.getElementById('menuBtn').classList.toggle('active');
	document.getElementById('rightSide').classList.toggle('active');
	document.getElementById('eventList').classList.toggle('active');
	document.getElementById('calendar').classList.toggle('active');
	document.getElementById('howHelp').classList.toggle('active');
	document.getElementById('impact').classList.toggle('active');
	document.getElementById('impactWording').classList.toggle('active');
	document.getElementById('header').classList.toggle('active');
	document.getElementById('rightSideWrapper').classList.toggle('active');
	document.getElementById('wrapper').classList.toggle('active');
	document.getElementById('donateBtn').classList.toggle('active');
	document.getElementById('pokerBanner').classList.toggle('active');
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


$(document).ready(function () {
	// COLLAPSE MENU UPON CLICK ON MOBILE DEVICES ONLY
	var menuClickCollapse = window.matchMedia('(max-width: 780px)');

	function mediaMenuClickCollapse(menuClickCollapse) {
		if (menuClickCollapse.matches) {
			$('.links li a').on('click', function () {
				$('#toggleBtn').click();
			});
		} 
	}

	mediaMenuClickCollapse(menuClickCollapse);
	menuClickCollapse.addListener(mediaMenuClickCollapse);
});
