<template>
    <section class="list">
		<!-- 左侧边栏 -->
		<div class="sidebar">
			<div class="subnav">
				<img src="../static/locate.png" alt="">
				<p>当前位置：<span>校庆</span><span>>></span><span>{{colName.name}}</span></p>
			</div>
			<div class="subtitle">
				<p>{{colName.name}}</p>
			</div>
			<img src="../static/img7.jpg" alt="">
		</div>
		<!-- 新闻列表 -->
		<div class="column" v-bind:style="{height:Eheight+'px'}">
			<vue-waterfall-easy  :isRouterLink=true :imgsArr="list" :width="855" :srcKey="'mircImgPath'" ref="picList" class="picList">
        <div class="img-info" slot-scope="props">
          <div class="img_title">{{props.value.title}}</div>
        </div>
      </vue-waterfall-easy>
		</div>
    <div class="current">
        <el-row>
          <el-button @click="pageLess">上一页</el-button>
          <el-button @click="pageAdd">下一页</el-button>
        </el-row>
        <p>{{page}}/{{pageCount}}</p>
    </div>
	</section>
</template>
<script>
import api from "@/api/api.js";
import vueWaterfallEasy from "vue-waterfall-easy";
import _ from "lodash";
export default {
  data() {
    return {
      page: 1,
      pageCount: 0,
      list: [],
      col: this.$route.params.col,
      colName: "",
      navList: [],
      Eheight: 800
    };
  },
  methods: {
    pageAdd() {
      if (this.page < this.pageCount) {
        this.page++;
        this.getData();
      } else {
        alert("后面没有啦");
      }
    },
    pageLess() {
      if (this.page > 1) {
        this.page--;
        this.getData();
      } else {
        alert("已经是第一页啦");
      }
    },
    updateTitle() {
      this.col = this.$route.params.col;
      this.colName = this.navList.filter(item => {
        return item.id === parseInt(this.$route.params.col);
      })[0];
    },
    getData() {
      api.list(this.$route.params.col, this.page).then(data => {
        this.pageCount = data.pageCount;
        this.list = data.data;
        this.list.forEach(item => {
          item.href = {
            name: "Artical",
            params: { col: this.col, title: item.title }
          };
        });
      });
    }
  },
  watch: {
    $route(to, from) {
      this.page = 1;
      this.updateTitle();
      this.getData();
    }
  },
  mounted() {
    this.getData();
    api.nav().then(data => {
      this.navList = data;
      this.colName = this.navList.filter(item => {
        return item.id === parseInt(this.col);
      })[0];
    });
  },
  components: {
    vueWaterfallEasy
  }
};
</script>
<style scoped>
.vue-waterfall-easy-scroll {
  display: table;
}
.img-info {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  opacity: 0;
  background-color: rgba(153, 153, 255, 0.7);
  transition: all 0.45s ease;
  cursor: pointer;
}
a.alink.img-inner-box {
  position: relative;
}
.vue-waterfall-easy-container .vue-waterfall-easy a.img-inner-box {
  position: relative;
}
.img-info:hover {
  opacity: 1;
}
.img_title {
  width: 100px;
  height: 50px;
  border-top: 2px solid white;
  border-bottom: 2px solid white;
  margin: 0 auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  line-height: 50px;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}
* {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}
.list,
.content {
  width: 1280px;
  margin: 0 auto;
  overflow: hidden;
}
/*左侧边栏css start*/

/*subnav css start*/
.sidebar {
  width: 237px;
  height: 525px;
  float: left;
}
.sidebar .subnav {
  width: 100%;
  height: 24px;
  position: relative;
  line-height: 24px;
}
.sidebar .subnav:after {
  content: "";
  width: 100%;
  height: 2px;
  background-color: #bfbfbf;
  position: absolute;
  top: 33px;
}
.sidebar .subnav img {
  height: 24px;
  float: left;
  margin-right: 12px;
}
.sidebar .subnav p {
  font-size: 14px;
}
.sidebar .subnav p span:nth-child(1) {
  margin-left: 4px;
}
.sidebar .subnav p span:nth-child(1),
.sidebar .subnav p span:nth-child(2) {
  margin-right: 13px;
}
/*subnav css end*/
/*subtitile css start*/
.sidebar .subtitle {
  width: 212;
  height: 42px;
  background-color: #d20010;
  margin-top: 34px;
  color: #fff;
  line-height: 42px;
  padding-left: 25px;
  margin-bottom: 15px;
}
/*subtitile css end*/
/*左侧边栏css end*/

/*新闻列表css start*/
.list .column {
  padding-top: 68px;
  float: left;
  width: 855px;
  margin-left: 86px;
  margin-right: 102px;
  margin-bottom: 20px;
  height: 800px;
}
.sidebar > img {
  width: 236px;
}
.list .column .newslist {
  width: 100%;
  height: 24px;
  line-height: 24px;
  margin-bottom: 36px;
  position: relative;
}
.list .column .newslist:after {
  content: "";
  width: 957px;
  height: 2px;
  background-color: #e9e9e9;
  position: absolute;
  top: 40px;
}
.list .column .newslist img {
  float: left;
  height: 22px;
}
.list .column .newslist p {
  font-size: 16px;
}
.list .column .newslist p span:nth-child(1),
.list .column .newslist p span:nth-child(2) {
  margin-left: 8px;
}
.list .column .newslist p:hover {
  color: #48adbf;
}
.list .column .newslist p span:nth-child(3) {
  margin-left: 430px;
}

/*新闻列表css end*/
/*底部按钮css start*/
.current {
  width: 215px;
  height: 30px;
  float: right;
  line-height: 30px;
  margin-right: 140px;
  margin-bottom: 20px;
}
.current p {
  float: left;
  font-weight: bold;
  line-height: 45px;
}
.current img {
  height: 30px;
  float: right;
}
.current img:nth-child(2) {
  transform: rotate(180deg);
  margin-right: 25px;
}

/*底部按钮css end*/
</style>
