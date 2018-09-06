<template>
    <div class="top-search-bar">
        <span v-show="isSearch" class="iconfont icon-xiayibu"></span>
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
    data() {
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
