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
    <!-- <div class="seckill">
      <div class="seckill_left">
        <img src="../../cmmon/image/public/限时.png" alt />
        <span class="seckill_text">限时秒杀</span>
        <div class="seckill_price">
          <span class="rmb">¥</span>
          <span class="price_a">98</span>
          <span class="del_prices">¥98</span>
        </div>
      </div>
      <div class="seckill_right"></div>
    </div>-->
    <!-- msg -->
    <div class="msg">
      <div class="msg_content">
        <div class="new">
          <p>新品</p>
        </div>
        <div class="product_name">
          <p>果C纸尿裤</p>
        </div>
        <div class="num">
          <p>
            仅剩:
            <span>2000</span>份
          </p>
        </div>
        <div class="price">
          <span class="rmb">¥</span>
          <span class="price_a">98</span>
          <span class="del_prices">¥98</span>
        </div>
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
    <div class="fooder">
      <div class="tan">
        <img src="../../cmmon/image/public/弹框.png" alt />
      </div>
      <div class="add" @click="show=true">
        <span>加入购物车</span>
      </div>
    </div>
    <van-sku
      v-model="show"
      :sku="sku"
      :goods="goods"
      :goods-id="goodsId"
      :quota="20"
      :quota-used="30"
      :hide-stock="true"
      show-add-cart-btn
      :message-config="messageConfig"
      @buy-clicked="onBuyClicked"
    >
      <template slot="sku-header" slot-scope="props">
        <div class="sku-header">
          <div class="van-sku-header__img-wrap">
            <img :src="goods.picture" alt />
          </div>
          <span class="van-sku_name">我是你爸爸</span>
          <span class="van-sku_pirces">单价:</span>
          <span class="van-sku__price-symbol">￥</span>
          <span class="van-sku__price-num">{{ props.price }}</span>
          <span class="van-sku__price-delete">{{ props.price }}</span>
        </div>
      </template>
    </van-sku>

    <!-- <van-overlay :show="show" @click="show = true">
  <div class="goods"></div>
    </van-overlay>-->
  </div>
</template>

<script>
import { log } from "util";
export default {
  data() {
    return {
      // shows:5,
      show: true,
      goodsId: 22222,
      // 数据结构见下方文档
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。

        tree: [
          {
            k: "产品规格", // skuKeyName：规格类目名称
            v: [
              {
                id: "30349", // skuValueId：规格值 id
                name: "XXL/3包/箱" // skuValueName：规格值名称
              },
              {
                id: "1215",
                name: "XXL/3包/箱"
              },
              {
                id: "1215",
                name: "XXL/3包/箱"
              },
              {
                id: "1215",
                name: "XXL/3包/箱"
              }
            ],
            k_s: "s1" // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          }
        ],
        list: [
          {
            id: 2259, // skuId，下单时后端需要
            price: 100, // 价格（单位分）
            s1: "1215", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "1193", // 规格类目 k_s 为 s2 的对应规格值 id
            s3: "0", // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 110 // 当前 sku 组合对应的库存
          }
        ],

        price: "1.00", // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        messages: [
          {
            // 商品留言
            datetime: "0", // 留言类型为 time 时，是否含日期。'1' 表示包含
            multiple: "0", // 留言类型为 text 时，是否多行文本。'1' 表示多行
            name: "留言", // 留言名称
            type: "text", // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
            required: "1", // 是否必填 '1' 表示必填
            placeholder: "" // 可选值，占位文本
          }
        ],
        hide_stock: false // 是否隐藏剩余库存
      },

      // 数据结构见下方文档

      goods: {
        // 商品标题
        title: "测试商品",
        // 默认商品 sku 缩略图
        picture:
          "https://img.alicdn.com/imgextra/i1/1882333525/TB2NxwisYSYBuNjSspfXXcZCpXa_!!1882333525-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp"
      },
      messageConfig: {
        // 图片上传回调，需要返回一个promise，promise正确执行的结果需要是一个图片url
        uploadImg: () => {
          return new Promise(resolve => {
            setTimeout(
              () =>
                resolve(
                  "https://img.yzcdn.cn/upload_files/2017/02/21/FjKTOxjVgnUuPmHJRdunvYky9OHP.jpg!100x100.jpg"
                ),
              1000
            );
          });
        },
        // 最大上传体积 (MB)
        uploadMaxSize: 3
        // placeholder 配置
      }
    };
  },
  methods: {
    onBuyClicked() {
      console.log("你好");
    },
    onAddCartClicked() {
      console.log("好的");
    }
  }
};
</script>

<style lang="less" scoped>
@import url("../../assets/modifyvant.less");
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
  background-color: #fd4f4f;
  box-sizing: border-box;
  display: flex;
  .seckill_left {
    width: 265px;
    height: 100%;
    background-color: bisque;
    border-radius: 10px 0px 0px 0px;
    position: relative;
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
      top: 15px;
      left: 37px;
    }
  }
  .seckill_right {
    width: 110px;
    height: 100%;
    background-color: rgba(223, 121, 0, 1);
    border-radius: 0px 10px 0px 0px;
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
      width: 28px;
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
      top: 18px;
      left: 31px;
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
// .van-overlay{
//   .goods{
//     width: 100%;
//     height: 368px;
//     background-color:#fd4f4f;
//     position: fixed;
//     border-radius: 10px 10px 0 0;
//     left: 0;
//     bottom: 0;
//   }
// }
van-sku {
  background-color: #fd4f4f;
}
// /deep/.van-sku-actions .van-button--warning {
//   background-color: #4380f1 !important;
// }

/deep/.van-sku-actions .van-button:first-of-type {
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  // background-color: #4380f1;
}
// /deep/.van-sku-actions {
//   button {
//     background-color: #4380f1;
//   }
// }

/deep/.van-button--danger {
  display: none;
}
// /deep/.van-button van-button--large {
//   background-color: #4380f1;
// }

/deep/.van-sku-row__item {
  margin: 5px 4px 5px 0px;
}

.sku-header {
  width: 100%;
  height: 136px;
  // background-color: chartreuse;
  padding: 0 15px;
  .van-sku-header__img-wrap {
    // position: relative;
    float: left;
    width: 84px;
    height: 84px;
    margin: 20px 0;
    overflow: hidden;
    background-color: red;
    border: 5px;
    padding: 10px;
    box-sizing: border-box;
    img {
      width: 100%;
    }
  }
  .van-sku_name {
    display: inline-block;
    position: absolute;
    top: 49px;
    left: 110px;
    font-size: 16px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: rgba(0, 0, 0, 1);
    line-height: 22px;
  }
  .van-sku_pirces {
    position: absolute;
    top: 80px;
    left: 108px;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
    line-height: 14px;
    -webkit-transform: scale(0.84);
    // -webkit-background-clip: text;
    // -webkit-text-fill-color: transparent;
  }
  .van-sku__price-symbol {
    position: absolute;
    top: 78px;
    left: 135px;
    font-size: 14px;
    font-family: DIN-Regular, DIN;
    font-weight: 400;
    color: rgba(254, 83, 83, 1);
    line-height: 17px;
    -webkit-transform: scale(0.84);
  }
  .van-sku__price-num {
    position: absolute;
    top: 71px;
    left: 145px;
    font-size: 20px;
    font-family: DIN-Bold, DIN;
    font-weight: bold;
    color: rgba(254, 83, 83, 1);
    line-height: 24px;
  }
  .van-sku__price-delete {
    position: absolute;
    top: 78px;
    left: 195px;
    font-size: 12px;
    font-family: DIN-Regular, DIN;
    font-weight: 400;
    color: rgba(34, 34, 34, 1);
    line-height: 15px;
    text-decoration: line-through;
  }
}
</style>