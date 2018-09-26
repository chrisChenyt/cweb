<template>
  <div id="login_con">
    <div id="login" v-show="isLoginModel">
      <div id="login_phone">
        <input type="number" v-model="account" pattern="\d*" placeholder="请输入手机号" oninput="if(value.length>11)value=value.slice(0,11)">
      </div>
      <div id="login_password">
        <input type="password" v-model="password" placeholder="请输入密码" maxlength="20" autocomplete="off">
      </div>
      <div id="login_btn" @click="login">登录</div>
      <div id="login_to_signin">
        <span>还没有账号？</span><span id="to_signin_btn" @click="toSigninModel">立即注册</span>
      </div>
    </div>
    <div id="signin" v-show="!isLoginModel">
      <div id="signin_phone">
        <input type="number" v-model="rAccount" pattern="\d*" placeholder="请输入手机号" oninput="if(value.length>11)value=value.slice(0,11)">
      </div>
      <div id="signin_password">
        <input type="password" v-model="rPassword" placeholder="请输入密码" maxlength="20" autocomplete="off">
      </div>
      <div id="signin_btn" @click="signin">注册</div>
      <div id="signin_to_login">
        <span>已有账号？</span><span id="to_login_btn" @click="toLoginModel">立即登录</span>
      </div>
    </div>
  </div>
</template>

<script>
import webHttp from '../methods/http.js'
import util from '../methods/util.js'
export default {
  data () {
    return {
      isLoginModel: true,
      redirectUrl: '',
      account: '',
      password: '',
      rAccount: '',
      rPassword: ''
    }
  },
  mounted() {
    // 登录后跳转地址
    this.redirectUrl = this.$route.query.redirect
  },
  methods: {
    toSigninModel() {
      this.isLoginModel = false
    },
    toLoginModel() {
      this.isLoginModel = true
    },
    signin() {
      if (!util.checkMobile(parseInt(this.rAccount))) {//手机号格式是否正确
        this.$toast({
          duration: 1500,
          message: '您输入的手机号有误'
        })
      } else {
        webHttp({
          url: '/auth/register',
          method: 'post'
        },{
          name: this.rAccount,
          password: this.rPassword
        }).then((res) => { // axios返回的数据都在res.data里
            if(res.data.success){ // 如果成功
              sessionStorage.setItem('demo-token',res.data.token); // 用sessionStorage把token存下来
              this.$toast({
                duration: 1500,
                message: '注册成功！' // 登录成功，显示提示语
              })
              if(this.redirectUrl){
                this.$router.push({name: this.redirectUrl}) // 进入跳转之前页，注册成功
              }else{
                this.$router.push({name: 'index'}) // 进入首页，注册成功
              }
            }else{
              this.$toast({
                duration: 1500,
                message: res.data.message // 注册失败，显示提示语
              })
              sessionStorage.setItem('demo-token',null); // 将token清空
            }
        }).catch(
          (err) => {
            this.$toast({
              duration: 1500,
              message: '请求错误！'
            })
            sessionStorage.setItem('demo-token',null); // 将token清空
          }
        )
      }
    },
    login() {
      if (!util.checkMobile(parseInt(this.account))) {//手机号格式是否正确
        this.$toast({
          duration: 1500,
          message: '您输入的手机号有误'
        })
      } else {
        webHttp({
          url: '/auth/login',
          method: 'post'
        },{
          name: this.account,
          password: this.password
        }).then((res) => { // axios返回的数据都在res.data里
          if(res.data.success){ // 如果成功
            sessionStorage.setItem('demo-token',res.data.token); // 用sessionStorage把token存下来
            this.$toast({
              duration: 1500,
              message: '登录成功！'// 登录成功，显示提示语
            })
            this.$router.push({name: 'index'}) // 进入首页，登录成功
          }else{
            this.$toast({
              duration: 1500,
              message: res.data.message // 登录失败，显示提示语
            })
            sessionStorage.setItem('demo-token',null); // 将token清空
          }
        }).catch(
          (err) => {
            this.$toast({
              duration: 1500,
              message: '请求错误！'
            })
            sessionStorage.setItem('demo-token',null); // 将token清空
          }
        )
      }
    }
  }
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
  #login_con{
    min-height: 100vh;
    background: url('../assets/login_bg.png') no-repeat;
    background-size: 100% 100%;
    #login{
      padding: 0 18px;
      width: 100%;
      position: absolute;
      bottom: 80px;
      div{
        input{
          width: 100%;
          background: none;
          border: none;
          font-size: 14px;
          color: #fff;
          padding: 26px 0;
        }
        input::-webkit-input-placeholder{
          color: #fff;
        }
      }
      #login_phone{
        border-top: 1px solid #82a2b8;
        border-bottom: 1px solid #82a2b8;
        padding: 0 15px;
      }
      #login_password{
        border-bottom: 1px solid #82a2b8;
        padding: 0 15px;
      }
      #login_btn{
        height: 36px;
        line-height: 36px;
        background: #87c15e;
        text-align: center;
        color: #fff;
        font-size: 15px;
        border-radius: 6px;
        margin-top: 23px;
      }
      #login_to_signin{
        text-align: center;
        color: #fff;
        font-size: 15px;
        margin-top: 30px;
        #to_signin_btn{
          font-size: 16px;
          text-decoration: underline;
        }
      }
    }
    #signin{
      padding: 0 18px;
      width: 100%;
      position: absolute;
      bottom: 80px;
      div{
        input{
          width: 100%;
          background: none;
          border: none;
          font-size: 14px;
          color: #fff;
          padding: 26px 0;
        }
        input::-webkit-input-placeholder{
          color: #fff;
        }
      }
      #signin_phone{
        border-top: 1px solid #82a2b8;
        border-bottom: 1px solid #82a2b8;
        padding: 0 15px;
      }
      #signin_password{
        border-bottom: 1px solid #82a2b8;
        padding: 0 15px;
      }
      #signin_btn{
        height: 36px;
        line-height: 36px;
        background: #87c15e;
        text-align: center;
        color: #fff;
        font-size: 15px;
        border-radius: 6px;
        margin-top: 23px;
      }
      #signin_to_login{
        text-align: center;
        color: #fff;
        font-size: 15px;
        margin-top: 30px;
        #to_login_btn{
          font-size: 16px;
          text-decoration: underline;
        }
      }
    }
  }
</style>