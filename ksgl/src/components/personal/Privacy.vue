<template>
  <div>
    <el-row>
      <el-col :span="24" :offset="2">
        <el-tabs value="first">
          <el-tab-pane label="隐私管理" name="first">

            <el-tabs v-model="activeName" type="card" @tab-click="handleClick"> 
              <el-tab-pane label="个人资料" name="first">
                <el-form ref="form" :model="form" :rules="rules" label-width="80px">
                  <el-form-item label="头像">
                    <el-col :span="6">
                      <el-upload class="avatar-uploader" action="http://192.168.43.29:9999/subject/singlefile" :show-file-list="true" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                      </el-upload>
                    </el-col>
                  </el-form-item>
                  <el-form-item label="真实姓名" prop="realname">
                    <el-col :span="11">
                      <el-input type="text" v-model="form.realname"></el-input>
                    </el-col>
                  </el-form-item>
                  <el-form-item label="身份证号" prop='idnumber'>
                    <el-col :span="11">
                      <el-input v-model="form.idnumber"></el-input>
                    </el-col>
                  </el-form-item>
                  <el-form-item label="手机号" prop='phone'>
                    <el-col :span="11">
                      <el-input v-model="form.phone"></el-input>
                    </el-col>
                  </el-form-item>
                  <el-form-item label="性别">
                    <el-col :span="8">
                      <el-radio-group v-model="form.sex">
                        <el-radio label="男"></el-radio>
                        <el-radio label="女"></el-radio>
                      </el-radio-group>
                    </el-col>
                  </el-form-item>
                  <el-form-item label="文化程度" prop='culture'>
                    <el-col :span="11">
                      <el-input v-model="form.culture"></el-input>
                    </el-col>
                  </el-form-item>
                  <el-form-item label="地址" prop='address'>
                    <el-col :span="11">
                      <el-input v-model="form.address"></el-input>
                    </el-col>
                  </el-form-item>
                  <el-form-item>
                    <el-col :span="11">
                      <el-button type="primary" @click="onSubmit('form')">添加</el-button>
                    </el-col>
                  </el-form-item>       
                </el-form>
              </el-tab-pane>

              <el-tab-pane label="修改密码" name="second">
                <el-row>
                  <el-col :span="16" :offset="2">
                    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                      <el-form-item label="原密码" prop="ypass">
                        <el-input type="password" v-model="ruleForm.ypass" autocomplete="off"></el-input>
                      </el-form-item>
                      <el-form-item label="新密码" prop="pass">
                        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                      </el-form-item>
                      <el-form-item label="确认密码" prop="checkPass">
                        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                      </el-form-item>
                      <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                      </el-form-item>
                    </el-form>
                  </el-col>
                </el-row>
              </el-tab-pane>
            </el-tabs>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    prop:{
      
    },
    data() {
      var validateRealname = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入真实姓名'));
        }
        callback();
      };
      var validateIdnumber = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入身份证号'));
        }
        callback();
      };
      var validatePhone = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入手机号'));
        }
        callback();
      };
      var validateCulture = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入文化程度'));
        }
        callback();
      };
      var validateAddress = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入地址'));
        }
        callback();
      };
      var validatePass = (rule ,value ,callback) => {
        if (value === '') {
          callback(new Error('请输入原密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass1 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入新密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入新密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        activeName: 'first',
        form: {
          realname: '',
          idnumber: '',
          phone: '',
          sex: '男',
          culture: '',
          address: '',
          resource: '',
          desc: ''
        },
        imageUrl: '',
        ruleForm: {
          ypass: '',
          pass: '',
          checkPass: ''
        },rules: {
          realname: [
            { validator: validateRealname,trigger: 'blur' }
          ],
          idnumber: [
            { validator: validateIdnumber,trigger: 'blur' }
          ],
          phone: [
            { validator: validatePhone,trigger: 'blur' }
          ],
          culture: [
            { validator: validateCulture,trigger: 'blur' }
          ],
          address: [
            { validator: validateAddress,trigger: 'blur' }
          ],
          ypass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass1, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      onSubmit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  };
</script>


<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
