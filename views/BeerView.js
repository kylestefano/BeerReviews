var BeerView = Backbone.View.extend({

  className: 'beer',

  events: {
    'click .remove': 'removeBeer',
    'click .edit': 'toggleEditInput',
    'keypress input.beer-name': 'editOnEnter'
  },



  template: Handlebars.compile($('#beer-template').html()),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  },

  removeBeer: function() {
    this.model.destroy()

  },

  toggleEditInput: function(beer) {
    this.$('.beer-name').toggleClass('edit-mode')
  },

  editOnEnter: function(e) {
    var editInputVal = this.$('input').val();
    if (e.which === 13 && editInputVal) {
      this.model.set('name', editInputVal)
    };
  }

});
