var DetailedItemView = Backbone.View.extend({
  initialize: function() {
    this.template = _.template($('#detailed-template').html());
    this.render();
  },
  events: {
    'click button#save': 'save'
  },

  render: function() {
    $('#results-list').empty();
    var compiledView = this.template(this.model.attributes);
    $('#results-list').append(compiledView);
  },
  save: function() {
    this.model.save();
    this.$el.appendTo($('#saved-list'));
    //NEED TO FIX THIS PART TO HAPPEN FROM COLLECTION CALL
  }
});