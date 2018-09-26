<template>
  <div id="mineCon">
    <div id="account_head">
      <p>
        <span id="setting_btn" @click="toSetting">
          <img src="../assets/mine_setting.png"><i>设置</i>
        </span>
      </p>
    </div>
    <div id="account_center_box">
      <div id="account_center_con">
        <div id="member_head">
          <div id="member_head_photo">
            <img src="../assets/account_head.png">
          </div>
          <div v-show="false" class="member_con"><img src="../assets/member.png"><span>黑铁会员</span></div>
        </div>
        <p class="member_name">麻辣克里丝儿cc</p>
        <p class="member_des">这不是开往幼儿园的车！</p>
        <ul>
          <li>
            <p>6</p>
            <p>商品</p>
          </li>
          <li>
            <p>1131</p>
            <p>人气</p>
          </li>
          <li>
            <p>3213</p>
            <p>金币</p>
          </li>
        </ul>
      </div>
    </div>
    <div id="account_fun_box">
      <div id="account_fun">
        <div class="account_fun_head">
          <span>
            <i></i>
            <b>我的商品</b>
          </span>
        </div>
        <ul>
          <li>
            <img src="../assets/huoche.jpg">
            <p class="mine_list_name">托马斯小火车</p>
            <p class="mine_list_num">
              <span><i class="mine_icon_eye">23333</i><img src="../assets/mine_icon_eye.png"></span>
              <span>
                <i>654</i><img src="../assets/mine_icon_xin.png">
                <i class="mine_icon_say">99</i><img src="../assets/mine_icon_say.png">
              </span>
            </p>
          </li>
          <li>
            <img src="../assets/motuo.jpg">
            <p class="mine_list_name">酷炫小摩托儿</p>
            <p class="mine_list_num">
              <span><i class="mine_icon_eye">23333</i><img src="../assets/mine_icon_eye.png"></span>
              <span>
                <i>654</i><img src="../assets/mine_icon_xin.png">
                <i class="mine_icon_say">99</i><img src="../assets/mine_icon_say.png">
              </span>
            </p>
          </li>
          <li>
            <img src="../assets/three.jpg">
            <p class="mine_list_name">三级电焊头盔</p>
            <p class="mine_list_num">
              <span><i class="mine_icon_eye">23333</i><img src="../assets/mine_icon_eye.png"></span>
              <span>
                <i>654</i><img src="../assets/mine_icon_xin.png">
                <i class="mine_icon_say">99</i><img src="../assets/mine_icon_say.png">
              </span>
            </p>
          </li>
          <li>
            <img src="../assets/youting.jpg">
            <p class="mine_list_name">豪华游艇</p>
            <p class="mine_list_num">
              <span><i class="mine_icon_eye">23333</i><img src="../assets/mine_icon_eye.png"></span>
              <span>
                <i>654</i><img src="../assets/mine_icon_xin.png">
                <i class="mine_icon_say">99</i><img src="../assets/mine_icon_say.png">
              </span>
            </p>
          </li>
          <li>
            <img src="../assets/tv_old.jpg">
            <p class="mine_list_name">黑白电视机</p>
            <p class="mine_list_num">
              <span><i class="mine_icon_eye">23333</i><img src="../assets/mine_icon_eye.png"></span>
              <span>
                <i>654</i><img src="../assets/mine_icon_xin.png">
                <i class="mine_icon_say">99</i><img src="../assets/mine_icon_say.png">
              </span>
            </p>
          </li>
          <li>
            <img src="../assets/airplane.jpg">
            <p class="mine_list_name">私人大飞机</p>
            <p class="mine_list_num">
              <span><i class="mine_icon_eye">23333</i><img src="../assets/mine_icon_eye.png"></span>
              <span>
                <i>654</i><img src="../assets/mine_icon_xin.png">
                <i class="mine_icon_say">99</i><img src="../assets/mine_icon_say.png">
              </span>
            </p>
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
      active: 2
    }
  },
  components: {
    navigation
  },
  methods: {
    onChange(active) {
      if(active == 0){// 首页
        this.$router.push({name: 'index'})
      } else if (active == 1){// 内容
        this.$router.push({name: 'content'})
      }
    },
    toSetting() {
      this.$router.push({name: 'setting'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" rel="stylesheet/less" scoped>
#mineCon{
  background: #eaf1fe;
  min-height: 100vh;
  padding-bottom: 80px;
}
  #account_head{
    width: 100%;
    background-image: url("../assets/mine_bg.png");
    background-size: no-repeat;
    background-size: 100% 100%;
    text-align: center;
    height: 120px;
    p{
      padding: 10px 15px;
      #setting_btn{
        font-size: 14px;
        color: #ffffff;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 5px 0;
        position: absolute;
        right: 15px;
        img{
          width: 19px;
          height: 18px;
          margin-right: 5px;
        }
      }
    }
  }
  #account_center_box{
    padding: 0 10px;
    width: 100%;
    height: 95px;
    #account_center_con{
      box-shadow: 0 4px 16px 0 rgba(122,175,250,0.14);
      height: 135px;
      border-radius: 10px;
      background: #ffffff;
      position: relative;
      top: -40px;
      text-align: center;
      #member_head{
        position: relative;
        top: -34px;
        height: 34px;
        #member_head_photo{
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: 68px;
          height: 68px;
          border-radius: 50%;
          background: #f1f1f1;
          img{
            width: 62px;
            height: 62px;
            border-radius: 50%;
          }
        }
        .member_con{
          position: absolute;
          display: inline-flex;
          background: #3b3e45;
          color: #ffffff;
          align-items: center;
          border-radius: 15px;
          padding-right: 6px;
          img{
            width: 16px;
            background: #eee;
            border-radius: 50%;
          }
          span{
            font-size: 12px;
            margin-left: 3px;
          }
        }
      }
      .member_name{
        color: #85b8fd;
        font-size: 14px;
        padding-top: 3px;
      }
      .member_des{
        color: #999999;
        font-size: 12px;
        padding-top: 3px;
      }
      ul{
        display: flex;
        justify-content: space-between;
        padding: 12px 32px 0;
        li{
          text-align: center;
          font-size: 15px;
          color: #222222;
          p:nth-child(2){
            color: #999999;
            font-size: 12px;
            margin-top: -2px;
          }
        }
      }
    }
  }
  #account_fun_box{
    padding: 0 15px;
    margin-top: 14px;
    #account_fun{
      background: #ffffff;
      border-radius: 12px;
      box-shadow: 0 4px 16px 0 rgba(122,175,250,0.14);
      .account_fun_head{
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
      }
      ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 0 10px;
        li{
          >img{
            width: 152px;
            height: 116px;
            border-radius: 4px;
          }
          .mine_list_name{
            color: #8abaff;
            font-size: 14px;
            padding-top: 5px;
          }
          .mine_list_num{
            font-size: 12px;
            color: #999999;
            padding: 2px 10px 12px 0;
            display: flex;
            justify-content: space-between;
            span{
              display: flex;
              align-items: center;
              img{
                width: 15px;
              }
              i{
                transform: scale(0.9);
              }
              .mine_icon_eye{
                margin-right: 3px;
              }
              .mine_icon_say{
                margin: 0 2px 0 5px;
              }
            }
          }
        }
      }
    }
  }
</style>
