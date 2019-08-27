<template>
  <div>
    <el-row>
      <el-col :span="6">
        <el-menu
        router default-active="$router.path"
        class="el-menu-vertical-demo"
        text-color="#000"
        active-text-color="blue"
        >
          <el-menu-item index="kclb">
            <i class="el-icon-menu"></i>
            <span slot="title">课程列表</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="18">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>