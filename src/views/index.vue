<template>
<div>{{msg}}</div>
</template>
<style lang="sass">
     @import "../assets/css/index.scss"
</style>
<script>
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        components: {},
        route:{
            canReuse: false  //组件是否可重用，如果为false,就是返回当前页面会重新生成实例
        }
    }
</script>
