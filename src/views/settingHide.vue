<template>
  <div id="setHiedCon">
    <van-nav-bar
      title="隐私"
      left-text="设置"
      left-arrow
      @click-left="onBack"
    />
    <van-cell-group class="setHiedCon_top">
      <van-cell center title="加我为朋友时需要验证">
        <template>
          <van-switch v-model="checked1" size="24px" />
        </template>
      </van-cell>
    </van-cell-group>
    <van-cell-group>
      <van-cell center title="向我推荐QQ好友">
        <template>
          <van-switch v-model="checked2" size="24px" />
        </template>
      </van-cell>
      <van-cell center title="通过QQ号搜索到我">
        <template>
          <van-switch v-model="checked3" size="24px" />
        </template>
      </van-cell>
    </van-cell-group>
    <van-cell-group class="setHiedCon_phone">
      <van-cell center title="可通过手机号搜索到我">
        <template>
          <van-switch v-model="checked4" size="24px" />
        </template>
      </van-cell>
      <van-cell center title="向我推荐通讯录朋友">
        <template>
          <van-switch v-model="checked5" size="24px" />
        </template>
      </van-cell>
    </van-cell-group>
    <p class="new_detail_des">开启后，为你推荐已经开通cweb的手机联系人</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      checked1: true,
      checked2: false,
      checked3: false,
      checked4: true,
      checked5: false
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
  #setHiedCon{
    background: #eaf1fe;
    min-height: 100vh;
    .new_detail_des{
      font-size: 14px;
      margin: 10px 0 20px;
      padding: 0 10px;
      color: #8f8f94;
    }
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
  .setHiedCon_top{
    margin: 15px 0 20px;
  }
  .setHiedCon_phone{
    margin-top: 20px;
  }
</style>
<style>
  .van-cell__value{
    color: #8f8f94;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
</style>