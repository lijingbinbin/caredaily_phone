<!--
 * @Author: your name
 * @Date: 2019-11-13 17:25:01
 * @LastEditTime: 2019-11-18 00:00:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \caredily66\src\views\me\me.vue
 -->
<template>
  <div class="homeBox">
    <div class="head">
      <span>得乐云</span>
    </div>
    <!-- 信息 -->
    <div class="msg">
      <div class="content">
        <span class="name">王洋</span>
        <div class="photo">
          <img src alt />
        </div>
        <div class="after">
          <img src="../../cmmon/image/me1/Yq_Txbj.png" alt />
        </div>
        <div class="level">
          <span class="daili">111111</span>
        </div>
        <div class="diamond">
          <img class="zuanshi" src="../../cmmon/image/me1/钻石.png" alt />
        </div>
        <div class="shuju">
          <div class="xinxi">
            <span class="left">余额</span>
            <span class="right">1920.00000</span>
            <span class="leftt">团队数量</span>
            <span class="rightt">20</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 邀请 -->
    <div class="invite">
      <div class="center">
        <span class="add">邀请代理商加入</span>
        <span class="fuli">
          可获得
          <span class="jing">平推荐、返利金、商品</span>打折等权利!
        </span>
        <div class="btn">
          <span>点我邀请</span>
        </div>
      </div>
    </div>
    <!-- 常用 -->
    <div class="user">
      <div class="center">
        <h3>常用</h3>
        <div class="top"></div>

        <div class="list">
          <van-grid :border="false">
            <van-grid-item :icon="newIcon[0]" text="我的订单" />
            <van-grid-item :icon="newIcon[1]" text="下级订单" />
            <van-grid-item :icon="newIcon[2]" text="代付款" />
            <van-grid-item :icon="newIcon[3]" text="退单" />
          </van-grid>
        </div>
      </div>
    </div>
    <!-- 授权 -->
    <div class="accredit">
      <div class="center">
        <h3>授权</h3>
        <div class="swipe">
          <van-swipe style="height: 156px;" indicator-color="white">
            <van-swipe-item>
              <van-grid :gutter="0" :border="false">
                <van-grid-item :icon="newIcon[4]" text="我的业绩" />
                <van-grid-item :icon="newIcon[5]" text="报表中心" />
                <van-grid-item :icon="newIcon[6]" text="在途订单" />
                <van-grid-item :icon="newIcon[7]" text="促销订单" />
                <van-grid-item :icon="newIcon[8]" text="收货订单" />
                <van-grid-item :icon="newIcon[9]" text="银行信息" />
                <van-grid-item :icon="newIcon[10]" text="记账中心" />
                <van-grid-item :icon="newIcon[11]" text="账户资金" />
              </van-grid>
            </van-swipe-item>
            <van-swipe-item>
              <van-grid :border="false">
                <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" />
              </van-grid>
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>
    </div>
    <!-- 订单 -->
    <div class="order">
      <div class="center">
        <h3>订单</h3>
        <div class="swipe">
          <van-grid :border="false">
            <!-- <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" /> -->
            <van-grid-item :icon="newIcon[12]" text="我的授权" />
            <van-grid-item :icon="newIcon[13]" text="我要升级" />
            <van-grid-item :icon="newIcon[14]" text="备案及反馈" />
            <van-grid-item :icon="newIcon[15]" text="电子合同" />
            <van-grid-item :icon="newIcon[16]" text="退出代理" />
            <van-grid-item :icon="newIcon[0]" text="待处理事项" />
          </van-grid>
        </div>
      </div>
    </div>
    <!-- other -->
    <div class="other">
      <div class="center">
        <h3>常用</h3>
        <div class="top"></div>

        <div class="list">
          <van-grid :border="false">
            <van-grid-item :icon="newIcon[18]" text="素材中心" />
            <van-grid-item :icon="newIcon[19]" text="退出中心" />
          </van-grid>
        </div>
      </div>
    </div>

    <!-- 底部 -->
    <!-- <div class="footer"> -->
      <!-- <div class="item">
        <i class="icon-activeHome iconfont"></i>
      </div>

      <div class="item">1</div>
      <div class="item">1</div>
      <div class="item">1</div>
      <div class="item">1</div>-->
      <!-- <van-tabbar v-model="active">
        <van-tabbar-item name="home" :icon="tabbarIcon[0]">标签</van-tabbar-item>
        <van-tabbar-item name="search" :icon="tabbarIcon[1]">标签</van-tabbar-item>
        <van-tabbar-item name="friends" :icon="tabbarIcon[2]">标签</van-tabbar-item>
        <van-tabbar-item name="setting" :icon="tabbarIcon[3]">标签</van-tabbar-item>
        <van-tabbar-item name="setting" :icon="tabbarIcon[4]">标签</van-tabbar-item>
      </van-tabbar>-->
      <!-- <van-tabbar v-model="active" class="active_tab">
        <van-tabbar-item v-for="(item,index) in tabbars" :key="index" @click="tab(index,item.name)">
          <span :class="currIndex == index ? active:''">{{item.title}}</span>
          <template slot="icon" slot-scope="props">
            <img :src="props.active ? item.active : item.normal" />
          </template>
        </van-tabbar-item>
      </van-tabbar>
    </div> -->
    <tabber></tabber>
  </div>
</template>

<script>
import tabber from '../../components/common/tabbar.vue';
export default {
  data() {
    return {
      newIcon: [
        require("../../cmmon/image/me1/Wd_Lb1／Wd_ICON1.png"),
        require("../../cmmon/image/me1/Wd_Lb1／Wd_ICON2.png"),
        require("../../cmmon/image/me1/Wd_Lb1／Wd_ICON3.png"),
        require("../../cmmon/image/me1/Wd_Lb1／Wd_ICON4.png"),
        require("../../cmmon/image/me1/Wd_Lb1／Wd_ICON5.png"),
        require("../../cmmon/image/me1/Wd_Lb1／Wd_ICON6.png"),
        require("../../cmmon/image/me1/Wd_Lb1／Wd_ICON7.png"),
        require("../../cmmon/image/me1/Wd_Lb1／Wd_ICON8.png"),
        require("../../cmmon/image/me1/Wd_Lb1／Wd_ICON9.png"),
        require("../../cmmon/image/me1/Wd_Lb1／Wd_ICON10.png"),
        require("../../cmmon/image/me1/编组.png"),
        require("../../cmmon/image/me1/Wd_Lb1／Wd_ICON21.png"),
        require("../../cmmon/image/me1/Wd_Lb1／Wd_ICON11.png"),
        require("../../cmmon/image/me1/Wd_Lb1／Wd_ICON12.png"),
        require("../../cmmon/image/me1/Wd_Lb1／Wd_ICON13.png"),
        require("../../cmmon/image/me1/Wd_Lb1／Wd_ICON14.png"),
        require("../../cmmon/image/me1/Wd_Lb1／Wd_ICON15.png"),
        require("../../cmmon/image/me1/Wd_Lb1／Wd_ICON1.png"),
        require("../../cmmon/image/me1/Wd_Lb1／Wd_ICON17.png"),
        require("../../cmmon/image/me1/Wd_Lb1／Wd_ICON18.png")
      ],
      tabbarIcon: [
        require("../../cmmon/image/tabbar/首页-未选中.png"),
        require("../../cmmon/image/tabbar/首页-未选中.png"),
        require("../../cmmon/image/tabbar/首页-未选中.png"),
        require("../../cmmon/image/tabbar/首页-未选中.png"),
        require("../../cmmon/image/tabbar/首页-未选中.png")
      ],
      currIndex: 0,
      active: 0,
      tabbars: [
        {
          name: "index",
          title: "首页",
          normal: require("../../cmmon/image/tabbar/首页-未选中.png"),
          active: require("../../cmmon/image/tabbar/首页-选中.png")
        },
        {
          name: "category",
          title: "分类",
          normal: require("../../cmmon/image/tabbar/下单.png"),
          active: require("../../cmmon/image/tabbar/下单 (1).png")
        },
        {
          name: "message",
          title: "消息",
          normal: require("../../cmmon/image/tabbar/书.png"),
          active: require("../../cmmon/image/tabbar/书 (1).png")
        },
        {
          name: "cart",
          title: "购物车",
          normal: require("../../cmmon/image/tabbar/消息.png"),
          active: require("../../cmmon/image/tabbar/消息 (1).png")
        },
        {
          name: "mine",
          title: "我的",
          normal: require("../../cmmon/image/tabbar/笑脸.png"),
          active: require("../../cmmon/image/tabbar/笑脸 (1).png")
        }
      ]
    };
  },
  components:{
    tabber:tabber
  },
  methods:{
    tab(index, val) {
      this.currIndex = index;
      this.$router.push(val);
    }
  }
};
</script>


<style lang="less" scoped>
.homeBox {
  // position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  background-color: #f5f6fa;
}

.head {
  widows: 100%;
  height: 44px;
  text-align: center;
  line-height: 44px;
  background-color: #ffffff;

  span {
    width: 54px;
    height: 44px;
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: rgba(0, 0, 0, 1);
    line-height: 44px;
  }
}
.msg {
  width: 100%;
  height: 104px;
  // background-color: aqua;
  padding: 0 15px;
  .content {
    position: relative;
    .name {
      position: absolute;
      width: 44px;
      height: 30px;
      font-size: 22px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(14, 14, 14, 1);
      line-height: 30px;
      top: 5px;
    }
    .photo {
      position: absolute;
      width: 60px;
      height: 60px;
      background-color: brown;
      border-radius: 50%;
      right: 0;
      top: 0px;
    }
    .after {
      position: absolute;
      width: 22px;
      height: 22px;
      right: 3px;
      top: 45px;
      img {
        width: 100%;
      }
    }
    .level {
      position: absolute;
      left: 10px;
      top: 40px;
      width: 67px;
      height: 19px;
      background: linear-gradient(
        180deg,
        rgba(255, 232, 94, 1) 0%,
        rgba(224, 128, 0, 1) 100%
      );
      border-radius: 0px 73px 73px 0px;
      opacity: 0.8;
      text-align: center;
      .daili {
        display: block;
        width: 44px;
        height: 16px;
        font-size: 11px;
        font-family: PingFang-SC-Medium, PingFang-SC;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: 16px;
        margin-left: 8px;
      }
    }
    .diamond {
      position: absolute;
      width: 20px;
      height: 20px;
      top: 40px;
      .zuanshi {
        width: 20px;
      }
    }
    .shuju {
      position: absolute;
      width: 100%;
      height: 20px;
      top: 72px;
      line-height: 20px;
      .left {
        position: absolute;
        width: 24px;
        height: 20px;
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #a1a1a2;
        line-height: 20px;
        -webkit-transform-origin-x: 0;
        -webkit-transform: scale(0.84);
      }
      .leftt {
        position: absolute;
        left: 115px;
        width: 48px;
        height: 20px;
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #a1a1a2;
        line-height: 20px;
        -webkit-transform-origin-x: 0;
        -webkit-transform: scale(0.84);
      }
      .right {
        position: absolute;
        left: 29px;
        width: px;
        height: 20px;
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(0, 0, 0, 1);
        line-height: 20px;
      }
      .rightt {
        position: absolute;
        left: 168px;
        width: px;
        height: 20px;
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(0, 0, 0, 1);
        line-height: 20px;
      }
    }
  }
}
.invite {
  width: 100%;
  height: 69px;
  padding: 0 15px;
  // background-color: aqua;
  .center {
    width: 344px;
    height: 69px;
    background-image: url("../../cmmon/image/me1/Bj.png");
    background-repeat: no-repeat;
    background-size: 100% auto;
    position: relative;
    .add {
      font-size: 14px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(247, 249, 252, 1);
      position: absolute;
      left: 48px;
      top: 18px;
    }
    .fuli {
      position: absolute;
      display: block;
      top: 37px;
      left: 48px;
      font-size: 10px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.5);
      -webkit-transform-origin-x: 0;
      -webkit-transform: scale(0.84);
      .jing {
        color: #ff8958;
      }
    }
    .btn {
      position: absolute;
      top: 22px;
      right: 20px;
      width: 64px;
      height: 26px;
      background: rgba(46, 53, 79, 1);
      border-radius: 14px;
      border: 1px solid rgba(255, 255, 255, 1);
      line-height: 26px;
      span {
        position: absolute;
        font-size: 12px;
        width: 50px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        -webkit-transform-origin-x: 0;
        -webkit-transform: scale(0.9);
        margin-left: 8px;
      }
    }
  }
}
.user {
  margin-top: 10px;
  width: 100%;
  height: 117px;
  // background-color: #ff8958;
  border-radius: 5px;
  padding: 0 15px;
  .center {
    width: 343px;
    height: 117px;
    background-color: #fff;
    // padding: 15px 11px;
    position: relative;
    h3 {
      position: absolute;
      top: 15px;
      left: 11px;
      display: block;
      position: absolute;
      width: 32px;
      height: 22px;
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(0, 0, 0, 1);
      line-height: 22px;
      z-index: 1;
    }
    .top {
      width: 100%;
      height: 30px;
      // background-color: blue;
    }
    list {
      width: 100%;
      height: 87px;
      background-color: aquamarine;
    }
  }
}
.accredit {
  height: 182px;
  width: 100%;
  padding: 0 15px;
  margin-top: 10px;
  .center {
    width: 100%;
    height: 182px;
    // background-color: crimson;
    position: relative;
    border-radius: 5px;
    background-color: #fff;
    h3 {
      position: absolute;
      top: 15px;
      left: 11px;
      display: block;
      position: absolute;
      width: 32px;
      height: 22px;
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(0, 0, 0, 1);
      line-height: 22px;
      z-index: 1;
    }
    .swipe {
      width: 100%;
      height: 156px;
      position: absolute;
      // background-color: #ff8958;
      bottom: 0;
      box-sizing: border-box;
    }
    /deep/.van-grid-item__content {
      padding: 10px 8px;
      background-color: transparent;
    }
  }
}

.order {
  height: 182px;
  width: 100%;
  padding: 0 15px;
  margin-top: 10px;
  .center {
    width: 100%;
    height: 182px;
    // background-color: crimson;
    position: relative;
    border-radius: 5px;
    background-color: #fff;
    h3 {
      position: absolute;
      top: 15px;
      left: 11px;
      display: block;
      position: absolute;
      width: 32px;
      height: 22px;
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(0, 0, 0, 1);
      line-height: 22px;
      z-index: 1;
    }
    .swipe {
      width: 100%;
      height: 156px;
      position: absolute;
      // background-color: #ff8958;
      bottom: 0;
      box-sizing: border-box;
    }
    /deep/.van-grid-item__content {
      padding: 10px 8px;
      background-color: transparent;
    }
  }
}

.other {
  margin-top: 10px;
  width: 100%;
  height: 117px;
  // background-color: #ff8958;
  border-radius: 5px;
  padding: 0 15px;
  margin-bottom: 88px;
  .center {
    width: 343px;
    height: 117px;
    background-color: #fff;
    // padding: 15px 11px;
    position: relative;
    h3 {
      position: absolute;
      top: 15px;
      left: 11px;
      display: block;
      position: absolute;
      width: 32px;
      height: 22px;
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(0, 0, 0, 1);
      line-height: 22px;
      z-index: 1;
    }
    .top {
      width: 100%;
      height: 30px;
      // background-color: blue;
    }
    list {
      width: 100%;
      height: 87px;
      background-color: aquamarine;
    }
  }
}

.footer {
  width: 100%;
  height: 48px;
  background-color: forestgreen;
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 2;

  // .item {
  //   width: 75px;
  //   height: 100%;
  //   border: 1px solid black;
  //   text-align: center;
  //   box-sizing: border-box;
  //   i {
  //     width: 18px;
  //     height: 18px;
  //   }
  // }
}
</style>