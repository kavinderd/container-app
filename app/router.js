import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("login");
  this.resource("containers", function() {
    this.resource("container", {path: ":container_id" }, function(){
      this.resource("posts",  function() {
        this.resource("post",{ path: ":post_id"},  function() {});
        this.route("new");
      });
    });
    this.route("new");
  });

});

export default Router;
