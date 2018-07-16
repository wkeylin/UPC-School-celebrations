<template>
    <div>
        <swiper :options="swiperOption" style="height: auto;width:100%;">
          <swiper-slide v-for="item in lunbolist"><router-link :to="{name:'Artical',params:{col:883,title:item.title}}"><img width="100%" :src="item.imgPath" alt=""></router-link></swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
        <div class="words_container">
            <div class="words">
                <img style="width:120px" src="../static/theme2.png" alt="">
                <img style="margin:0 205px;width:120px;" src="../static/theme1.png" alt="">
                <img style="width:120px;" src="../static/theme3.png" alt="">
            </div>
        </div>
        <div class="xqdt_container">
      <div class="xqdt">
        <img src="../static/xqdt.png" alt="">
        <router-link :to="{name:'List',params:{col:875}}"><img style="width:65px;height:23px;margin-top:10px;margin-left:20px;" src="../static/more-blue.png" alt=""></router-link>
        <div class="xqdt_content">
          <div class="xqdt_hot">
            <router-link :to="{name:'Artical', params: { title: xqdt[0].title,col:875}}">
              <img :src="xqdt[0].imgPath" alt="">
              <div class="hot_info">
                <p class="title" style="-webkit-box-orient: vertical;">{{xqdt[0].title}}</p>
                <span>{{xqdt[0].publishTime.split(" ")[0]}}</span>
                <img src="" alt="">
              </div>
            </router-link>
          </div>
          <div class="xqdt_list">
            <ul>
              <li v-for="(item,index) in xqdt" v-if="index>0 && index<7" :key="index" :class="index>2?'margintop':''">
                 <router-link :to="{name:'Artical', params: { title: item.title ,col:875}}">
                <img :src="item.mircImgPath" alt="">
                <div class="list_info">
                  <p class="title"  style="-webkit-box-orient: vertical;">{{item.title}}</p>
                  <span>{{item.publishTime.split(" ")[0]}}</span>
                  <img style="display:none" src="" alt="">
                </div>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="xqgg_container">
      <div class="xqgg">
        <img src="../static/xqgg.png" alt="">
        <router-link :to="{name:'List',params:{col:876}}"><img style="width:65px;height:23px;position:relative;top:-33px;left:110px;" src="../static/more-white.png" alt=""></router-link>
        <div class="banner">
          <div class="btn_left btn" @click="gg_toggle">
          </div>
          <div class="play_content">
            <ul ref="gg_transfrom" class="gg_transfrom">
              <li v-for="item in xqgg_list">
                 <router-link :to="{name:'Artical', params: { title: item.title ,col:876}}">
                <div class="artical">
                  <p class="art_title" style="-webkit-box-orient: vertical;">{{item.title}}</p>
                  <p class="desc" style="-webkit-box-orient: vertical;">{{item.summary}}</p>
                  <span>{{item.publishTime.split(" ")[0]}}</span>
                </div>
                </router-link>
              </li>
            </ul>
          </div>
          <div class="btn_right btn" @click="gg_toggle"></div>
        </div>
      </div>
    </div>
    <div class="fhs_container">
      <div class="fhs">
        <div class="xyfc fhs_item">
          <div class="xyfc_logo">
            <img src="../static/xyfc.png" alt="">
            <router-link class="more" :to="{name:'List',params:{col:877}}"></router-link>
          </div>
          <div class="list_container xyfc_animation" style="background-color:white;">
            <div class="xyfc_hot">
              <router-link :to="{name:'Artical', params: { title: xyfc[0].title ,col:877}}">
              <img :src="xyfc[0].mircImgPath" alt="">
                <div class="xyfc_info">
                  <p class="xyfc_title"  style="-webkit-box-orient: vertical;">{{xyfc[0].title}}</p>
                  <p class="xyfc_desc" style="-webkit-box-orient: vertical;">{{xyfc[0].summary}}</p>
                </div>
              </router-link>
            </div>
            <div class="xyfc_list">
              <ul>
                <li v-for="(item,index) in xyfc" v-if="index > 0&& index <9"> <router-link :to="{name:'Artical', params: { title: item.title ,col:877}}"><span class="mark"></span>{{item.title}}</router-link></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="xyfc" style="margin:0 20px;">
          <div class="xyfc_logo">
            <img src="../static/xyhd.png" alt="">
            <router-link class="more" :to="{name:'List',params:{col:878}}"></router-link>
          </div>
          <div class="list_container">
            <div class="xyhd_item" v-for="(item,index) in xyhd" :key="index" v-if="index<2">
               <router-link :to="{name:'Artical', params: { title: item.title ,col:878}}">
                <img :src="item.mircImgPath" alt="">
                <div class="xyhd_hover">
                  <div class="hover_line">{{item.title}}</div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="xyfc">
          <div class="xyfc_logo">
            <img src="../static/xqsp.png" alt="">
            <router-link class="more" :to="{name:'List',params:{col:882}}"></router-link>
          </div>
          <div class="list_container xqsp xyfc_animation"  style="background-color:white;">
            <router-link :to="{name:'Vedio', params: { title: xqsp[0].title ,col:882}}">
            <img :src="xqsp[0].mircImgPath" alt="">
            <div class="xqsp_info">
              <div class="vedio"></div>
              <div class="xqsp_title">{{xqsp[0].title}}</div>
            </div>
            </router-link>
          </div>
        </div>
        <div class="yxmb">
          <div class="yxmb_title">
            <img class="yxmb_logo" src="../static/yxsd.png" alt="">
            <span :class="pic_showClass?'yxmb_active':''" @click="qiehuan('yx')">印象石大</span>
            <span :class="!pic_showClass?'yxmb_active':''" @click="qiehuan('mb')">石光漫步</span>
            <router-link class="more" v-if="pic_showClass" :to="{name:'Listpic',params:{col:879}}"><img class="yxmb_more" src="../static/more-blue.png" alt=""></router-link>
            <router-link class="more" v-if="!pic_showClass" :to="{name:'Manbu',params:{col:880}}"><img class="yxmb_more" src="../static/more-blue.png" alt=""></router-link>
          </div>
          <div class="yxmb_container">
            <div class="yxmb_out" ref="yxmb_transform">
              <div v-show="pic_showClass" style="height:580px;">
                <vue-waterfall-easy :width="855" :imgsArr="imgsArr" :width="1240" :srcKey="'mircImgPath'" :isRouterLink=true>
                    <div class="img-info" slot-scope="props">
                      <div class="img_title">{{props.value.title}}</div>
                    </div>
                </vue-waterfall-easy>
              </div>
              <div v-show="!pic_showClass" style="height:580px;">
                <vue-waterfall-easy :width="855" :imgsArr="sgmb" :width="1240" :srcKey="'mircImgPath'" :isRouterLink=true>
                    <div class="img-info" slot-scope="props">
                      <div class="img_title">{{props.value.title}}</div>
                    </div>
                </vue-waterfall-easy>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
</template>
<script>
import vueWaterfallEasy from "vue-waterfall-easy";
import api from "@/api/api.js";
import {list} from "@/util/index.js"

export default {
  name: "Index",
  data() {
    return {
      xqdt: [],
      xyfc: [],
      xyhd: [],
      xqsp: [],
      sgmb: [],
      imgsArr: [],
      lunbolist: [],
      xqgg_list: [],
      pic_showClass: true,
      swiperOption: {
        autoHeight: true,
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  methods: {
    qiehuan(val) {
      if (val === "yx") {
        this.pic_showClass = true;
        this.sgmb = [];
      } else {
        this.pic_showClass = false;
        api.list(880, 1).then(data => {
          this.sgmb = data.data;
          console.log(data);
          this.sgmb.forEach(item => {
            item.href = {
              name: "Artical",
              params: { col: 880, title: item.title }
            };
          });
        });
      }
    },
    gg_toggle(e) {
      if (this.xqgg_list.length > 4) {
        if (e.target.className === "btn_right btn") {
          this.$refs.gg_transfrom.className = "xqgg_transition";
        } else {
          this.$refs.gg_transfrom.className = "gg_transfrom";
        }
      } else {
        console.log("不能");
      }
    }
  },
  mounted() {
    list(875, 1).then(data => {
      console.log(data);
      this.xqdt = data;
    });
    api.list(876, 1).then(data => {
      this.xqgg_list = data.data;
    });
    api.list(877, 1).then(data => {
      this.xyfc = data.data;
    });
    api.list(878, 1).then(data => {
      this.xyhd = data.data;
    });
    api.list(882, 1).then(data => {
      this.xqsp = data.data;
    });
    list(883, 1).then(data => {
      this.lunbolist = data;
    });
    api.list(879, 1).then(data => {
      this.imgsArr = data.data;
      console.log(data);
      this.imgsArr.forEach(item => {
        item.href = {
          name: "Artical",
          params: { col: 879, title: item.title  }
        };
      });
    });
  },
  components: {
    vueWaterfallEasy
  }
};
</script>

