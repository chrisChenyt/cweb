<template>
  <div id="setNewsCon">
    <van-nav-bar
      title="新消息通知"
      left-text="设置"
      left-arrow
      @click-left="onBack"
    />
    <van-cell-group class="setNewsCon_top">
      <van-cell clickable title="接收新消息通知" value="已开启" />
    </van-cell-group>
    <van-cell-group>
      <van-cell center title="通知显示消息详情">
        <template>
          <van-switch v-model="checked1" size="24px" />
        </template>
      </van-cell>
    </van-cell-group>
    <p class="new_detail_des">若关闭，当收到新消息时，通知提示将不显示发信人和内容摘要</p>
    <van-cell-group>
      <van-cell center title="声音">
        <template>
          <van-switch v-model="checked2" size="24px" />
        </template>
      </van-cell>
      <van-cell center title="震动">
        <template>
          <van-switch v-model="checked3" size="24px" />
        </template>
      </van-cell>
    </van-cell-group>
    <p class="new_detail_des">当cweb在运行时，你可以设置是否需要声音或者震动</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      checked1: true,
      checked2: true,
      checked3: true
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
  #setNewsCon{
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
  .setNewsCon_top{
    margin: 15px 0 20px;
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