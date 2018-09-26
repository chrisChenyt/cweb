<template>
  <div id="setting_con">
    <van-nav-bar
      title="设置"
      left-arrow
      @click-left="onBack"
    />
    <van-cell-group class="setting_head_group">
      <van-cell center is-link @click="numberSafety">
        <template slot="title">
          <div class="setting_head">
            <img src="../assets/account_head.png">
            <div class="setting_head_des">
              <p>麻辣克里丝儿cc</p>
              <p>账号:chirschen</p>
            </div>
          </div>
        </template>
      </van-cell>
    </van-cell-group>
    <van-cell-group class="number_safety">
      <van-cell title="账号与安全" is-link @click="numberSafety" />
    </van-cell-group>
    <van-cell-group>
      <van-cell title="新消息通知" is-link @click="setNews" />
      <van-cell title="隐私" is-link @click="setHide" />
      <van-cell title="通用" is-link />
    </van-cell-group>
    <van-cell-group class="setting_about">
      <van-cell title="关于cweb" value="V1.0.0" is-link />
    </van-cell-group>
    <p id="logout_btn" @click="logout">退出登录</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    onBack() {
      this.$router.push({name: 'mine'})
    },
    numberSafety() {
      this.$router.push({name: 'numberSafety'})
    },
    setNews() {
      this.$router.push({name: 'settingNews'})
    },
    setHide() {
      this.$router.push({name: 'settingHide'})
    },
    logout() {
      sessionStorage.setItem('demo-token',null); // 将token清空
      this.$toast('退出登录成功'); // 退出登录成功
      this.$router.push({name: 'index'})
    }
  }
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
  #setting_con{
    background: #eaf1fe;
    min-height: 100vh;
  }
  .setting_head_group{
    margin-top: 15px;
  }
  .setting_head{
    display: flex;
    align-items: center; 
    img{
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    .setting_head_des{
      margin-left: 10px;
      p:nth-child(1){
        font-size: 15px;
      }
      p:nth-child(2){
        font-size: 13px;
        color: #8f8f94;
        margin-top: -5px;
      }
    }
  }
  .van-cell{
    font-size: 16px;
  }
  .number_safety,.setting_about{
    margin: 20px 0;
  }
  #logout_btn{
    text-align: center;
    font-size: 16px;
    color: #333;
    background-color: #fff;
    height: 44px;
    line-height: 44px;
    border: 1px solid #e5e5e5;
  }
</style>
<style>
  .van-cell__value{
    font-size: 14px;
    color: #8f8f94;
  }
</style>
