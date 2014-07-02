var MovieCollection = Backbone.Collection.extend({
  url: '/movies',
  model: MovieItem
});
