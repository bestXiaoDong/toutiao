<template>
    <div class="toutiao-content">
        <header-bar :menus="menuChanels"></header-bar>
        <news-carousel :menus="menuChanels"></news-carousel>
    </div>
</template>

<script>
    import HeaderBar from './HeaderBar'
    import NewsCarousel from './NewsCarousel'
    export default {
        name: 'mainContent',
        components: {
            HeaderBar,
            NewsCarousel
        },
        data () {
            return {
                menuChanels: [
                    {
                        id: '__all__',
                        name: '推荐'
                    },
                    {
                        id: 'video',
                        name: '视频'
                    },
                    {
                        id: 'news_hot',
                        name: '热点'
                    },
                    {
                        id: 'news_society',
                        name: '社会'
                    },
                    {
                        id: 'news_entertainment',
                        name: '娱乐'
                    },
                    {
                        id: 'news_military',
                        name: '军事'
                    },
                    {
                        id: 'news_tech',
                        name: '科技'
                    },
                    {
                        id: 'news_car',
                        name: '汽车'
                    },
                    {
                        id: 'news_sports',
                        name: '体育'
                    },
                    {
                        id: 'news_finance',
                        name: '财经'
                    },
                    {
                        id: 'news_world',
                        name: '国际'
                    },

                ]
            }
        }
    }
</script>

<style lang="less" scoped>
    .toutiao-content{
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding-top: 1.2rem;
        padding-bottom: 1.2rem;
        display: flex;
        flex-direction: column;
    }
</style>


