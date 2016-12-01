<template>
	<div>
		 <div class="topbox col-bg-red">
	       <img src="/img/logo.jpg" class="logo">
        </div>
		  <NavTitle></NavTitle>
	     <NewList></NewList>
	</div>
</template>
<script>
import NavTitle from '../components/Home/nav.vue'
import NewList from '../components/Home/NewList.vue' 

export default {
	 components: { NavTitle,NewList},
}
</script>