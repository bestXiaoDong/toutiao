<template>
    <div class="news-carousel">
        <ul class="news-carousel-wrapper"
            v-bind:class="{'transtion-in': isInTrasition}"
            ref="newsCarousel"
            @touchstart="onTouchStart($event)"
            @touchmove="onTouchMove($event)"
            @touchend="onTouchEnd($event)"
            >
            <li 
                class="news-page-item"
                :data-chanel="menu.id"
                v-for="(menu, index) in menus"
                @click="selectMenu(index)"
                >
                {{menu.name}}
            </li>
        </ul>
    </div>
</template>

<script>
import { newsData, getNews } from '../../assets/js/api.js';
export default {
    name: 'newsCarousel',
    props: {
        menus: Array
    },
    data() {
        return {
            isTouching: false,
            currentMenu: {},
            currentMenuIndex: 0,
            isInTrasition: false, 
            isOuter: false, // 是否超出边界
            news: {},
            pos: {
                x: 0,
                y: 0,
                dis: 0,
                dir: 'left',
                oldDis: 0
            }
        }
    },
    created() {
        this.menus.forEach((item) => {
            this.news[item.id] = [];
        })
    },
    methods: {
        onTouchStart(ev) {
            this.isInTrasition = false;
            this.isTouching = true;
            const touch = ev.touches[0];
            this.pos.x = touch.screenX
        },
        onTouchMove(ev) {
            // 此处只计算最后应该滑动的距离
            if (!this.isTouching) return;
            this.isOuter = false;
            const touch = ev.touches[0];
            const disX = touch.screenX - this.pos.x;
            const docWidth = document.documentElement.clientWidth;
            let distance = 0; // 滑动距离
            if (this.pos.oldDis + disX > 0 || Math.abs(this.pos.oldDis + disX) > docWidth * (this.menus.length -1)) {
                this.isOuter = true;
                return;
            }
            if (disX <= 0) {
                // 向左滑
                if (Math.abs(disX) - docWidth/2 <=0 ) {  // 向左滑未过半
                    this.pos.dis = 0;
                } else {
                    this.pos.dis = -docWidth;
                }
            } else {
                // 向右滑
                if (Math.abs(disX) - docWidth/2 <=0 ) {  // 向右滑未过半
                    this.pos.dis = 0;
                } else {
                    this.pos.dis = docWidth;
                }
            }
            this.$refs.newsCarousel.style.transform= `translateX(${disX + this.pos.oldDis}px)`;
        },
        onTouchEnd(ev) {
            if(!this.isTouching) return;
            this.isInTrasition = true;
            this.isTouching = false;
            if (this.isOuter) return;
            const docWidth = document.documentElement.clientWidth;
            this.$refs.newsCarousel.style.transform = `translateX(${this.pos.dis + this.pos.oldDis}px)`;
            this.pos.oldDis = this.pos.dis + this.pos.oldDis;
            if (this.pos.dir === 'left') {
                this.currentMenuIndex++;
            } else {
                this.currentMenuIndex--;
            }
            this.currentMenu = this.menus[this.currentMenuIndex];
            this.$router.push({path: `/content/${this.currentMenu.id}`});
        },

        selectMenu(index) {
            this.currentMenuIndex = index;
            this.currentMenu = this.menus[index];
        },

        switchPage(index) {
            const docWidth = document.documentElement.clientWidth;
            this.$refs.newsCarousel.style.transform = `translateX(${-index * docWidth}px)`;
            this.pos.dis = 0;
            this.pos.oldDis = -index * docWidth;
            this.getNewsfortt(this.menus[index].id);
        },

        getNewsfortt(tag) {
            this.$axios.get('/api', {
                params: Object.assign({}, newsData, {
                    tag
                })
            }).then((res) => {
                this.news[tag] = res.data.data.concat(this.news[tag]);
                console.log(this.news);
            })
        }
    },
    watch: {
        $route(to, from) {
            const index = this.menus.indexOf(this.menus.filter((menu) => {
                return to.path.indexOf(menu.id) !== -1;
            })[0]);
            this.switchPage(index);
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
            &.transtion-in{
                transition: transform .3s ease;
            }
        }
    }
</style>
