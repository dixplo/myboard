import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  order:DS.attr('number'),
  title: DS.attr('string'),
  stories:DS.hasMany('story',{inverse:'step'})
});
