<template>
    <div class="text-list">
        <!--<el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="text">文字按钮</el-button>-->
        <div class="linst-div bd-list" v-for="article in articleList">
            <img src="/dist/img/logo.jpg" class="mg-r-10">
            <div class="bin">
                <div class="title font-15px font-col-111">{{article.title}}</div>
                <p class="font-col-80" style="width: 150px;">{{article.introduction}}</p>
                <div><span class="time font-col-999">2016-07-21  02:04</span><span class="label col-bg-red">食品机械</span></div>
            </div>
        </div>
        <!--<div class="linst-div bd-list">
            <img src="img/logo.jpg" class="mg-r-10">
            <div class="bin">
                <div class="title font-15px font-col-111">脸谱阅后即焚应用排名下跌</div>
                <p class="font-col-80" style="width: 150px;">阅后即焚服务焚服务焚服务一度跻身App Store前50名跻身App Store前50名跻身App Store前50名跻身App Store前50名</p>
                <div><span class="time font-col-999">2016-07-21  02:04</span><span class="label col-bg-red">食品机械</span></div>
            </div>
        </div>
        <div class="linst-div bd-list">
            <img src="img/logo.jpg" class="mg-r-10">
            <div class="bin">
                <div class="title font-15px font-col-111">脸谱阅后即焚应用排名下跌</div>
                <p class="font-col-80" style="width: 150px;">阅后即焚服务焚服务焚服务一度跻身App Store前50名跻身App Store前50名跻身App Store前50名跻身App Store前50名</p>
                <div><span class="time font-col-999">2016-07-21  02:04</span><span class="label col-bg-red">食品机械</span></div>
            </div>
        </div>-->
    </div>
</template>
<script>

 import {mapGetters} from 'vuex'
 export default{
    mounted () {
      this.$store.dispatch('fetchArticleList')
    },
    computed: {
      ...mapGetters({
        articleList: 'getArticleList'
      }),
    }
  }
</script>