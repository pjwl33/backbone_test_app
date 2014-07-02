var SearchFormView = Backbone.View.extend({
  el: 'div#movie-search',
  events: { 'click button#search': 'searchMovies'},

  searchMovies: function() {
    var searchTitle = this.$('input').val();
    $('div#results-list').empty();
    var thanksHari = this;
    $.ajax({
      url: "http://www.omdbapi.com/?s=" + searchTitle,
      method: 'GET',
      dataType: 'JSON'
    }).done(function(data){
      var results = data.Search;
      for (var i = 0; i < results.length; i++) {
        $.ajax({
          url: "http://www.omdbapi.com/?i=" + results[i].imdbID,
          method: 'GET',
          dataType: 'json'
        }).done(function(data) {
          var movie = {title: data.Title, year: data.Year, plot: data.Plot, imdbID: data.imdbID};
          if (data.Poster == "N/A") {
            movie.poster = "http://placekitten.com/250/250";
          } else {
            movie.poster = data.Poster;
          }
          var movieItem = new MovieItem(movie);
          this.collection.add(movieItem);
        }.bind(thanksHari));
      }
    });
    this.$('#title').val('').focus();
  }

});