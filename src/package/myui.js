import column from './simpleTable/column.vue';
import simpleTable from './simpleTable/simpleTable.vue';
import mybutton from './mybutton/mybutton.vue';
import selectBox from './selectBox/selectBox.vue';
import regionPick from './regionPick/regionPick.vue';

export default function(Vue) {
	Vue.component(mybutton.name, mybutton);
  Vue.component(column.name, column);
  Vue.component(simpleTable.name, simpleTable);
  Vue.component(selectBox.name, selectBox);
  Vue.component(regionPick.name, regionPick);
};

export { mybutton, column, simpleTable, selectBox, regionPick };