import Vue from 'vue';

import indexApp from '../components/indexApp.vue';
import myui from '../package/myui.js';

Vue.use(myui);

new Vue({
	el: "#app",
	components: { indexApp }
})