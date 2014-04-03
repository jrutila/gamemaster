Gamemaster.Router.map(function() {
  this.resource('games', { path: '/' });
});

Gamemaster.GamesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find("game");
  }
});
