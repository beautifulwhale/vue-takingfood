import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '@/pages/Msite/Msite'
import Order from '@/pages/Order/Order'
import Profile from '@/pages/Profile/Profile'
import Search from '@/pages/Search/Search'
import Login from '@/pages/Login/Login'
import ShopGoods from '@/pages/Shop/ShopGoods/ShopGoods'
import ShopInfo from '@/pages/Shop/ShopInfo/ShopInfo'
import ShopRatings from '@/pages/Shop/ShopRatings/ShopRatings'
import shop from '@/pages/Shop/shop'
Vue.use(VueRouter);

export default new VueRouter( {
    routes:[
        {
            path: '/msite',
            component: Msite,
            meta:{
                showFooter:true
            }
        },
        {
            path: '/order',
            component: Order,
            meta:{
                showFooter:true
            }
        },
        {
            path: '/profile',
            component: Profile,
            meta:{
                showFooter:true
            }
        },
        {
            path: '/search',
            component: Search,
            meta:{
                showFooter:true
            }
        },
        {
            path: '/',
            redirect: '/msite'
        },
        {
            path:'/login',
            component:Login
        },
        {
            path:'/shop',
            component:shop,
            children:[
                {
                    path:'/shop/goods',
                    component:ShopGoods
                },
                {
                    path:'/shop/ratings',
                    component:ShopRatings
                },{
                    path:'/shop/info',
                    component:ShopInfo
                },
                {
                    path:'',
                    redirect:'/shop/goods'
                }
            ]
        }
    ]
}
)





