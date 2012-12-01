<script type="text/javascript">  

	jQuery(document).ready(function() {

		// Content limiter dinamic margin
		var navbarWidth = jQuery("#navbar").width();
		var navbarHeight = jQuery("#navbar").height();

		if (navbarWidth <= 400) {
			jQuery('#limiter-cnt').css('margin-top', Number(navbarHeight+34) + 'px');
		}
		else {
			jQuery('#limiter-cnt').css('margin-top', Number(navbarHeight+32) + 'px');
		}

		jQuery(window).resize(function() {
				navbarHeight = jQuery("#navbar").height();
				jQuery('#limiter-cnt').css('margin-top', Number(navbarHeight+32) + 'px');
		});

	});

	jQuery(window).load(function() {

		jQuery(".reviews-cnt").mCustomScrollbar({
			scrollButtons:{
				enable: false
			}
		});

		jQuery(function() {
			jQuery("#latestTweets").tweet({
				username: "blearningUNED",
				count: 4,
				loading_text: "Cargando tweets..."
			});
		});

	});

	/* BL.foo("bar"); */

</script>