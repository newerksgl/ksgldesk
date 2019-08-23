<template>
    <div></div>
</template>

<script>
export default {
    data(){
        return {
            exas:{}
        }
    },
    mounted(){
        PubSub.subscribe("ex", (msg, ex) => {
            this.exas = ex;
        });
    }
}
</script>
<style>
</style>