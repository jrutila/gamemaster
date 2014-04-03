exports.action = {
  name:                   'saveGame',
  description:            'Create a new game',
  blockedConnectionTypes: [],
  outputExample:          {},
  matchExtensionMimeType: false,
  version:                1.0,
  toDocument:             true,

  inputs: {
    required: ["name"],
    optional: [],
  },

  run: function(api, connection, next){
    var game = new api.game.gamePrototype(connection.params);
    api.game.createGame(game, function(err, model) {
      connection.error = err;
      connection.response.model = model;
      next(connection, true);
    });
  }
};

exports.action = {
  name:                   'viewGames',
  description:            'View all active games',
  blockedConnectionTypes: [],
  outputExample:          {},
  matchExtensionMimeType: false,
  version:                1.0,
  toDocument:             true,

  inputs: {
    required: [],
    optional: ["showPassive"],
  },

  run: function(api, connection, next){
    api.game.loadGames(function(err, model) {
      connection.error = err;
      connection.response.games = model;
      next(connection, true);
    });
  }
};
