import comments from './src/comments.vue'
comments.install = function (Vue) {
    Vue.component(comments.name, comments);
};
export default comments