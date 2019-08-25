<template>
    <div>
        <el-row>
            <el-col :span="23" :offset="1">
                <el-breadcrumb separator="/">
                     <el-breadcrumb-item :to="{ path: '/#/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item><a href="/#/kaoshi">考试管理</a></el-breadcrumb-item>
                    <el-breadcrumb-item><a href="/#/kcgl">考场列表</a></el-breadcrumb-item>
                    <el-breadcrumb-item><a href="/#/ks" @click="setEx()">考试</a></el-breadcrumb-item>
                    <el-breadcrumb-item>模拟考试</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="23" :offset="1">
                <el-tabs v-model="activeName">
                    <el-tab-pane label="模拟考试" name="first">
                        <el-row class="mycolor">
                            <el-col :span="24">
                                1、点击考试名称按钮进入答题界面，考试开始计时。
                            </el-col>
                            <el-col :span="24">
                                2、在随机考试过程中，您可以通过顶部的考试时间来掌握自己的做题时间。
                            </el-col>
                            <el-col :span="24">
                                3、提交试卷后，可以通过“查看答案和解析”功能进行总结学习。
                            </el-col>
                            <el-col :span="24">
                                4、系统自动记录模拟考试的考试记录，学员考试结束后可以进入“答题记录”功能进行查看。
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                </el-tabs>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data(){
        return{
            exas:{},
            activeName:"first"
        }
    },
    methods:{
        setEx(){
            PubSub.publish("ex", this.exas);
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
.mycolor{
    background-color: rgb(217, 236, 255);
    text-align: left;
    color: rgb(103, 171, 230)
}
</style>