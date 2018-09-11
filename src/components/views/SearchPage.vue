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
            showDelete: false,
            showAllCommend: true,
            isShowAllHistroy: false,
            isSearchHistroySingle: false,
            isSearchCommendSingle: false,
            searchKeywords: [
                '比亚迪新能源',
                '中国通史第三集',
                '巨齿鲨电源'
            ],
            searchHistroy: [
                '三星',
                '华为',
                '小米',
                '苹果',
                '魅族'
            ],
            searchCommend: [
                '现代简约背景墙',
                '周星驰',
                '四大天王',
                '张学友'
            ]
        }
    },
    computed: {
        historyWord: {
            get: function() {
                return this.doDouble(this.searchHistroy, this.isSearchHistroySingle, this.isShowAllHistroy);
            },
            set: function() {
                this.searchHistroy = this.filter((item) => {
                    return !itme;
                })
                this.doDouble(this.searchHistroy, this.isSearchHistroySingle, this.isShowAllHistroy);
            }
        },

        getSearchkeywords() {
            
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

            if (isShow) {
                return arr; 
            } else {
                if (arr.length >= 4) {
                    return arr.slice(0,4);
                }
                return arr;
            }
        },

        toggleShowAllHistroy() {
            this.isShowAllHistroy = !this.isShowAllHistroy;
        },

        deleteHistoryWord(index) {
            this.searchHistroy.splice(index, 1);
            this.doDouble(this.searchHistroy, this.isSearchHistroySingle, this.isShowAllHistroy);
        },

        showDeleteBtn() {
            this.showDelete = !this.showDelete;
        },

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

