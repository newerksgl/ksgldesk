<template>
  <div>
    <el-row>
      <el-col :span="24" :offset="2">
        <el-tabs value="first">
          <el-tab-pane label="积分充值" name="first">

            <el-table :data="orders" height="250" style="width: 70%">
              <el-table-column prop="id" label="订单号">
              </el-table-column>
              <el-table-column prop="rechargeAmount" label="充值金额">
              </el-table-column>
              <el-table-column prop="time" label="下单时间">
              </el-table-column>
              <el-table-column prop="status" label="订单状态">
              </el-table-column>
              <el-table-column prop="address" label="操作">
                <i class="el-icon-s-grid">&nbsp;</i>
                <i class="el-icon-shopping-cart-2">&nbsp;</i>
                <i class="el-icon-error" @click="remove('id')">&nbsp;</i>
              </el-table-column>
            </el-table>

          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orders: [{
        id: '20190812001',
        rechargeAmount: '1',
        time: '2016-05-03',
        status: '待付款'
      }, {
        id: '20190812002',
        rechargeAmount: '1',
        time: '2016-05-03',
        status: '待付款'
      }]
    };
  },
  components: {},
  methods: {
    remove(id){
      console.log(id)
    }
  }
};
</script>

<style>
</style>
