<template>
    <div>
        <el-row>
            <el-col :span="23" :offset="1">
                <el-breadcrumb separator="/">
                     <el-breadcrumb-item :to="{ path: '/#/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item><a href="/#/kecheng">课程管理</a></el-breadcrumb-item>
                    <el-breadcrumb-item>课程列表</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </el-row>
        <el-row><el-col>&nbsp;</el-col></el-row>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>

</style>