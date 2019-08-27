<template>
    <div>
        <el-row>
            <el-col :span="23" :offset="1">
                <el-breadcrumb separator="/">
                     <el-breadcrumb-item :to="{ path: '/#/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item><a href="/#/kaoshi">考试管理</a></el-breadcrumb-item>
                    <el-breadcrumb-item>考场列表</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </el-row>
        <el-row><el-col>&nbsp;</el-col></el-row>
        <el-form
          :model="form"
          label-width="100px">
        <el-row>
            <el-col :span="17" :offset="1">
                <el-row>
                   <el-col :span="10">
                        <el-form-item label="考场名称：" prop="name">
                            <el-input v-model="form.name" placeholder="请输入考场名称" autocomplete="off"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10">
                        <el-form-item label="考场状态：" prop="statetest">
                            <el-radio-group v-model="form.statetest">
                                <el-radio label="开通">开通</el-radio>
                                <el-radio label="未开通">未开通</el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="9" :offset="1">
                        <el-form-item label="地区：" prop="reid">
                            <el-select v-model="form.reid" placeholder="请选择">
                                <el-option value="" key="" label="请选择"></el-option>
                                <el-option
                                v-for="item in regionData"
                                :key="item.reid"
                                :label="item.name"
                                :value="item.reid">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="9" :offset="1">
                        <el-form-item label="科目：" prop="sid">
                            <el-select v-model="form.sid" placeholder="请选择">
                                <el-option value="" key="" label="请选择"></el-option>
                                <el-option
                                v-for="item in subjectData"
                                :key="item.sid"
                                :label="item.name"
                                :value="item.sid">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-button type="primary" @click="submitForm()">提 交</el-button>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        </el-form>
        <el-row>
            <el-col :span="24">
                <el-table :data="tableData.data" style="width: 100%" stripe>
                    <el-table-column type="expand">
                        <template slot-scope="props">
                            <el-form label-position="left" inline class="demo-table-expand">
                            <el-form-item label="ID">
                                <span>{{ props.row.id }}</span>
                            </el-form-item>
                            <el-form-item label="名称">
                                <a href="/#/ks" @click="goks(props.row)">{{ props.row.name }}</a>
                            </el-form-item>
                            <el-form-item label="科目">
                                <span>{{ props.row.s.name }}</span>
                            </el-form-item>
                            <el-form-item label="地区">
                                <span>{{ props.row.r.name }}</span>
                            </el-form-item>
                            <el-form-item label="邮政编码">
                                <span>{{ props.row.r.areaCode }}</span>
                            </el-form-item>
                            <el-form-item v-if="props.row.statetest=='未开通'&&role==null" >
                                <el-button type="primary" @click="open(props.row.id)">开通</el-button>
                            </el-form-item>
                            </el-form>
                        </template>
                    </el-table-column>
                    <el-table-column prop="id" label="ID"></el-table-column>
                    <el-table-column prop="name" label="名称"></el-table-column>
                    <el-table-column prop="number" label="开通人数"></el-table-column>
                    <el-table-column prop="s.name" label="科目"></el-table-column>
                    <el-table-column prop="r.name" label="地区"></el-table-column>
                </el-table>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import PubSub from "pubsub-js";
export default {
    data(){
        return{
            tableData:[
                {
                    id:1,
                    number:12,
                    statetest:'开通',
                    name:'长沙疯儿幼儿园',
                    s:{
                        sid:1,
                        name:"无聊的科目",
                        image:"看不见"
                    },
                    r:{
                        reid:1,
                        name:"无聊小镇",
                        areaCode:50000
                    }
                }
            ],
            form:{
                sid:null,
                reid:null,
                number:null,
                statetest:'',
                name:''
            },
            regionData: [{
                name: '黄金糕',
                reid: '1'
            }, {
                name: '双皮奶',
                reid: '2'
            }],
            subjectData: [{
                name: '黄金糕',
                sid: '1'
            }, {
                name: '双皮奶',
                sid: '2'
            }],
            dialogFormVisible: false,
            user:null,
            role:null

        }
    },
    methods:{
        getRegionData(){
            this.request
            .post("region/findAll")
            .then(res => {
                this.regionData = res.data;
            })
            .catch(err => {
                this.$message({
                    showClose: true,
                    message: '请求失败',
                    type: 'error',
                    duration: 1000
                });
            });
        },
        getSubjectData(){
            this.request
            .post("subject/findAll")
            .then(res => {
                this.subjectData = res.data;
            })
            .catch(err => {
                this.$message({
                    showClose: true,
                    message: '请求失败',
                    type: 'error',
                    duration: 1000
                });
            });
        },
        submitForm(){
            this.form.name= '%'+this.form.name+'%';
            this.request
            .post("examinationsSubjectRegionPage/find",this.form)
            .then(res => {
                this.tableData=res.data;
                this.form.name=this.form.name.replace('%','');
                this.form.name=this.form.name.replace('%','');
            })
            .catch(err => {
                this.$message({
                    showClose: true,
                    message: '请求失败',
                    type: 'error',
                    duration: 1000
                });
            });
        },
        open(id){
            this.request
            .post("examinations/kaiTong",{id:id})
            .then(res => {
                if(res.data==1){
                    this.$message({
                        message: "开通成功",
                        type: "success"
                    });
                }
            })
            .catch(err => {
                this.$message({
                    showClose: true,
                    message: '请求失败',
                    type: 'error',
                    duration: 1000
                });
            });
            this.submitForm();
        },
        goks(ex){
            PubSub.publish("ex", ex);
        },
        getRole(rid){
            this.request
            .post("Userrole/selectById",{rid:rid})
            .then(res => {
                this.role=res.data;
            })
            .catch(err => {
                this.$message({
                    showClose: true,
                    message: '请求失败',
                    type: 'error',
                    duration: 1000
                });
            });
        }
    },
    mounted(){
        this.getRegionData();
        this.getSubjectData();
        this.submitForm();
        PubSub.subscribe("search", (msg, user) => {
            this.user = user;
            if(this.user!=null){
                this.getRole(this.user.rid);
            }
        });
    },
  components: {}
}
</script>
<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>