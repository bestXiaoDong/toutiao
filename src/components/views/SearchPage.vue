<template>
    <div class="search-page">
        <ul 
            class="search-keyword search-list module"
            v-if="showAllCommend"
            >
            <li class="search-word"
                v-for="keyword in searchKeywords" 
                >
                {{ keyword }}
            </li>
        </ul>

        <div class="search-histroy module">
            <div class="title">
                <span class="title-left"
                    @click="toggleShowAllHistroy()"
                    >
                    历史记录
                <i class="iconfont " v-bind:class="getShowHistoryClass"></i></span> 
                <span 
                    class="iconfont delete"
                    :class="{'icon-shanchu' : !showDelete}"
                    @click="showDeleteBtn()"
                    >
                    {{ showDelete ? '完成' : '' }}
                </span>
            </div>
            <ul class="search-histroy-list search-list">
                <li
                    class="search-word"
                    v-for="(keyword, index) in getSearchkeywords"
                    v-if="index <= historyLen"
                >
                    {{ keyword }}
                    <span 
                        class="iconfont icon-guanbi"
                        v-if="keyword && showDelete"
                        @click="deleteHistoryWord(index)"
                        >
                    </span>    
                </li>
            </ul>
        </div>

        <div class="search-commend module">
            <div 
                class="title"
                v-if="showAllCommend"
                >
                <span class="title-left">猜你想搜的</span>
                <span 
                    class="iconfont icon-kanguo"
                    @click="toggleCommend()"
                    >
                </span>
            </div>
            <div 
                class="show-commend"
                v-if="!showAllCommend"
                @click="toggleCommend()"
                >
                <i class="iconfont icon-kanguo"></i>查看所有推荐词
            </div>
            <ul 
                class="search-commend-list search-list"
                v-if="showAllCommend"
                >
                <li
                    class="search-word"
                    v-for="keyword in getCommendWords"
                >
                    {{ keyword }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'search-page',
    data() {
        return {
            historyLen: 3,

            showDelete: false,              // 显示删除按钮
            showAllCommend: true,           // 显示所有推荐
            isShowAllHistroy: false,        // 是否显所有示历史记录
            isSearchHistroySingle: false,   // 搜索推荐数据个数是否为单数
            isSearchCommendSingle: false,   // 搜索推荐数据个数是否为单数
            searchKeywords: [ // 头部关键词
                '比亚迪新能源',
                '中国通史第三集',
                '巨齿鲨电源'
            ],
            searchHistroy: [  // 搜索历史
                '三星',
                '华为',
                '小米',
                '苹果',
                '魅族',
            ],
            searchCommend: [  // 搜索推荐关键词
                '现代简约背景墙',
                '周星驰',
                '四大天王',
                '张学友'
            ]
        }
    },
    computed: {
        getSearchkeywords() {
            return this.doDouble(this.searchHistroy, this.isSearchHistroySingle);
        },

        getCommendWords() {
            return this.doDouble(this.searchCommend, this.isSearchCommendSingle);
        },

        getShowHistoryClass() {
            return this.isShowAllHistroy ? 'icon-shouqi' : 'icon-xiala';
        }
    },
    methods: {
        // 将数组转化为长度为偶数的数组 
        doDouble(arr, singFlag, isShow) {
            if (singFlag) {
                arr.shift();
                singFlag = false;
            }
            if (arr.length %2 !== 0) {
                singFlag = true;
                arr.push('');
            } 
            return arr;
        },
        // 切换是否显示所有历史记录 
        toggleShowAllHistroy() {
            this.isShowAllHistroy = !this.isShowAllHistroy;
            this.historyLen  = this.isShowAllHistroy ? this.searchHistroy.length - 1 : 3;
        },
        // 删除历史记录
        deleteHistoryWord(index) {
            this.searchHistroy.splice(index, 1);
            this.searchHistroy = this.searchHistroy.filter((item) => {
                return item !== '';
            })
        },
        // 显示删除历史记录按钮
        showDeleteBtn() {
            this.showDelete = !this.showDelete;
        },
        // 显示所有推荐搜索关键词
        toggleCommend() {
            this.showAllCommend = !this.showAllCommend;
        }
    }
}
</script>

<style lang="less" scoped>
    .search-page{
        background: #cccccc;
        .search-list{
            display: flex;
            flex-wrap: wrap;
            .search-word{
                height: 0.9rem;
                line-height: 0.9rem;
                width: 50%;
                box-sizing: border-box;
                padding-left: 10px;
                padding-right: 20%;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                text-align: left;
                border-bottom: 1px solid #dddddd;
                &:nth-child(2n) {
                    border-left: 1px solid #dddddd;
                }
                &:nth-child(1),&:nth-child(2) {
                    border-top: 1px solid #dddddd;
                }
            }
        }
        .search-keyword{
            flex-wrap: nowrap;
            align-items: center;
            justify-content: space-between;
            .search-word{
                flex: 1;
                padding: 0 10px;
                box-sizing: border-box;
                text-align: center;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                border-left: 1px solid #dddddd;
                &:nth-child(0) {
                    border-left: none;
                }
            }
        }
        .module{
            margin-bottom: 0.1rem;
            background: #ffffff;
            .title{
                height: 0.9rem;
                line-height: 0.9rem;
                padding-left: 10px;
                color: #999999;
                display: flex;
                justify-content: space-between;
                align-items: center;
                span:last-child{
                    padding-right: 10px;
                }
            }
            .delete{
                font-size: 12px;
                &.icon-shanchu{
                    font-size: 16px;
                }
            }
            
        }
        .search-histroy-list{
            .search-word{
                position: relative;
                .icon-guanbi{
                    position: absolute;
                    top: 0;
                    right: 10px;
                    width: 30px;
                    height: 100%;
                    box-sizing: border-box;
                    color: #dddddd;
                    font-size: 12px;
                    line-height: 0.9rem;
                    text-align: center;
                }
            }
        }
        .search-commend{
            .title{
                .iconfont{
                    text-decoration: line-through;
                }
            }
            .show-commend{
                color: #999999;
                height: 0.9rem;
                line-height: 0.9rem;
                text-align: center;
            }
        }
    }
</style>

