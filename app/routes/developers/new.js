import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

export default Route.extend({
  model() {
    return EmberObject.create();
  },
  actions: {
    save(developer) {
      this.get('store').createRecord('developer', developer).save().then(() => this.transitionTo('developers'));
    },
    cancel () {
      this.transitionTo('developers');
    }
  }
});
