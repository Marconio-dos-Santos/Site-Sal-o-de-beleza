/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
const token = 'IGQVJYTnp6azBqQU1sSTFDa0hXeDQzRDRkdmp3Ry1FZA1dHV3R3Q3oya3pnNFI0UjcyYU9udFJMN3VqQUJfWm1MSVFYNWUtaC1LTmp5bm5WUFExTmFnV3ZADYV8tRXpXM05lUGJTaGVtYlZAKWkZACMU1HVAZDZD'
const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=media_url,media_type,caption,permalink`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.data[1].media_url)
		if(data.data[0].caption.includes('Reposição')){
			document.querySelector('#primeira').src = data.data[0].media_url
			document.querySelector('#primeirah2').innerText = 'Reposição'
			document.querySelector('#primeirap').innerText = data.data[0].caption
		}if(data.data[1].caption === 'promocao'){
			document.querySelector('#segunda').src = data.data[1].media_url
		}if(data.data[2].caption === 'promocao2'){
			document.querySelector('#terceira').src = data.data[2].media_url
		}
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#page-wrapper'),
		$banner = $('#banner'),
		$header = $('#header');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');
		else {

			breakpoints.on('>medium', function() {
				$body.removeClass('is-mobile');
			});

			breakpoints.on('<=medium', function() {
				$body.addClass('is-mobile');
			});

		}

	// Scrolly.
		$('.scrolly')
			.scrolly({
				speed: 1500,
				offset: $header.outerHeight()
			});

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right',
				target: $body,
				visibleClass: 'is-menu-visible'
			});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight() + 1,
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}

})(jQuery);