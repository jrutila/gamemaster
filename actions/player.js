exports.action = {
  name:                   'createPlayer',
  description:            'Create a new player',
  blockedConnectionTypes: [],
  outputExample:          {},
  matchExtensionMimeType: false,
  version:                1.0,
  toDocument:             true,

  inputs: {
    required: ["name", "username"],
    optional: ["publicKey"],
  },

  run: function(api, connection, next){
    var player = new api.player.playerPrototype(connection.params);
    api.player.createPlayer(player, function(err, model) {
      connection.error = err;
      connection.response.model = model;
      next(connection, true);
    });
  }
};
