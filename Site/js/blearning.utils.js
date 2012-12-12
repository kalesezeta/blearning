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

	var page = jQuery('html, body');

	jQuery(".lst-navbar a").each(function() {

		jQuery(this).click(function(e) {

			var _target = jQuery(this);
			var target = _target.attr("href");
			var targetPos = jQuery(target).offset().top;

			page.stop().scrollTo(targetPos + -100, 500, {easing:'easeOutQuart'});
			e.preventDefault();

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