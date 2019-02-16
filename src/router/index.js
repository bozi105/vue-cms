import Vue from 'vue'
import Router from 'vue-router'

import homeComponent from "../pages/home"
import memberComponent from "../pages/member"
import shopcarComponent from "../pages/shopcar"
import searchComponent from "../pages/search"
import newsListComponent from "../pages/newsList"
import newsInfoComponnet from "../pages/newsInfo"
import photoListComponent from "../pages/photoList"
import goodsListComponent from "../pages/goodsList"

Vue.use(Router)

export default new Router({
    routes: [
        { path: "/", redirect: "/home" },
        { path: "/home", component: homeComponent },
        { path: "/member", component: memberComponent },
        { path: "/shopcar", component: shopcarComponent },
        { path: "/search", component: searchComponent },
        { path: "/home/newsList", component: newsListComponent },
        { path: "/home/newsInfo/:id", component: newsInfoComponnet },
        { path: "/home/photoList", component: photoListComponent },
        { path: "/home/goodsList", component: goodsListComponent }
    ],
    linkActiveClass: "mui-active"
})