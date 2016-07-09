import Vue from 'vue';
import vueResource from 'vue-resource';
import VueRouter from 'vue-router';
import routerMap from './routers';
import Mint from 'mint-ui';
import App from './app.vue';
// const App = Vue.extend({});

import './assets/js/rem.js';
import filters from './filters';
Vue.use(vueResource);
Vue.use(VueRouter);
Vue.use(Mint);


//实例化Vue的filter
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));

const router = new VueRouter({
    hashbang: false  //取消路由中的/#!/,文档中是这么描述的
});

//登录中间验证，页面需要登录而没有登录的情况直接跳转登录
router.beforeEach((transition) => {
    if (transition.to.auth) {
        //todo: 判断是否登录
        if (localStorage.userId) {
            transition.next();
        } else {
            var redirect = encodeURIComponent(transition.to.path);
            transition.redirect('/login?redirect=' + redirect);
        }
    } else {
        transition.next();
    }
});
//
routerMap(router);
router.start(App, '#app');