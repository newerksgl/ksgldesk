<template>
  <div>
    <el-row class="tac">
      <el-col :span="3" :offset="3">
        <el-menu  router class="el-menu-vertical-demo">
          <el-menu-item index="shouye">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>首页</span>
            </template>
          </el-menu-item>
          <el-menu-item index="zhengshu">
            <span slot="title">我的证书</span>
          </el-menu-item>
          <el-menu-item index="zhengshu">
            <span slot="title">申请证书</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col  :span="16">
        <template >
          <el-table :data="tableData"  style="width: 100%">
            <el-table-column width="260">
              <template slot-scope="scope">
                <el-image width="200" :src="scope.row.Thumbnail"></el-image>
              </template>
            </el-table-column>
            <el-table-column>
              <template slot-scope="scope">
                <el-tabs >
                   <el-tab-pane :label="scope.row.title"></el-tab-pane>
                </el-tabs>
                <span>{{scope.row.title}}</span>
                <el-divider></el-divider>
                <el-row>
                    <el-col :span="12"><div v-if="scope.row.status=='申请中'"><el-button type="primary">{{scope.row.status}}</el-button></div>
                                       <div v-if="scope.row.status=='已受理'"><el-button type="primary">{{scope.row.status}}</el-button></div>
                                       <div v-if="scope.row.status=='申请被驳回'"><el-button type="danger">{{scope.row.status}}</el-button></div>
                                       <div v-if="scope.row.status=='已出证'"><el-button type="success">{{scope.row.status}}</el-button></div>
                    </el-col>
                    <el-col :span="12"><div><span>{{scope.row.address}}</span></div></el-col>
                </el-row>
              </template>
            </el-table-column>
          </el-table>
        </template>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
    data() {
      const item = {
        Thumbnail: '',
        title: '',
        status: ''
       };
      return {
        tableData: Array(1).fill(item),
      }
    },
    methods:{
      getZhengShu(){
        this.request
            .post("zhangshu/selectByName", {name:user.name})
            .then(res => {
              this.item = this.res;
            })
      }
    },
    mounted(){
        this.getZhengShu();
    }
};
</script>

<style>
   
</style>
