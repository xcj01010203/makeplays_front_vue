var Vue = require('vue');
var Resource = require('vue-resource');
var App = require('../tpl/index.vue');

var _mapping = require('../../../filters/mapping');
var _number = require('../../../filters/number');

Vue.use(Resource);

new Vue({
  el: 'body',
  components: {
    app: App
  }
});

Vue.filter('season', _mapping.season);
Vue.filter('shootstatus', _mapping.shootStatus);
Vue.filter('format', _number.format);