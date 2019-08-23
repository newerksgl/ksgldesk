<template>
    <div>
        <el-row>
            <el-col :span="23" :offset="1">
                <el-breadcrumb separator="/">
                     <el-breadcrumb-item :to="{ path: '/#/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item><a href="/#/kaoshi">考试管理</a></el-breadcrumb-item>
                    <el-breadcrumb-item>考试</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </el-row>
        <el-row><el-col>&nbsp;</el-col></el-row>
    </div>
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