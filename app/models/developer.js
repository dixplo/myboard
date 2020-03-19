import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  identity:DS.attr('string'),
  projects: DS.hasMany('project',{inverse:'owner'})
});
