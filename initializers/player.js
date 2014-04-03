exports.player = function(api, next) {
  api.player = {
    playerPrototype: function(data) {
      this.name = data.name;
      this.username = data.username;
      this.activeGames = [];
      this.endedGames = [];
      this.publicKey = [];
      this.secretKey = [];
    },
    createPlayer: function(player, callback) {
      api.db.get("players").insert(player, function(err, doc) {
        callback(err, doc);
      });
    },
  }

  next();
}
