import column from './simpleTable/column.vue';
import simpleTable from './simpleTable/simpleTable.vue';
import mybutton from './mybutton/mybutton.vue';

export default function(Vue) {
	Vue.component(mybutton.name, mybutton);
  	Vue.component(column.name, column);
  	Vue.component(simpleTable.name, simpleTable);
};

export { mybutton, column, simpleTable };