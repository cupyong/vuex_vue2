<template>
	<div class="nav">
    <div class="pd-10">
     	<a v-for="nav in navlist" class="mg-l-0">{{nav.name}}</a>
    </div>
  </div>
</template>
<script>
 import {mapGetters} from 'vuex'
 export default{
    mounted () {
      this.$store.dispatch('fetchNavList')
    },
    computed: {
      ...mapGetters({
        navlist: 'getNavList'
      }),
    }
  }
</script>