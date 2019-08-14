<template>
  <div>
    <el-row>
      <el-col :span="24" :offset="2">
        <el-tabs value="first">
          <el-tab-pane label="积分充值" name="first">
            <el-row>
              <el-col :span="15">
                <el-table :data="orders" height="250" style="width: 100%">
                  <el-table-column prop="id" label="订单号"></el-table-column>
                  <el-table-column prop="rechargeAmount" label="充值金额"></el-table-column>
                  <el-table-column prop="time" label="下单时间"></el-table-column>
                  <el-table-column prop="status" label="订单状态"></el-table-column>
                  <el-table-column prop="address" label="操作">
                    <template slot-scope="orders">
                      <el-button
                        size="mini"
                        class="el-icon-circle-close"
                        type="danger"
                        @click="remove(orders.row.id)"
                      ></el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </el-col>

              <el-col :span="8" :offset="1">
                <el-tabs value="first">
                  <el-tab-pane label="积分充值" name="first">
                    <el-form
                      :model="ruleForm"
                      status-icon
                      :rules="rules"
                      ref="ruleForm"
                      label-width="100px"
                      class="demo-ruleForm"
                    >
                      <el-form-item label="充值金额" prop="money">
                        <el-input v-model.number="ruleForm.money"></el-input>
                      </el-form-item>
                      <el-form-item>
                        <el-button type="primary" @click="submitForm(ruleForm.money)">充值</el-button>
                      </el-form-item>
                    </el-form>
                  </el-tab-pane>
                </el-tabs>
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
  data() {
    var checkMoney = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("充值金额不能为0！"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字"));
        } else {
          if (value < 0) {
            callback(new Error("充值金额不能少于1元！"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    return {
      rules: {
        money: [{ validator: checkMoney, trigger: "blur" }]
      },
      ruleForm: {
        money: 0
      },
      orders: [
        {
          id: "20190812001",
          rechargeAmount: "1",
          time: "2016-05-03",
          status: "已付款"
        },
        {
          id: "20190812002",
          rechargeAmount: "1",
          time: "2016-05-03",
          status: "已付款"
        }
      ]
    };
  },
  components: {},
  methods: {
    remove(id) {
      this.$confirm("此操作将永久删除该订单, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
          console.log("删除编号：" + id);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    submitForm(value) {
      if (0 < value) {
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();
        var millisecond = date.getMilliseconds();
        if (month >= 1 && month <= 9) {
          month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
          strDate = "0" + strDate;
        }
        var id = year + month + strDate + hour + minute + second + millisecond;
        var time = year + month + strDate + hour + minute;
        var status = "已付款";
        this.orders.push({
          id: id,
          time: time,
          money: value,
          status: status
        });
        console.log(
          "编号：" +
            id +
            "充值金额：" +
            value +
            "时间：" +
            time +
            "状态：" +
            status
        );
      }
    }
  }
};
</script>

<style>
</style>
