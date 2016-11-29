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
import NavTitle from './nav.vue' 
import NewList from './NewList.vue' 

export default {
	 components: { NavTitle,NewList},
}
</script>