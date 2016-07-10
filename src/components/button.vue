<template>
    <div>
        <button :class="['btn-' + size]">{{myMsg}}</button>
    </div>
</template>
<style>
    .btn-default {
        background-color: red;
        width: 200px;
        height: 40px;
    }

    .btn-small {
        background-color: green;
        width: 200px;
        height: 40px;
    }
     .btn-normal{
        background-color: blue;
        width: 200px;
        height: 40px;
    }
</style>
<script>
    export default{
        data(){
            return {}
        },
        props: {
            myMsg: null,
            type: {
                type: String,
                default: 'default',
                validator(value) {
                    return [
                                'default',
                                'small',
                                'primary'
                            ].indexOf(value) > -1;
                }
            },
            size: {
                type: String,
                default: 'small',
                validator(value) {
                    return [
                                'small',
                                'normal',
                                'large'
                            ].indexOf(value) > -1;
                }
            }
        },
        components: {}
    }
</script>
