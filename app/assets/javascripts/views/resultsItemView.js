var ResultsItemView = Backbone.View.extend({
  initialize: function() {
    this.template = _.template($('#plain-template').html());
    this.render();
  },
  events: {
    'click button#save': 'save'
  },

  render: function() {
    var compiledView = this.template(this.model.attributes);
    this.$el.html(compiledView);
  },
  save: function() {
    this.model.save();
    this.$el.appendTo($('#saved-list'));
  }
});