import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    pageReturn() {
        this.sendAction('pageReturn');
    }
  }
});
