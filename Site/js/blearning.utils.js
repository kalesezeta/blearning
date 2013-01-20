/** 
 * ==================================================
 *  B-LEARNING UTILS
 * --------------------------------------------------
 *  @project: B-learning Curso de Experto 2012/2013
 *   @author: Fernando Calés Valencia
 *     @file: blearning.utils.js
 *     @type: Utils
 * ==================================================
 **/

/**
 * Set global namespace
 * BL = B-learning
 */

var BL = {};



/**
 * Content limiter dinamic margin
 */

BL.siteContentMargin = function () {

	var navbarWidth = jQuery("#navbar").width();
	var navbarHeight = jQuery("#navbar").height();

	jQuery("#limiter-cnt").css("margin-top", Number(navbarHeight+32) + 'px');

	jQuery(window).resize(function() {
		navbarHeight = jQuery("#navbar").height();
		jQuery("#limiter-cnt").css("margin-top", Number(navbarHeight+32) + 'px');
	});

};



/**
 * Navigation setup
 */

BL.navigationSetup = function () {

	var page = jQuery("html, body");

	jQuery(".lst-navbar a").each(function() {

		jQuery(this).click(function(e) {

			var _target = jQuery(this);
			var target = _target.attr("href");
			var targetPos = jQuery(target).offset().top;

			page.stop().scrollTo(targetPos + -100, 500, {easing:"easeOutQuart"});
			e.preventDefault();

		});

	});

	jQuery(".menu_btn a").click	(function(e) {

		jQuery(".lst-mob-navbar").slideToggle(500, "easeOutQuart");
		if (jQuery(this).hasClass("active")) {
			jQuery(this).removeClass("active");
		}
		else {
			jQuery(this).addClass("active");
		}
		e.preventDefault();

	});

	jQuery(".lst-mob-navbar a").each(function() {

		jQuery(this).click(function(e) {

			var _target = jQuery(this);
			var target = _target.attr("href");
			var targetPos = jQuery(target).offset().top;

			page.stop().scrollTo(targetPos + -100, 500, {easing:"easeOutQuart"});
			jQuery(".lst-mob-navbar").slideToggle(500, "easeOutQuart", function(){
				jQuery(".menu_btn a").removeClass("active");
			});
			e.preventDefault();

		});

	});

};



/**
 * Professorate functions
 */


BL.professorateFunctions = function () {

	jQuery('.pro-item').each(function(i, el){

		jQuery(this).colorbox({inline:true, fixed:true});

		jQuery(this).qtip({
			content: jQuery(this).attr("pro-name"),
			style: {
				classes: 'ui-tooltip-bl',
				tip: {
					corner: true,
					width: 8,
					height: 8
				}
			},
			position: {
				target: 'mouse',
				viewport: jQuery('.grp-professorate'),
				adjust: {
					x: 15, y: 15
				}
			},
		    show: {
		        effect: function(offset) {
		            jQuery(this).fadeIn(150);
		        }
		    },
		    hide: {
		        effect: function(offset) {
		            jQuery(this).fadeOut(150);
		        }
		    }
		});

	});

};



/**
 * Tweets displayer
 */

BL.tweetsDisplayer = function () {

	// Tweets display
	jQuery(function() {

		jQuery("#latestTweets").tweet({
			username: "blearningUNED",
			count: 4,
			loading_text: "Cargando Tweets..."
		});

	});

	// Tweets truncator
	var tweetsTruncator = function(){

		if (jQuery(".tweet_text").length != 0) {
			jQuery(".tweet_text").each(function() {
				jQuery(this).trunk8({
					lines: 3,
					side: "center"
				});
			}).promise().done(function() {
				clearInterval(tweetsTrunk8Int);
			})
		}

	};

	var tweetsTrunk8Int = setInterval(tweetsTruncator, 250);

};



/**
 * Util name
 */

/*
BL.foo = function (jObj) {

	bar

};
*/



/* EOF */