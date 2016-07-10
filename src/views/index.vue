<template>
<div class="title">{{msg}}
<btn></btn>
</div>
</template>
<style lang="sass">
     @import "../assets/css/index.scss"
</style>
<script>
    import btn from '../components/button.vue'
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        components: {btn},
        //ajax请求,这里其实是访问http://cn.vuejs.org/api/#ready
        ready(){
            this.$http.get('/#ready').then(function(res){
                console.log(res.status);
            })
        },
        route:{
            canReuse: false  //组件是否可重用，如果为false,就是返回当前页面会重新生成实例
        }
    }
</script>
