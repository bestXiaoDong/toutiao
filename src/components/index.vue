<template>
  <div class="app-body">
    <search-bar></search-bar>
    <router-view></router-view>
  </div>
</template>

<script>
  import searchBar from './views/SearchBar'
  export default {
    components: {
      searchBar
    }
  }
</script>

<style lang="less" scoped>
  .app-body{
    width: 100%;
    height: 100%;
  }
</style>
