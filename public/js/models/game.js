Gamemaster.Game = DS.Model.extend({
  title: DS.attr('string'),
  isActive: DS.attr('boolean'),
});

Gamemaster.Game.FIXTURES = [
{
  id: 1,
  title: "RuneQuest PbF",
  isActive: true,
},
{
  id: 2,
  title: "HeroQuest PbF",
  isActive: false,
},
];
