$(document).ready(function(){

	$('#loader-fragment').addClass('hide')
	var mobileDetect = (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)) ? true : false ;
	function offset(el) {
	    var rect = el.getBoundingClientRect(),
	    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
	    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
	var kfn_anim = function(){
	    var elements = document.querySelectorAll('.kfn_anim');
	    for (var i = 0; i < elements.length; i++) {
	        if (mobileDetect) {
	          elements[i].style.visibility = 'hidden';
	        }
	        var elementData = elements[i].dataset.kfn;
	        if (window.scrollY > offset(elements[i]).top - window.innerHeight) {
	            elements[i].classList.add(elementData)
	        }
	    }
	}
	kfn_anim();
	window.addEventListener('scroll',kfn_anim);
	window.addEventListener('resize',kfn_anim);
	setTimeout(function() {
	  kfn_anim();
	  document.querySelector('body').classList.add('loaded')
	  document.querySelector('#loader-fragment').style.display = 'none';
	}, 10);

	var slide = $('.owl-carousel').owlCarousel({
	    loop:true,
	    nav:false,
	    dots: true,
	    items: 1
	})

	$('.prev').on('click',function(){
		slide.trigger('prev.owl.carousel');
	})
	$('.next').on('click',function(){
		slide.trigger('next.owl.carousel');
	})

	$('div#mobile div.flx div.arrow').on('click',function(){
		$('div#mobile div.flx div.text').slideToggle();
	})
	$('div#mobile div.average div.arrow').on('click',function(){
		$('div#mobile div.average div.text').slideToggle();
	})
	$(window).on('scroll',function(){
		if ($(window).scrollTop() > 10) {
			$('#social-bar').addClass('active');
		}else {
			$('#social-bar').removeClass('active');
		}
	})

})