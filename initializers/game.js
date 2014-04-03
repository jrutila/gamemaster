exports.game = function(api, next){
  api.game = {
    gamePrototype: function(data) {
      this.name = data.name;
      this.actions = [];
      this.created = new Date();
      this.players = [];
    },
    createGame: function(game, callback) {
      var games = api.db.get("games");
      games.insert(game, function(err, doc) {
        if (err) throw err;
        callback(err, doc);
      });
    },
    loadGames: function(callback) {
      callback(null, api.db.get("games").find());
    },
  }

  next();
}
