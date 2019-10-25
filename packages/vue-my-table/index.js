import vueMyTable from './src/vue-my-table.vue'
vueMyTable.install = function (Vue) {
    Vue.component(vueMyTable.name, vueMyTable);
};
export default vueMyTable