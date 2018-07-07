<template>
    <section class="content">
		<!-- 左侧边栏 -->
		<div class="sidebar">
			<div class="subnav">
				<img src="../static/locate.png" alt="">
				<p>当前位置：<span>校庆</span><span>>></span><span>{{colName.name}}</span></p>
			</div>
			<div class="subtitle">
				<p>{{colName.name}}</p>
			</div>
			<div class="sublist">
				<p v-if="index<10" v-for="(item,index) in list"><span></span><router-link :to="{name:'Artical',params:{col:col,title:item.title}}">{{item.title}}</router-link></p>
			</div>
		</div>
		<div class="essay">
			<div class="essay_title">{{artical[0].title}}</div>
			<div class="message">
				<p><span>时间：</span>{{artical[0].publishTime.split(" ")[0]}}</p>
				<p><span>来源：</span>{{artical[0].source}}</p>
			</div>
			<div class="article">
        <p v-html="contentHtml"></p>
            </div>
			<div class="source" style="display:none;">
				<p><span>作者：{{artical[0].author}}</span><span>摄影：{{artical[0].subTitle}}</span></p>
				<p><span>编辑：{{artical[0].editor}}</span><span>审核：{{artical[0].shortTitle}}</span></p>
			</div>
		</div>
	</section>
</template>
<script>
import api from "@/api/api.js";
export default {
  name: "Artical",
  data() {
    return {
      artical: [],
      list: [],
      col: this.$route.params.col,
      title:this.$route.params.title,
      colName: "",
      navList:[]
    };
  },
  computed: {
    contentHtml() {
      let tmp =  this.artical[0].content.split(
        "<input type='hidden' id='pageNum' name='pageNum'  value='1'/><textarea id='pageContent0' name='pageContent0' style='display:none'>"
      )[1];
      return tmp.split("</textarea>")[0];
    }
  },
  methods: {
    getData() {
      api.article(this.$route.params.title, this.col).then(data => {
        console.log(data);
        this.artical = data.data;
      });
      api.list(this.$route.params.col, 1).then(data => {
        this.list = data.data;
      });
    }
  },
  watch: {
    $route: "getData"
  },
  mounted() {
    api.nav().then(data => {
      this.navList = data;
      this.colName = this.navList.filter(item => {
        return item.id === parseInt(this.col);
      })[0];
    });
    this.getData();
  }
};
</script>
<style scoped>
/*左侧边栏列表 css start*/
.content .sidebar .sublist {
  width: 100%;
  margin-top: 25px;
}
.content .sidebar .sublist p {
  width: 100%;
  height: 24px;
  line-height: 24px;
  display: inline-block;
}
.wp_video_player{
  display: none;
}
.content .sidebar .sublist p span {
  display: block;
  width: 17px;
  height: 2px;
  background-color: #6c6c6c;
  float: left;
  margin-top: 11px;
  margin-right: 5px;
}
.content .sidebar .sublist p a {
  text-decoration: none;
  color: #000;
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  width: 90%;
  float: left;
}
/*左侧边栏列表 css end*/
/*正文 css start*/
.content .essay {
  padding-top: 80px;
  float: left;
  width: 795px;
  margin-left: 86px;
  margin-right: 162px;
}
.content .essay .essay_title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}
.content .essay .message {
  width: 280px;
  height: 20px;
  margin-left: 235px;
  margin-top: 25px;
}
.content .essay .message p:first-child {
  float: left;
}
.content .essay .message p:last-child {
  float: right;
}
.content .essay .article {
  width: 100%;
  margin-top: 70px;
  position: relative;
}
.content .essay .article:before {
  content: "";
  width: 100%;
  height: 2px;
  position: absolute;
  top: -40px;
  background-color: #dadada;
}
.content .essay .article p {
  text-indent: 25px;
  line-height: 30px;
}
/*来源  css start*/
.content .essay .source {
  float: right;
  font-size: 14px;
  line-height: 35px;
}
.content .essay .source p:last-child {
  float: right;
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
  margin-top: 50px;
}
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
/*来源 	css start*/
/*正文 css end*/
</style>
