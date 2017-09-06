var Vue = require('vue');
var Resource = require('vue-resource');
var App = require('../tpl/index.vue');

Vue.use(Resource);

new Vue({
  el: 'body',
  components: {
    app: App
  }
});