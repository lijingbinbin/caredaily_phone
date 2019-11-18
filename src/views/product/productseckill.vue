<template>
  <div>
    <div class="head">
      <span>商品详情</span>
    </div>

    <div class="swiper">
      <div class="swiper_content">
        <van-swipe indicator-color="white">
          <van-swipe-item>
            <img
              src="https://tpc.googlesyndication.com/simgad/4165293663165596178?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qlaRvLkAG7WTEtSlnavF6wO3gqIDg"
              alt
            />
          </van-swipe-item>
          <van-swipe-item>2</van-swipe-item>
          <van-swipe-item>3</van-swipe-item>
          <van-swipe-item>4</van-swipe-item>
        </van-swipe>
      </div>
      <div class="tub">
        <span>巨柔软-柔如云</span>
      </div>
    </div>
    <!-- seckill -->
    <div class="seckill">
      <div class="seckill_left">
        <img src="../../cmmon/image/public/限时.png" alt />
        <span class="seckill_text">限时秒杀</span>
        <div class="seckill_price">
          <span class="rmb">¥</span>
          <span class="price_a">98</span>
          <span class="del_prices">¥98</span>
        </div>
      </div>
      <div class="seckill_right">
        <span class="time_text">距结束还剩</span>
        <div class="times">
          <div class="time_h">
            <span class="t_a">21</span>
          </div>
          <span class="x">:</span>
          <div class="time_m">
            <span class="t_a">29</span>
          </div>
          <span class="x">:</span>
          <div class="time_s">
            <span class="t_a">40</span>
          </div>
        </div>
      </div>
    </div>
    <!-- msg -->
    <div class="msg">
      <div class="msg_content">
        <div class="new">
          <p>新品上市</p>
        </div>
        <div class="product_name">
          <p>果C纸尿裤</p>
        </div>
        <div class="num">
          <p>
            每人仅限购买5份
            <span></span>
          </p>
        </div>
        <!-- <div class="price">
          <span class="rmb">¥</span>
          <span class="price_a">98</span>
          <span class="del_prices">¥98</span>
        </div>-->
        <div class="introduction">
          <div class="introduction_first">
            <div class="s_number">1</div>
            <span>细腻纤维面层，蚕丝般柔软，呵护宝宝每寸肌;</span>
          </div>
          <div class="introduction_first">
            <div class="s_number">1</div>
            <span>世界500强德国巴斯夫魔力瞬吸因子，3秒瞬吸50ml， 干爽摸得着;</span>
          </div>
          <div class="introduction_first">
            <div class="s_number">1</div>
            <span>细腻纤维面层，蚕丝般柔软，呵护宝宝每寸肌;</span>
          </div>
        </div>
        <div class="gift_bag">
          <div class="vip">
            <span>vip</span>
          </div>
          <div class="text">
            升级等级，
            <span class="s">立享2000</span>元全品类卷礼包
          </div>
          <div class="arrows">
            <img src="../../cmmon/image/public/大于.png" alt />
          </div>
        </div>
        <div class="products_img">
          <img
            src="https://gdp.alicdn.com/imgextra/i3/2020098733/O1CN01cou7TU2ENlP6qQUK4_!!2020098733.jpg"
            alt
          />
          <img
            src="https://gdp.alicdn.com/imgextra/i3/2020098733/O1CN01cou7TU2ENlP6qQUK4_!!2020098733.jpg"
            alt
          />
        </div>
      </div>
    </div>
    <!-- <div class="fooder">
      <div class="tan">
        <img src="../../cmmon/image/public/弹框.png" alt />
      </div>
      <div class="add">
        <span>加入购物车</span>
      </div>
    </div>-->
    <van-goods-action>
      <!-- <van-goods-action-icon icon="chat-o" text="客服" /> -->
      <van-goods-action-icon icon="shopping-cart-o" color="#4380F1" info="1" />
      <span class="text">购物车</span>
      <!-- <van-goods-action-icon icon="shop-o" text="店铺" info="12" /> -->
      <van-goods-action-button type="warning" color="#4380F1" text="加入购物车" />
    </van-goods-action>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shopicon: "../../cmmon/image/public/大于.png"
    };
  }
};
</script>

<style lang="less" scoped>
.head {
  width: 375px;
  height: 44px;
  line-height: 44px;
  background-color: #fff;
  padding: 0 150px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  span {
    display: block;

    // background-color: aqua;
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: rgba(0, 0, 0, 1);
  }
}

.swiper {
  width: 100%;
  height: 352px;
  background-color: brown;
  margin-top: 44px;
  padding: 15px 43px;
  box-sizing: border;
  position: relative;
  .swiper_content {
    padding: 10px;
    width: 100%;
    height: 310px;
    background-color: aqua;
    .van-swipe {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
      }
      /deep/.van-swipe__indicators {
        bottom: 50px;
      }
      /deep/.van-swipe__indicator--active {
        width: 13px;
        height: 4px;
        border-radius: 25%;
        background-color: #4380f1 !important;
      }
    }
  }
  .tub {
    width: 124px;
    height: 41px;
    background: rgba(67, 128, 241, 1);
    border-radius: 21px;
    opacity: 0.78;
    text-align: center;
    position: absolute;
    right: 15px;
    bottom: 20px;
    line-height: 41px;
    span {
      width: 94px;
      height: 20px;
      font-size: 14px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 20px;
    }
  }
}
.seckill {
  width: 100%;
  height: 52px;
//   background-color: #fd4f4f;
  box-sizing: border-box;
  display: flex;
  .seckill_left {
    width: 265px;
    height: 100%;
    background-color: #f13160;
    border-radius: 10px 0px 0px 0px;
    position: relative;
    //  box-sizing: border-box;
    .seckill_price {
      position: absolute;
      top: -5px;
      left: 133px;
      // background-color: aqua;
      .rmb {
        font-size: 16px;
        color: #fff;
      }
      .price_a {
        font-size: 26px;
        font-family: DIN-Bold, DIN;
        // font-weight: bold;
        color: rgba(255, 255, 255, 1);
        line-height: 31px;
        text-shadow: 2px 2px 7px rgba(255, 255, 255, 0.1);
      }
      .del_prices {
        margin-left: 5px;
        font-size: 12px;
        font-family: DIN-Regular, DIN;
        font-weight: 400;
        color: #b2b2b2;
        line-height: 15px;
        text-decoration: line-through;
      }
    }
    img {
      position: absolute;
      width: 18px;
      top: 14px;
      left: 16px;
    }
    .seckill_text {
      display: inline-block;
      font-size: 18px;
      font-family: MF-QiHeiNoncommercial-Regular, MF-QiHeiNoncommercial;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 17px;
      letter-spacing: 1px;
      position: absolute;
      font-weight: bold;
      top: 15px;
      left: 37px;
    }
  }
  .seckill_right {
    width: 110px;
    height: 100%;
    background-color:#FFE9E9;
    border-radius: 0px 10px 0px 0px;
    position: relative;
    // text-align: center;
    .time_text {
      position: absolute;
      top: 7px;
      left: 25px;
      display: inline-block;
      height: 14px;
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(241, 49, 96, 1);
      line-height: 14px;
      -webkit-transform: scale(0.84);
    }
    .times {
      position: absolute;
      top: 25px;
      left: 16px;
      font-size: 10px;
      display: flex;
      .x {
        margin: 0 2px;
      }
      div {
        width: 20px;
        height: 22px;
        background: rgba(241, 49, 96, 1);
        border-radius: 4px;
        // margin-right:
        text-align: center;
        line-height: 22px;
        .t_a {
          width: 14px;
          height: 14px;
          font-size: 12px;
          font-family: DIN-Bold, DIN;
        //   font-weight: bold;
          color: rgba(255, 255, 255, 1);
          line-height: 14px;
          text-shadow: 2px 2px 7px rgba(255, 255, 255, 0.1);
        }
      }
    }
  }
}
.msg {
  width: 100%;
  height: 100%;
  // background-color: cadetblue;
  padding: 0 15px;
  .msg_content {
    width: 100%;
    height: 100%;
    background-color: blue;
    position: relative;
    .new {
      position: absolute;
      top: 23px;
      height: 16px;
      background: rgba(254, 83, 83, 1);
      border-radius: 2px;
      text-align: center;
      line-height: 16px;
      p {
        font-size: 12px;
        font-family: PingFangHK-Medium, PingFangHK;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: 14px;
        -webkit-transform: scale(0.84);
      }
    }
    .product_name {
      position: absolute;
      top: 20px;
      left: 55px;
      p {
        font-size: 16px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: rgba(0, 0, 0, 1);
        line-height: 22px;
      }
    }
    .num {
      position: absolute;
      top: 44px;
      p {
        font-size: 11px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(241, 99, 49, 1);
        line-height: 16px;
      }
    }
    .price {
      position: absolute;
      top: 20px;
      left: 275px;
      // background-color: aqua;
      .rmb {
        font-size: 16px;
        color: rgba(254, 83, 83, 1);
      }
      .price_a {
        font-size: 24px;
        font-family: DIN-Bold, DIN;
        font-weight: bold;
        color: rgba(254, 4, 4, 1);
        line-height: 29px;
      }
      .del_prices {
        margin-left: 5px;
        font-size: 12px;
        font-family: DIN-Regular, DIN;
        font-weight: 400;
        color: #b2b2b2;
        line-height: 15px;
        text-decoration: line-through;
      }
    }
    .introduction {
      position: absolute;
      padding: 13px 0 0 10px;
      top: 77px;
      width: 100%;
      height: 102px;
      background-color: #f7f9fc;
      border-radius: 5px;
      box-sizing: border-box;

      .introduction_first {
        margin-bottom: 10px;
        display: flex;
        justify-content: flex-start;
        .s_number {
          margin-right: 9px;
          width: 16px;
          height: 16px;
          background-color: #d2e1f9;
          color: #4380f1;
          border-radius: 50%;
          text-align: center;
          font-size: 12px;
        }
        span {
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(0, 0, 0, 1);
          line-height: 12px;
          -webkit-transform-origin-x: 0;
          -webkit-transform: scale(0.91);
        }
      }
    }
    .gift_bag {
      position: absolute;
      top: 189px;
      width: 100%;
      height: 40px;
      background-color: #f7f9fc;
      background: rgba(247, 249, 252, 1);
      border-radius: 5px;
      padding: 13px 5px;
      display: flex;
      line-height: 40px;
      .vip {
        width: 41px;
        height: 14px;
        background: linear-gradient(
          205deg,
          rgba(64, 70, 95, 1) 0%,
          rgba(41, 48, 74, 1) 100%
        );
        border-radius: 2px;
        display: flex;
        margin-right: 10px;
        span {
          font-size: 10px;
          font-family: DIN-Bold, DIN;
          font-weight: bold;
          color: rgba(247, 215, 110, 1);
          line-height: 12px;
          background: linear-gradient(
            123deg,
            rgba(254, 241, 123, 1) 0%,
            rgba(223, 121, 0, 1) 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
      .text {
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(0, 0, 0, 1);
        line-height: 12px;
        margin-right: 60px;
        .s {
          color: #fd4f4f;
        }
      }
      .arrows {
        width: 18px;
        height: 100%;
        // background-color: aqua;
        font-size: 12px;
        img {
          width: 15px;
        }
      }
    }
    .products_img {
      width: 100%;
      height: 500px;
      background-color: #fd4f4f;
      position: absolute;
      top: 239px;
      img {
        width: 100%;
        margin-bottom: 10px;
      }
    }
  }
}
.fooder {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: #fff;
  box-sizing: border-box;
  padding: 0 15px;
  margin-top: 50px;
  .tan {
    margin-top: 10px;
    margin-left: 5px;
    img {
      width: 24px;
    }
  }
  .add {
    width: 245px;
    height: 44px;
    background: rgba(67, 128, 241, 1);
    border-radius: 22px;
    border: 2px solid rgba(67, 128, 241, 1);
    float: right;
    position: absolute;
    top: 3px;
    right: 16px;
    text-align: center;
    line-height: 32px;
    span {
      width: 71px;
      height: 20px;
      font-size: 14px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 20px;
    }
  }
}
.fooders {
  width: 100%;
  height: 50px;
  padding: 0 15px;
}

.van-goods-action {
  .text {
    width: 37px;
    height: 17px;
    font-size: 12px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(67, 128, 241, 1);
    line-height: 17px;
    position: absolute;
    left: 60px;
    top: 15px;
  }
  padding: 0 15px;
  // van-goods-action-button{
  //     width: 245px!important;
  // }
  .van-goods-action-button--first {
    margin-left: 65px;
  }
  /deep/.van-goods-action-icon__icon {
    color: #4380f1;
  }
  .van-goods-action-icon {
    // background-color: #f13160;
    display: flex;
    justify-content: space-around;
    color: #4380f1;
    margin-left: 5px;
  }
  /deep/.van-info {
    background-color: #4380f1;
  }
  /deep/.van-icon {
  }
}
</style>