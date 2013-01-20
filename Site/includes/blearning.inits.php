<script type="text/javascript">  

	jQuery(document).ready(function() {

		BL.siteContentMargin();
		BL.tweetsDisplayer();
		jQuery.scrollTo(0);
		BL.navigationSetup();
		BL.professorateFunctions();

	});

	jQuery(window).load(function() {

		jQuery(".reviews-cnt").mCustomScrollbar({
			scrollButtons:{
				enable: false
			}
		});

	});

</script>