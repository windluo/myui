import column from './column.vue';
import simpleTable from './simpleTable.vue';

export default function(Vue) {
  	Vue.component(column.name, column);
  	Vue.component(simpleTable.name, simpleTable);
};

export { column, simpleTable };