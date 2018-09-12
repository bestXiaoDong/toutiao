<template>
    <div class="header-bar">
        <div class="menu-list-wrapper">
            <ul class="menu-list">
                <li 
                    class="menu"
                    v-for="menu in menus"
                    >
                    <router-link v-bind:to="menu.id">{{ menu.name }}</router-link>
                </li>
            </ul>
        </div>
        <span class="menu-edit iconfont icon-danlieliebiao"></span>        
    </div>    
</template>

<script>
export default {
    name: 'headerBar',
    props: [
        'menus'
    ],
    data() {
        return {
            
        }
    }
}
</script>

<style lang="less" scoped>
    .header-bar{
        height: 0.9rem;
        overflow: hidden;
        position: relative;
        border-bottom: 1px solid #dddddd;
        .menu-list-wrapper{
            height: 100%;
            overflow-x: auto;
            &::-webkit-scrollbar{
                display: none;
            }
            .menu-list{
                height: 100%;
                display: flex;
                flex-wrap: nowrap;
                justify-content: space-between;
                align-items: center;
                padding-right: 1.1rem;
                .menu{
                    height: 100%;
                    line-height: 0.9rem;
                    min-width: 1.1rem;
                    text-align: center;
                    a{
                        color: #333333;
                        display: block;
                        text-decoration: none;
                        &.router-link-active{
                            color: #d43d3d;
                        }
                    }
                }
            }
        }
        .menu-edit{
            width: 1.1rem;
            height: 100%;
            line-height: 0.88rem;
            text-align: center;
            position: absolute;
            right: 0;
            top: 0;
            background-color: #ffffff;
            color: #333333;
            font-size: 20px;
            box-sizing: border-box;
            border-left: 1px solid rgba(221,221,221,.5);
        }
    }
</style>

