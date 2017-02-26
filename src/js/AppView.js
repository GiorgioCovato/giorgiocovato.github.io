var AppView = {
    $el : null,

    initialize : function() {
        this.$el = $('body');

        // VIEW INITIALIZE
        CoverView.initialize();

        // METHOD INITIALIZE
        this.bindEvents();
    },

    bindEvents : function() {

    }
};
