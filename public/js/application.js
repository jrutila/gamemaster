window.Gamemaster = Ember.Application.create();

//Gamemaster.ApplicationAdapter = DS.FixtureAdapter.extend();
DS.RESTAdapter.reopen({
  namespace: '/api',
});
