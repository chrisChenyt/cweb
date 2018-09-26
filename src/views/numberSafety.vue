<template>
  <div id="numSafetyCon">
    <van-nav-bar
      title="账号与安全"
      left-text="设置"
      left-arrow
      @click-left="onBack"
    />
    <van-cell-group class="numSafety_top">
      <van-cell title="头像" is-link center>
        <template>
          <div class="setting_head">
            <img src="../assets/account_head.png">
          </div>
        </template>
      </van-cell>
      <van-cell clickable title="昵称" value="麻辣克里丝儿cc" />
      <van-cell clickable title="账号" value="chirschen" />
    </van-cell-group>
    <van-cell-group>
      <van-cell clickable title="QQ号" value="****" />
      <van-cell clickable title="手机号" value="****" />
      <van-cell clickable title="邮箱" value="****" />
    </van-cell-group>
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
      this.$router.push({name: 'setting'})
    },
  }
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
  #numSafetyCon{
    background: #eaf1fe;
    min-height: 100vh;
  }
  .setting_head{
    img{
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
  .van-cell{
    font-size: 16px;
  }
  .numSafety_top{
    margin: 15px 0 20px;
  }
</style>
<style>
  .van-cell__value{
    font-size: 14px;
    color: #999;
  }
</style>