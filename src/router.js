import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Result from './views/Result.vue';
import Search from './views/Search.vue';

Vue.use(Router)


export default new Router({
    mode: "history",
    routes: [
        { path: '/', component: Home },
        { path: '/result/:keyword', component: Result },
        { path: '/search', component: Search },
        { path: '*', redirect: '/' }
    ]
});


