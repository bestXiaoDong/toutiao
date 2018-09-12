<template>
    <div class="news-carousel">
        <carousel class="news-carousel-wrapper">
            <slide 
                class="news-page-item"
                :data-chanel="menu.id"
                v-for="menu in menus"
                >
                {{menu.name}}
            </slide>
        </carousel>
    </div>
</template>

<script>
import { Carousel, Slide} from 'vue-carousel'
export default {
    name: 'newsCarousel',
    props: {
        menus: Array
    },
    data() {
        return {

        }
    }
}
</script>

<style lang="less" scoped>
    .news-carousel{
        width: 100%;
        flex: 1;
        overflow: hidden;
        position: relative;
        .news-carousel-wrapper{
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            display: flex;
            .news-page-item{
                height: 100%;
                width: 10rem;
            }
        }
    }
</style>
