<template>
  <ul class="navBox">
    <li class="nav_index">
      <img v-if="active == 0" src="./assets/shouyelan.png">
      <img v-else src="./assets/shouyehui.png" @click="change(0)">
    </li>
    <li class="nav_find">
      <img v-if="active == 1" src="./assets/findlan.png">
      <img v-else src="./assets/findhui.png" @click="change(1)">
    </li>
    <li class="nav_mine">
      <img v-if="active == 2" src="./assets/mylan.png">
      <img v-else src="./assets/myhui.png" @click="change(2)">
    </li>
  </ul>
</template>
<script>
import util from '../../methods/util.js'
export default {
  props: {
    active : 0
  },
  mounted() {
    util.iPhone()
  },
  methods: {
    change(active){
      this.$emit('change',active)
    }
  }
}
</script>
<style lang="less" rel="stylesheet/less">
  .navBox{
    height: 54px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: url('./assets/nav_bg.png') no-repeat;
    background-size: 100% 100%;
    padding-top: 9px;
    position: fixed;
    left: 0;
    bottom: 0;
    li{
      img{
        width: 24px;
        height: 24px;
      }
    }
    .nav_find{
      img{
        width: 40px;
        height: 40px;
      }
    }
  }
</style>