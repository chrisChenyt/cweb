<template>
  <div id="indexCon">
    <div class="swiper" id="index_swiper">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../assets/banner_renz.png" />
          </div>
          <div class="swiper-slide">
            <img src="../assets/banner_lu.png" />
          </div>
          <div class="swiper-slide">
            <img src="../assets/banner_pin.png" />
          </div>
        </div>
      </div>
    </div>
    <div id="index_top">
      <ul>
        <li>
          <img src="../assets/icon_auction.png">
          <p>拍卖</p>
        </li>
        <li>
          <img src="../assets/icon_seckill.png">
          <p>秒杀</p>
        </li>
        <li>
          <img src="../assets/icon_selection.png">
          <p>精选</p>
        </li>
        <li>
          <img src="../assets/icon_vip.png">
          <p>会员</p>
        </li>
      </ul>
    </div>
    <div id="index_center_box">
      <div id="index_center">
        <div class="index_center_head">
          <span>
            <i></i>
            <b>火爆商品</b>
          </span>
          <img src="../assets/more_icon.png">
        </div>
        <ul id="photo_box">
          <li>
            <img src="../assets/huoche.jpg">
            <p class="photo_type">托马斯小火车</p>
            <p class="photo_des">1234人购买</p>
          </li>
          <li>
            <img src="../assets/motuo.jpg">
            <p class="photo_type">酷炫小摩托儿</p>
            <p class="photo_des">822人购买</p>
          </li>
          <li>
            <img src="../assets/three.jpg">
            <p class="photo_type">三级电焊头盔</p>
            <p class="photo_des">633人购买</p>
          </li>
          <li>
            <img src="../assets/youting.jpg">
            <p class="photo_type">豪华游艇</p>
            <p class="photo_des">822人购买</p>
          </li>
          <li>
            <img src="../assets/tv_old.jpg">
            <p class="photo_type">黑白电视机</p>
            <p class="photo_des">55人购买</p>
          </li>
          <li>
            <img src="../assets/airplane.jpg">
            <p class="photo_type">私人大飞机</p>
            <p class="photo_des">26人购买</p>
          </li>
        </ul>
      </div>
    </div>
    <navigation :active="active" @change="onChange"></navigation>
  </div>
</template>

<script>
import navigation from '../components/nav'
export default {
  data () {
    return {
      active: 0
    }
  },
  components: {
    navigation
  },
  mounted() {
    new Swiper('.swiper-container',{
      loop: true,
      autoplay: true,
      centeredSlides: true,
      effect : 'coverflow',
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 30,
        stretch: 15,
        depth: 80,
        modifier: 2,
        slideShadows : false
      },
    })
  },
  methods: {
    onChange(active) {
      if(active == 1){// 内容
        this.$router.push({name: 'content'})
      } else if (active == 2){// 我的
        this.$router.push({name: 'mine'})
      }
    }
  }
}
</script>
<style lang="less" rel="stylesheet/less" scoped>
  @import 'swiper/dist/css/swiper.css';
  #indexCon{
    background: #eaf1fe;
    min-height: 100vh;
    padding-bottom: 80px;
    #index_top{
      padding: 0 15px;
      margin-top: 14px;
      ul{
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: #ffffff;
        border-radius: 12px;
        height: 115px;
        box-shadow: 0 4px 16px 0 rgba(122,175,250,0.14);
        li{
          text-align: center;
          img{
            width: 56px;
            height: 56px;
          }
          p{
            font-size: 12px;
            color: #8abaff;
            margin-top: 5px;
          }
        }
      }
    }
    #index_center_box{
      padding: 0 15px;
      margin-top: 14px;
    }
    #index_center{
      background: #ffffff;
      border-radius: 12px;
      box-shadow: 0 4px 16px 0 rgba(122,175,250,0.14);
      .index_center_head{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 12px;
        span{
          display: flex;
          align-items: center;
          color: #8abaff;
          font-size: 14px;
          line-height: 20px;
          i{
            display: inline-block;
            width: 1px;
            height: 20px;
            background: #8abaff;
            margin-right: 6px;
          }
          b{
            padding-top: 2px;
          }
        }
        img{
          width: 30px;
          padding: 5px;
        }
      }
      #photo_box{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 0 10px;
        li{
          padding-bottom: 10px;
          img{
            width: 152px;
            height: 116px;
            border-radius: 4px;
          }
          .photo_type{
            color: #8abaff;
            font-size: 14px;
            margin-top: 5px;
          }
          .photo_des{
            color: #999999;
            font-size: 12px;
            margin-top: 6px;
          }
        }
      }
    }
  }
  #index_swiper{
    padding-top: 20px;
  }
  .swiper-slide{
    width: 338px;
    height: 140px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 12px;
    }
  }
</style>