import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  code:DS.attr('string'),
  description:DS.attr('string'),
  developer: DS.belongsTo('developer'),
  project: DS.belongsTo('project',{inverse:'stories'}),
  tags: DS.hasMany('tag'),
  step: DS.belongsTo('step'),
  progress: DS.attr('number')
});
