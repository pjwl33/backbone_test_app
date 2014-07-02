var AppRouter = Backbone.Router.extend({
  routes: {'movies/:id': 'show', '': 'index'},

  initialize: function() {
    this.collection = new MovieCollection();
    this.savedCollection = new MovieCollection();
    this.resultsListView = new ResultsListView({collection: this.collection});
    this.savedListView = new SavedListView({collection: this.savedCollection});
    this.searchFormView = new SearchFormView({collection: this.collection});
  },

  start: function() {
    Backbone.history.start();
  },

  index: function() {
    this.savedCollection.fetch({
      success: function() {
        $('#saved-list').html(this.savedListView.el);
      }.bind(this)
    });
  },

  show: function(id) {
    for(var i = 0; i < this.collection.length; i++) {
      var movieID = this.collection.models[i].get('imdbID');
      if (id === movieID) {
        var detailedMovie = new DetailedItemView({model: this.collection.models[i]});
        $(detailedMovie.el).appendTo($('#results-list'));
      }
    }
  }

});