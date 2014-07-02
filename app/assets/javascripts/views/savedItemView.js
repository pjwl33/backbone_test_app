var SavedItemView = Backbone.View.extend({
  initialize: function() {
    this.template = _.template($('#saved-movies').html());
    this.render();
  },
  render: function() {
    var compiledView = this.template(this.model.toJSON());
    this.$el.html(compiledView);
  }
});