<script type="text/javascript">  

	jQuery(document).ready(function() {

		BL.siteContentMargin();
		BL.tweetsDisplayer();


		jQuery('.lst-navbar').onePageNav({
			begin: function() {
				console.log('start');
			},
			end: function() {
				console.log('stop');
			},
			scrollOffset: 100
		});

	});

	jQuery(window).load(function() {

		jQuery(".reviews-cnt").mCustomScrollbar({
			scrollButtons:{
				enable: false
			}
		});

	});

</script>