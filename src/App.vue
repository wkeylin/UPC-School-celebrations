<template>
  <div>
    <div class="head">
      <div class="head_container">
        <img src="../static/school-logo.png" alt="">
        <div class="logo">
          <img src="../static/logo3.png" alt="">
          <div class="weilei"></div>
        </div>
        <div class="countdown"><img style="width:143px;" src="../static/day1.png" alt=""><span>{{Days}}</span><img style="height:30px;" src="../static/day2.png" alt=""></div>
      </div>
    </div>
    <div :class="navBarFixed == true ? 'fixed' :'nav_container'">
      <div class="nav">
        <div class="list" ref="nav_list">
          <ul class="ul1">
            <li v-for="(item,index) in nav_lists" v-if="index <= 4" :key="index">
              <router-link :class="!navBarFixed?'color-black':'color-white'" :to="item.url">{{item.name}}</router-link>
            </li>
          </ul>
          <img :class="navBarFixed?'logofixed':'logonofixed'" src="../static/college-logo.png" alt="">
          <ul class="ul2">
            <li v-for="(item,index) in nav_lists" v-if="index > 4 && index< 9" :key="index">
              <router-link :class="!navBarFixed?'color-black':'color-white'" :to="item.url">{{item.name}}</router-link>
            </li>
            <li :class="!navBarFixed?'color-black':'color-white'" v-for="(item,index) in nav_lists" v-if="index === 7" :key="index">
              <a :class="!navBarFixed?'color-black':'color-white'" :href="item.url">{{item.name}}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <transition name="slide-fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <div class="footer_container">
      <div class="footer">
        <img src="../static/footer.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import moment from "moment";
export default {
  name: "App",
  data() {
    return {
      navBarFixed: false,
      childItem: false,
      nav_lists: [
        {
          name: "首页",
          url: "/",
          child: false
        },
        {
          name: "校庆动态",
          url: { name: "List", params: { col: 875 } },
          child: false
        },
        {
          name: "校庆公告",
          url: { name: "List", params: { col: 876 } },
          child: false
        },
        {
          name: "校友风采",
          url: { name: "List", params: { col: 877 } },
          child: false
        },{
          name: "校友撰文",
          url: { name: "List", params: { col: 891 } },
          child: false
        },
        {
          name: "校友活动",
          url: { name: "List", params: { col: 878 } },
          child: false
        },
        {
          name: "印象石大",
          url: { name: "Listpic", params: { col: 879 } },
          child: false
        },
        {
          name: "石光漫步",
          url: { name: "Manbu", params: { col: 880 } },
          child: false
        },
        {
          name: "我要捐赠",
          url: "http://fund.upc.edu.cn/",
          child: false
        }
      ]
    };
  },
  methods: {
    watchScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 160) {
        this.navBarFixed = true;
      } else {
        this.navBarFixed = false;
      }
    },
    DateDifference() {
      if (moment('2018/10/01', 'YYYY/MM/DD') > _.now())
      return _.ceil(_.divide(moment('2018/10/01', 'YYYY/MM/DD') - _.now(), (1000 * 60 * 60 * 24)));
      else return 0;
    }
  },
  computed:{
    Days(){
      return this.DateDifference();
    }
  },
  mounted() {
    window.addEventListener("scroll", this.watchScroll);
  }
};
</script>

<style>
@import "./assets/main.css";
.slide-fade-enter-active {
  transition: all 1.3s ease;
}
.slide-fade-leave-active {
  transition: all .0s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateX(50px);
  opacity: 0;
}
</style>
