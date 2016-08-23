import Ember from 'ember';

export default Ember.Route.extend({
   actions: {
     pageReturn() {
       this.transitionTo('results');
     }
   }
});
