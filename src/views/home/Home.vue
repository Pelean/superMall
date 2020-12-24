<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners" />
    <recommend-view :recommends="recommends" />
    <feature-view />
    <tab-control :titles="['流行', '新款', '精选']" />
    <h1>ee</h1>
    <h1>ee</h1>
    <h1>ee</h1>
    <h1>ee</h1>
    <h1>ee</h1>
    <h1>ee</h1>
    <h1>ee</h1>
    <h1>ee</h1>
    <h1>ee</h1>
    <h1>ee</h1>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import TabControl from 'components/content/tabControl/TabControl'

import HomeSwiper from './chlidComps/HomeSweiper'
import RecommendView from './chlidComps/RecommendView'
import FeatureView from './chlidComps/FeatureView'

import { getHomeMultidata } from "network/home"
import { getHomeGoods } from "network/home"

// import Swiper from 'components/common/swiper/Swiper'
// import SwiperItem from 'components/common/swiper/SwiperItem'
// import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: 'Home',
  components: {
    NavBar,
    TabControl,
    HomeSwiper,
    RecommendView,
    FeatureView
  },
  data () {
    return {
      banners: [],
      recommends: [],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      }
    };
  },
  created () {
    // 请求多个数据
    this.getHomeMultidata();

    // 请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods: {
    getHomeMultidata () {
      getHomeMultidata().then((res) => {
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods (type) {
      const page = this.goods[type].page +1
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        console.log(res) 
      })
    }
  }
};
</script>

<style scoped>
#home {
  padding-top: 44px;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
</style>