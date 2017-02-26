var CoverView = {
    $el : null,
    parentView: null,

    initialize : function() {
        this.parentView = AppView;
        this.$el = $('.cover');

        // METHOD INITIALIZE
        this.bindEvents();
        this.showText();
    },

    scrollSection : function() {
        var scrollY = $('section').height();

        $('html, body').stop().animate({
            scrollTop: scrollY
        }, 1000 );
    },

    changeColorHeader : function() {
        var _cover = this.$el.height(),
            wHeight = $(window).scrollTop();
        if ( wHeight >= _cover ) {
            this.$el.find('header nav ul li a').css('color', '#000000');
            this.$el.find('header nav .menu-trigger span').css('background-color', '#000000');
            this.$el.find('header nav .menu-trigger i').css('background-color', '#000000');
        } else {
            this.$el.find('header nav ul li a').css('color', '#FFFFFF');
            this.$el.find('header nav .menu-trigger span').css('background-color', '#FFFFFF');
            this.$el.find('header nav .menu-trigger i').css('background-color', '#FFFFFF');
        }
    },

    showMenu : function(evt) {
        this.$el.find('#menu ul li').toggleClass('open');
        this.$el.find('#menu .section-nav').toggleClass('open');
        $(evt.currentTarget).toggleClass('z-index');
        this.$el.find('header nav .menu-trigger span').toggleClass('rotate-due');
        this.$el.find('header nav .menu-trigger i').toggleClass('rotate');
    },

    showText : function() {
        this.$el.find('.text h1, .text h2, .text h3').addClass('show');
    },

    closeMenu : function(evt) {
        var menu = $('#menu ul li').removeClass('open');
        this.parentView.scrollSection();
    },

    bindEvents : function() {
        $(window).on('scroll', $.proxy( this.changeColorHeader, this) );
        this.$el.find('.trigger-section').on('click', $.proxy( this.scrollSection, this));
        this.$el.find('.menu-trigger').on('click', $.proxy( this.showMenu, this ) );
        this.$el.find('#menu ul li').on('click', $.proxy( this.closeMenu, this ) );
    }
};
