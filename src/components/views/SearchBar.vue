<template>
    <div class="top-search-bar">
        <span v-show="isSearch" class="iconfont icon-xiayibu back"></span>
        <input type="text" class="search-input"
            @focus="onSearchInputTriggle()"
            @blur="onSearchInputTriggle()"
        >
        <div v-show="!isSearch" class="top-publish">
            <i class="iconfont icon-sousuo"></i>
            <span class="publish">发布</span>
        </div>
        <span v-show="isSearch" class="search-label">搜索</span>
    </div>
</template>

<script>
export default {
    name: 'search-bar',
    data () {
        return {
            isSearch: false
        }
    },
    methods: {
        onSearchInputTriggle() {
            this.isSearch = !this.isSearch;
        }
    }
}
</script>

<style lang="less" scoped>
    .top-search-bar{
        height: 3.3rem;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #d43d3d;
        color: #ffffff;
        .back{
            width: 1.875rem /* 30/16 */;
        }
        .search-input{
            flex: 1;
        }
        .top-publish{
            width: 3.75rem /* 60/16 */;
        }
        .search-label{
            width: 2.5rem /* 40/16 */;
        }
    }
</style>
