var ResultsListView = Backbone.View.extend({
  //why does this el need to be defined but not the saved lists?
  el: '#results-list',
  initialize: function() {
    this.listenTo(this.collection, 'add', this.addOne);
    this.listenTo(this.collection, 'remove', this.remove);
    this.addAll();
  },
  addAll: function() {
    this.$el.empty();
    this.collection.each(this.addOne, this);
  },
  addOne: function(movieModel) {
    var movieView = new ResultsItemView({ model: movieModel });
    $(movieView.el).appendTo(this.$el);
  },
  remove: function(movieModel) {
    this.$el.remove(movieModel.$el);
  }
});