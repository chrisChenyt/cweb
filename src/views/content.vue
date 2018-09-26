<template>
  <div id="pro_con">
    <form action="/" class="content_search">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        background="#eaf1fe"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" class="content_list">
      <van-list
        v-model="loading"
        :finished="finished"
        @load="onLoad"
      >
        <ul id="pro_list_con">
          <li>
            <img src="../assets/huoche.jpg">
            <p class="pro_list_name"><span>托马斯小火车</span><img src="../assets/list_more_icon.png"></p>
            <p class="pro_list_time">2018.09.18</p>
            <p class="pro_list_num">
              23333<img src="../assets/mine_icon_eye.png"></span>
              99<img src="../assets/mine_icon_say.png">
            </p>
          </li>
          <li>
            <img src="../assets/motuo.jpg">
            <p class="pro_list_name"><span>酷炫小摩托儿</span><img src="../assets/list_more_icon.png"></p>
            <p class="pro_list_time">2018.09.18</p>
            <p class="pro_list_num">
              23333<img src="../assets/mine_icon_eye.png"></span>
              99<img src="../assets/mine_icon_say.png">
            </p>
          </li>
          <li>
            <img src="../assets/three.jpg">
            <p class="pro_list_name"><span>三级电焊头盔</span><img src="../assets/list_more_icon.png"></p>
            <p class="pro_list_time">2018.09.18</p>
            <p class="pro_list_num">
              23333<img src="../assets/mine_icon_eye.png"></span>
              99<img src="../assets/mine_icon_say.png">
            </p>
          </li>
          <li>
            <img src="../assets/youting.jpg">
            <p class="pro_list_name"><span>豪华游艇</span><img src="../assets/list_more_icon.png"></p>
            <p class="pro_list_time">2018.09.18</p>
            <p class="pro_list_num">
              23333<img src="../assets/mine_icon_eye.png"></span>
              99<img src="../assets/mine_icon_say.png">
            </p>
          </li>
          <li>
            <img src="../assets/tv_old.jpg">
            <p class="pro_list_name"><span>黑白电视机</span><img src="../assets/list_more_icon.png"></p>
            <p class="pro_list_time">2018.09.18</p>
            <p class="pro_list_num">
              23333<img src="../assets/mine_icon_eye.png"></span>
              99<img src="../assets/mine_icon_say.png">
            </p>
          </li>
          <li>
            <img src="../assets/airplane.jpg">
            <p class="pro_list_name"><span>私人大飞机</span><img src="../assets/list_more_icon.png"></p>
            <p class="pro_list_time">2018.09.18</p>
            <p class="pro_list_num">
              23333<img src="../assets/mine_icon_eye.png"></span>
              99<img src="../assets/mine_icon_say.png">
            </p>
          </li>
        </ul>
      </van-list>
    </van-pull-refresh>
    <navigation :active="active" @change="onChange"></navigation>
  </div>
</template>

<script>
import navigation from '../components/nav'
import { Toast } from 'vant';
export default {
  data () {
    return {
      active: 1,
      value: '',
      list: [],
      loading: false,
      finished: false,
      isLoading: false
    }
  },
  components: {
    navigation
  },
  mounted() {
  },
  methods: {
    onChange(active) {
      if(active == 0){// 首页
        this.$router.push({name: 'index'})
      } else if (active == 2){// 我的
        this.$router.push({name: 'mine'})
      }
    },
    onSearch() {

    },
    onCancel() {
      Toast('取消')
    },
    onLoad() {
      setTimeout(() => {
        // for (let i = 0; i < 10; i++) {
        //   this.list.push(this.list.length + 1);
        // }
        this.loading = false;

        // if (this.list.length >= 40) {
          this.finished = true;
        // }
      }, 500);
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
      }, 500);
    }
  }
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
  #pro_con{
    background: #eaf1fe;
    min-height: 100vh;
    padding-bottom: 80px;
  }
  .content_search{
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
  }
  .content_list{
    padding-top: 44px;
  }
  #pro_list_con{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 15px;
    li{
      background: #ffffff;
      border-radius: 10px;
      margin-top: 25px;
      >img{
        width: 165px;
        height: 123px;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
      }
      >p{
        padding: 0 10px;
      }
      .pro_list_name{
        color: #666666;
        font-size: 14px;
        padding-top: 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        img{
          height: 18px;
          margin-top: 2px;
        }
      }
      .pro_list_time{
        color: #999999;
        font-size: 12px;
        margin-top: -2px;
      }
      .pro_list_num{
        font-size: 12px;
        color: #999999;
        padding: 4px 10px 6px 0;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        img{
          width: 15px;
          margin-left: 3px;
        }
        img:nth-child(1){
          margin-right: 6px;
        }
      }
    }
  }
</style>
