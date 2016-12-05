<template>
    <div>
        <div class="topbox col-bg-red">
            <a class="back-btn"><img src="/img/back-icon.png"></a><span class="font-15px">机械</span>
        </div>
        <ArticleList></ArticleList>
        <Loading></Loading>
    </div>
</template>
<script>
import Loading from '../components/Common/Loading.vue' 
import ArticleList from '../components/Article/list.vue' 

export default {
	 components: { Loading,ArticleList},
}
</script>