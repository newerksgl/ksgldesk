<template>
    <div>
        <el-row>
            <el-col :span="23" :offset="1">
                <el-breadcrumb separator="/">
                     <el-breadcrumb-item :to="{ path: '/#/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item><a href="/#/kaoshi">考试管理</a></el-breadcrumb-item>
                    <el-breadcrumb-item>试题管理</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </el-row>
        <el-row><el-col>&nbsp;</el-col></el-row>
        <el-row>
            <el-col :span="24">
                <h3>搜索</h3>
            </el-col>
        </el-row>
            <el-divider></el-divider>
        <el-row>
            <el-form
            :model="form"
            label-width="100px">
                <el-col :span="8">
                    <el-form-item label="试题ID：" prop="eid">
                        <el-input v-model="form.eid" placeholder="请输入试题ID" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="关键字：" prop="questionStem">
                        <el-input v-model="form.questionStem" placeholder="请输入关键字" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="试题类型：" prop="qid">
                        <el-select v-model="form.qid" placeholder="请选择">
                                <el-option value="" key="" label="请选择"></el-option>
                                <el-option
                                v-for="item in quesData"
                                :key="item.qid"
                                :label="item.question"
                                :value="item.qid">
                                </el-option>
                            </el-select>
                    </el-form-item>
                </el-col>
            </el-form>
        </el-row>
        <el-row>
            <el-form
            :model="form"
            label-width="100px">
                <el-col :span="8">
                    <el-form-item label="难度：" prop="qid">
                        <el-select v-model="form.difficulty" placeholder="请选择">
                                <el-option value="" key="" label="请选择"></el-option>
                                <el-option
                                v-for="item in diffData"
                                :key="item"
                                :label="item"
                                :value="item">
                                </el-option>
                            </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
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
                <el-col :span="4" :offset="4">
                    <el-button type="primary" @click="submitForm()">搜 索</el-button>
                </el-col>
            </el-form>
        </el-row>
            <el-divider></el-divider>
        <el-row>
            <el-col :span="24">
                <el-table :data="tableData" style="width: 100%" stripe>
                    <el-table-column prop="q.question" label="试题类型"></el-table-column>
                    <el-table-column prop="questionstem" label="试题内容"></el-table-column>
                    <el-table-column prop="difficulty" label="难度"></el-table-column>
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
                    eid:1,
                    questionstem:'猜猜我是谁',
                    reference:'你是猪',
                    problem:'你就是居',
                    difficulty:'那么简单',
                    date:'2000-05-04 11:22:22',
                    s:{
                        sid:1,
                        name:'无聊的科目',
                        image:'无聊的图片'
                    },
                    q:{
                        qid:1,
                        question:'无聊的题目',
                        questionTest:'好无聊'
                    }
                }
            ],
            form:{
                sid:null,
                qid:null,
                questionStem:'',
                difficulty:null,
                eid:null
            },
            quesData:[
                {
                    qid:1,
                    question:'无聊',
                    questiontest:'特无聊'
                }
            ],
            diffData:['无聊'],
            subjectData: [{
                name: '黄金糕',
                sid: '1'
            }, {
                name: '双皮奶',
                sid: '2'
            }],
        }
    },
    methods:{
        getQuesData(){
            this.request
            .post("question/findAll")
            .then(res => {
                this.quesData = res.data;
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
        getDiffData(){
            this.request
            .post("exas/findDiff")
            .then(res => {
                this.diffData = res.data;
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
            this.form.name= '%'+this.form.questionStem+'%';
            this.request
            .post("exasSubjectQuestion/find",this.form)
            .then(res => {
                this.tableData=res.data.data;
                this.form.name=this.form.questionStem.replace('%','');
                this.form.name=this.form.questionStem.replace('%','');
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
        this.getQuesData();
        this.getDiffData();
        this.getSubjectData();
        this.submitForm();
    },
  components: {}
}
</script>
<style>
</style>