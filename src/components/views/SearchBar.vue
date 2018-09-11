<template>
    <div class="top-search-bar">
        <span 
            v-show="isSearch"
            class="iconfont icon-xiayibu back"
            @click="closeSearch()"
            >
        </span>
        <div class="search-input-wrapper">
            <span class="iconfont icon-sousuo"></span>
            <input type="text" class="search-input"
            @focus="onSearchInputTriggle()"
            >
        </div>
        <div v-show="!isSearch" class="top-publish">
            <i class="iconfont icon-xiangji"></i>
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
            this.isSearch = true;
        },

        closeSearch() {
            this.isSearch = false;
        }
    }
}
</script>

<style lang="less" scoped>
    .top-search-bar{
        height: 1.2rem;
        padding: 6px 8px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #d43d3d;
        color: #ffffff;
        .search-input-wrapper{
            flex: 1;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            background-color: #ffffff; 
            color: #333333;
            border-radius: 3px;
            overflow: hidden;
            input{
                width: 100%;
                height: 100%;
                outline: none;
                border: none;
                flex: 1;
                padding-left: 3px;  
            }
            span{
                width: 0.7rem;
                text-align: center;
                height: 100%;
                line-height: calc(1.2rem - 12px);
            }
        }
        .back{
            width: 0.7rem;
            font-size: 28px;
            line-height: 1;
            transform: rotate(180deg);
        }
        .top-publish{
            width: 1.3rem;
            display: flex;
            justify-content: center;
            flex-direction: column;
            text-align: center;
            height: 100%;
            i{
                display: inline-block;
                flex: 1;
                font-size: 20px;
            }
            span{
                display: inline-block;
                height: 30px;
                font-size: 12px;
            }
        }
        .search-label{
            width: 1.1rem;
            text-align: center;
            line-height: calc(1.2rem - 12px);
            font-size: 14px;
        }
    }
</style>
