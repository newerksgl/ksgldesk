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
                            <el-radio-group v-model="form.stateTest">
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
                    <el-table-column prop="id" label="ID"></el-table-column>
                    <el-table-column prop="name" label="名称"></el-table-column>
                    <el-table-column prop="number" label="开通人数"></el-table-column>
                </el-table>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data(){
        return{
            tableData:[
                {
                    id:1,
                    sid:1,
                    reid:1,
                    number:12,
                    stateTest:'开通',
                    name:'长沙疯儿幼儿园'
                }
            ],
            form:{
                id:null,
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
            dialogFormVisible: false
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
            .post("examinations/find",this.form)
            .then(res => {
                console.log(res.data);
                this.tableData=res.data;
                console.log(this.tableData);
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
        }
    },
    mounted(){
        this.getRegionData();
        this.getSubjectData();
        this.submitForm();
    },
  components: {}
}
</script>
<style>
</style>