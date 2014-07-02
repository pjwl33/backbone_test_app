var SavedListView = Backbone.View.extend({
  initialize: function() {
    this.addAll();
    this.listenTo(this.collection, 'add', this.addOne);
  },
  addAll: function() {
    this.$el.empty();
    this.collection.each(this.addOne, this);
  },
  addOne: function(movieModel) {
    var savedMovieView = new SavedItemView({ model: movieModel });
    $(savedMovieView.el).appendTo(this.$el);
  }
});