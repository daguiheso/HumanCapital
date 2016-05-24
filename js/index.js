(function($){
  $(function(){

    $('.parallax').parallax();

  }); // end of document ready

  var $burguerButton = document.getElementById('burguer-button');
  var $menu = document.getElementById('menu');

  var consulta = 	window.matchMedia('(max-width:766px)');	
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