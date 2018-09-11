<template>
  <div>
    <search-bar></search-bar>
    <search-page></search-page>
    <router-view></router-view>
  </div>
</template>

<script>
  import searchBar from './views/SearchBar'
  import searchPage from './views/SearchPage'
  export default {
    components: {
      searchBar,
      searchPage
    }
  }
</script>

<style>
</style>
