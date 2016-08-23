import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model: function() {
    var key = config.myApiKey;
    var url = 'http://realtime.influenceexplorer.com/api//outside-spenders/?format=json&page=1&page_size=100&apikey=' + key;
    return Ember.$.getJSON(url).then(function(responseJSON){
      return responseJSON.results;
    });
  }
});
