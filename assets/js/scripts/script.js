$(document).ready(function() {



    // reglages des effets en fonction de la resolution d'ecran

    largeur = $(window).width(); //si ecran large, on utilise le parallax
    if (largeur > 600) {
        AOS.init({
            duration: 1200,
        });
        var s = skrollr.init();
    };

    // -------------------------------------------------------------
    // Progress Bar
    // -------------------------------------------------------------

    $('#skill').bind('inview', function(event, visible, visiblePartX, visiblePartY) {

        if (visible) {
            $.each($('.progress-bar'), function() {
                $(this).css('width', $(this).attr('aria-valuenow') + '%');
            });
            $(this).unbind('inview');
        }

        // -------------------------------------------------------------
        // More skill
        // -------------------------------------------------------------
        $('.more-skill').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
            if (visible) {
                percent = jQuery(this.el).attr('data-percent');
                $('.chart').easyPieChart({

                    //your configuration goes here
                    easing: 'easeOut',
                    delay: 3000,
                    barColor: '#00B0BD',
                    trackColor: 'rgba(255,255,255,0.1)',
                    scaleColor: false,
                    lineWidth: 10,
                    size: 140,
                    animate: 2000,
                    // animate the numbers
                    onStep: function(value) {
                        this.$el.find('span.percent').text(Math.round(value));
                    },
                    onStop: function(value, to) {
                        this.$el.find('span.percent').text(Math.round(to));
                    }

                });
                $(this).unbind('inview');
            }
        });
    });

    /* $('#preloader').hide(); /*je cache le loader après le chargement de la page*/
    $('#preloader').delay(3000).fadeOut(200);
});