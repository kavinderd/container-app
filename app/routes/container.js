import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find("container", params.container_id);
  },
  setupController: function(controller, context) {
    controller.set("model", context);
    this.controllerFor("container.posts").set("promise", context.get("posts"));
  }

});
