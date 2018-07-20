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
		<div class="column">
			<div class="newslist newslist1" v-for="item in list"  v-if="colName.name != '校庆视频'">
				<img src="../static/title.png" alt="">
				<p><span><router-link style="color:black;" :to="{name:'Artical',params:{title:item.title,col:col}}">{{item.title}}</router-link></span><span style="float:right;">{{item.publishTime.split(" ")[0]}}</span></p>
			</div>
      <div class="newslist newslist1" v-for="item in list" v-if="colName.name === '校庆视频'">
			<img src="../static/locate.png" alt="">
				<p><span><router-link style="color:black;" :to="{name:'Vedio',params:{title:item.title,col:col}}">{{item.title}}</router-link></span><span style="float:right;">{{item.publishTime.split(" ")[0]}}</span></p>
			</div>
			<div class="current">
				<el-row>
				<p>{{page}}/{{pageCount}}</p>
            <el-button @click="pageLess">上一页</el-button>
            <el-button @click="pageAdd">下一页</el-button>
        </el-row>
			</div>
		</div>
	</section>
</template>
<script>
import api from "@/api/api.js";
export default {
    data(){
        return {
            page:1,
            pageCount:0,
            list:[],
            col:this.$route.params.col,
            colName:"",
            navList:[],
        }
    },
    methods:{
        pageAdd(){
            if(this.page<this.pageCount){
                this.page++;
                this.getData();
            }else{
                alert("后面没有啦");
            }
        },
        pageLess(){
            if(this.page>1){
                this.page--;
                this.getData();
            }else{
                alert("已经是第一页啦");
            }
        },
        getData(){
            api.list(this.col,this.page).then((data)=>{
                // console.log(data);
                this.pageCount = data.pageCount;
                this.list = data.data;
            })
        },
        updateTitle(){
            // console.log(this.$route.params.col);
            this.col = this.$route.params.col;
            this.colName = this.navList.filter((item)=>{
                return item.id === parseInt(this.$route.params.col);
            })[0];

            // console.log(this.colName.name + "  "+this.col);
        }
    },
    watch:{
      '$route'(to, from){
          this.page = 1;
          this.updateTitle();
          this.getData();
      }
    },
    mounted(){
        this.getData();
        api.nav().then((data)=>{
            this.navList = data;
            this.colName = this.navList.filter((item)=>{
                return item.id === parseInt(this.col);
            })[0];
        })
    }
};
</script>
<style scoped>
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
.sidebar>img{
  width: 236px;
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
.sublist p + p {
    border-top: 1px dashed #aaa;
}
.sublist p:nth-last-child(1){
  border-bottom: 1px dashed #aaa;
}
/*新闻列表css end*/
/*底部按钮css start*/
.list .column .current {
  width: 215px;
  height: 30px;
  float: right;
  line-height: 30px;
}
.list .column .current p {
  float: left;
  font-weight: bold;
  line-height: 45px;
}
.list .column .current img {
  height: 30px;
  float: right;
}
.list .column .current img:nth-child(2) {
  transform: rotate(180deg);
  margin-right: 25px;
}

/*底部按钮css end*/
</style>
