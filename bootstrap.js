requirejs.config({
    baseUrl: './',
    paths: {
        Jquery: 'static/js/framework/jquery-1.7.2',
        Typed: 'static/js/plugins/typed',
        Director: 'static/js/plugins/director',
        Dragdealer: 'static/js/plugins/dragdealer',
        AppView: 'src/js/AppView',
        CoverView: 'src/js/CoverView'
    }
});

// START THE MAIN APP LOGIC
requirejs(['Jquery', 'Typed', 'Director', 'Dragdealer', 'AppView', 'CoverView'], function($) {

    // APP VIEW INITIALIZE
    AppView.initialize();
});
