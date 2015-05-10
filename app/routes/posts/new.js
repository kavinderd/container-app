import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('post', {
    });
  },
  setupController: function(controller, model) {
    controller.set('container', this.modelFor('container'));
    controller.set('model', model);
  },
  actions: {
    save: function() {
      var _this = this;
      var container = this.get('controller').get('container').get('id');
      var mod = this.currentModel;
      this.store.find('container', container).then(function (container) {
        mod.set("can", container);
        console.log(mod.get("can"));
        mod.save().then(function() {
          _this.transitionTo('container', container);
        });
      });
    }
  }
});
