import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord("container");
  },
  actions: {
    save: function() {
      var _this = this;
      var mod = this.currentModel;
      mod.save().then(function(){
        _this.transitionTo('container', mod)
      });
    }
  }
});
