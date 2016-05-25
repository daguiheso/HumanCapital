(function($){
  $(function(){

    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();

    var bLazy = new Blazy({
        selector: 'img'
    });

    function initialize() {
      var mapProp = {
        center:new google.maps.LatLng(4.650525,-74.058255),
        zoom:15,
        mapTypeId:google.maps.MapTypeId.ROADMAP
      };
      var map=new google.maps.Map(document.getElementById("map"), mapProp);
    }
    google.maps.event.addDomListener(window, 'load', initialize);
  }); // end of document ready

  var $burguerButton = document.getElementById('burguer-button');
  var $menu = document.getElementById('menu');

  var consulta = 	window.matchMedia('(max-width:640px)');	
  consulta.addListener(mediaQuery);

  function mediaQuery () {
  	if (consulta.matches) {
  		console.log('se cumplio');
  		// $burguerButton.addEventListener('touchstart', function() {
  		$burguerButton.addEventListener('click',  toggleMenu);
  	}
  	else {
  		$burguerButton.removeEventListener('click',  toggleMenu);
  		console.log('no se cumplio');
  	}
  }
  mediaQuery();

  function toggleMenu () {
  	// debugger
  	$menu.classList.toggle('active')
  }
  function showMenu () {
  	$menu.classList.add('active')
  }
  function hideMenu () {
  	$menu.classList.remove('active')
  }

})(jQuery); // end of jQuery name space