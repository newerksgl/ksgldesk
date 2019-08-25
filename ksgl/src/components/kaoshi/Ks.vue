<template>
    <div>
        <el-row>
            <el-col :span="23" :offset="1">
                <el-breadcrumb separator="/">
                     <el-breadcrumb-item :to="{ path: '/#/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item><a href="/#/kaoshi">考试管理</a></el-breadcrumb-item>
                    <el-breadcrumb-item><a href="/#/kcgl">考场列表</a></el-breadcrumb-item>
                    <el-breadcrumb-item>考试</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </el-row>
        <el-row><el-col>&nbsp;</el-col></el-row>
        <el-row>
            <el-col :span="24">
                <h2>{{exas.name}}</h2>
            </el-col>
            <el-col :span="24">&nbsp;</el-col>
            <el-col :span="8">
                <a href="">强化训练</a>
            </el-col>
            <el-col :span="8">
                <a href="/#/moni" @click="setEx()">模拟考试</a>
            </el-col>
            <el-col :span="8">
                <a href="">正式考试</a>
            </el-col>
        </el-row>
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
    },
    methods:{
        setEx(){
            PubSub.publish("ex", this.exas);
        }
    }
}
</script>
<style>
a{
    text-decoration: none
}
</style>