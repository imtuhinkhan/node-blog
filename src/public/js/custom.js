jQuery.noConflict();

jQuery(document).ready(function(){

    "use strict";


    // countdow for product event
    if( jQuery('.tzCountdown').length > 0 ){
        var austDay = new Date();
        austDay = new Date(2015, 8 - 1, 26);
        jQuery('#defaultCountdown').countdown({until: austDay});
    }


    // search
    jQuery('.tz-button-search').click(function(){
       jQuery('.tz-form-search').toggleClass('input-width');
    });

    // Breaking
    jQuery(".tz-breaking-content").owlCarousel({
        items : 1,
        itemsDesktop : [1199, 1],
        itemsDesktopSmall : [979, 1],
        itemsTablet : [768, 1],
        itemsTabletSmall : false,
        itemsMobile : [479, 1],
        slideSpeed:500,
        paginationSpeed:800,
        rewindSpeed:1000,
        autoPlay:false,
        stopOnHover: false,
        singleItem:false,
        rewindNav:false,
        pagination:false,
        paginationNumbers:false,
        itemsScaleUp:false
    });
    jQuery(".breaking-prev").click(function(){
        jQuery(".tz-breaking-content").trigger('owl.prev');
    }) ;
    jQuery(".breaking-next").click(function(){
        jQuery(".tz-breaking-content").trigger('owl.next');
    }) ;

    // Breaking
    jQuery(".featured-post").owlCarousel({
        items : 1,
        itemsDesktop : [1199, 1],
        itemsDesktopSmall : [979, 1],
        itemsTablet : [768, 1],
        itemsTabletSmall : false,
        itemsMobile : [479, 1],
        slideSpeed:500,
        paginationSpeed:800,
        rewindSpeed:1000,
        autoPlay:false,
        stopOnHover: false,
        singleItem:false,
        rewindNav:false,
        pagination:false,
        paginationNumbers:false,
        itemsScaleUp:false
    });
    jQuery(".breaking-prev").click(function(){
        jQuery(".tz-breaking-content").trigger('owl.prev');
    }) ;
    jQuery(".breaking-next").click(function(){
        jQuery(".tz-breaking-content").trigger('owl.next');
    }) ;

    // ads
    jQuery(".slider-ads").owlCarousel({
        items : 1,
        itemsDesktop : [1199, 1],
        itemsDesktopSmall : [979, 1],
        itemsTablet : [768, 1],
        itemsTabletSmall : false,
        itemsMobile : [479, 1],
        slideSpeed:500,
        paginationSpeed:800,
        rewindSpeed:1000,
        autoPlay:false,
        stopOnHover: false,
        singleItem:false,
        rewindNav:false,
        pagination:false,
        paginationNumbers:false,
        itemsScaleUp:false
    });
    jQuery(".prev-ads").click(function(){
        jQuery(".slider-ads").trigger('owl.prev');
    }) ;
    jQuery(".next-ads").click(function(){
        jQuery(".slider-ads").trigger('owl.next');
    }) ;

    // Slider post
    jQuery(".slider-post2").owlCarousel({
        items : 2,
        itemsDesktop : [1199, 2],
        itemsDesktopSmall : [979, 2],
        itemsTablet : [768, 2],
        itemsTabletSmall : false,
        itemsMobile : [479, 1],
        slideSpeed:500,
        paginationSpeed:800,
        rewindSpeed:1000,
        autoPlay:false,
        stopOnHover: false,
        singleItem:false,
        rewindNav:false,
        pagination:false,
        paginationNumbers:false,
        itemsScaleUp:false
    });
    jQuery(".prev-post").click(function(){
        jQuery(".slider-post2").trigger('owl.prev');
    }) ;
    jQuery(".next-post").click(function(){
        jQuery(".slider-post2").trigger('owl.next');
    }) ;

    // Slider post
    jQuery(".slider-post3").owlCarousel({
        items : 3,
        itemsDesktop : [1199, 3],
        itemsDesktopSmall : [979, 2],
        itemsTablet : [768, 2],
        itemsTabletSmall : false,
        itemsMobile : [479, 1],
        slideSpeed:500,
        paginationSpeed:800,
        rewindSpeed:1000,
        autoPlay:false,
        stopOnHover: false,
        singleItem:false,
        rewindNav:false,
        pagination:false,
        paginationNumbers:false,
        itemsScaleUp:false
    });
    jQuery(".prev-post").click(function(){
        jQuery(".slider-post3").trigger('owl.prev');
    }) ;
    jQuery(".next-post").click(function(){
        jQuery(".slider-post3").trigger('owl.next');
    }) ;

    // Slider post
    jQuery(".slider-vertical").owlCarousel({
        items : 1,
        itemsDesktop : [1199, 1],
        itemsDesktopSmall : [979, 1],
        itemsTablet : [768, 1],
        itemsTabletSmall : false,
        itemsMobile : [479, 1],
        slideSpeed:700,
        paginationSpeed:800,
        rewindSpeed:1000,
        autoPlay:false,
        stopOnHover: false,
        singleItem:false,
        rewindNav:false,
        pagination:false,
        paginationNumbers:false,
        itemsScaleUp:false
    });
    jQuery(".prev-vertical").click(function(){
        jQuery(".slider-vertical").trigger('owl.prev');
    }) ;
    jQuery(".next-vertical").click(function(){
        jQuery(".slider-vertical").trigger('owl.next');
    }) ;


});

jQuery(window).bind('load',function(){

    "use strict";

    if( jQuery('.tzcontent').length > 0 ){
        jQuery('.tzcontent, .tzsidebar').theiaStickySidebar({
            // Settings
            additionalMarginTop: 30
        });
    }


});

jQuery(window).bind('load resize',function(){

    "use strict";
    /* Method for parallax */
    jQuery('.parallax').each(function () {
        jQuery(this).parallax("30%", 0.1);
    });


});