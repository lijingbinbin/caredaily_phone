<template>
  <div>
    <div class="head">
      <div class="back">
        <img src="../../cmmon/image/public/小于号.png" alt />
      </div>
      <span>购物车</span>
    </div>
    <!-- <van-nav-bar
      title="购物车"
      left-text=" "
      right-text=""
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    -->
    <!-- 商品列表 -->
    <div class="shopList">
      <div class="shopList_content">
        <div class="shopList_text">
          <div class="shopList_symbol"></div>
          <span class="shopList_texts">商品列表</span>
        </div>
        <div class="shopList_item" v-for="(item,index) in [1,1,1,1,1]" :key="index">
          <div class="s_img">
            <img
              src="https://img.alicdn.com/imgextra/i1/1591541842/TB2TTDWiLBNTKJjSszcXXbO2VXa_!!1591541842-0-daren.jpg_180x180xzq90.jpg_.webp"
              alt
            />
          </div>
          <div class="s_msg">
            <span class="m_name">婴幼儿草本洗衣液</span>
            <div class="m_size">
              <span>规格</span>
              <div class="size">
                <van-dropdown-menu :overlay="overlay">
                  <van-dropdown-item v-model="value1" :options="option1" />
                </van-dropdown-menu>
              </div>
            </div>
            <div class="m_price">
              <span class="m_symbol">¥</span>
              <span class="m_p">100</span>
            </div>
            <div class="m_choose">
              <div class="m_sub">
                <img src="../../cmmon/image/public/减少.png" alt />
              </div>
              <div class="m_num">
                <span class="num">10</span>
              </div>
              <div class="m_add">
                <img src="../../cmmon/image/public/增加.png" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 换购/满减商品 -->
    <div class="replace" v-show="replace">
      <div class="replace_content">
        <div class="replace_text">
          <div class="replace_symbol"></div>
          <span class="replace_texts">换购/满减商品</span>
          <div class="s_tos" @click="show=true">
            <span>重新换购</span>
            <img src="../../cmmon/image/public/大于.png" alt />
          </div>
        </div>
        <div class="replace_product">
          <div class="p_item" v-for="(item,index) in [1,1,1,1,1,1,1]" :key="index">
            <span class="p_name">丝薄系列满10箱加29元换购 1箱丝薄纸尿裤试用装L</span>
            <span class="p_symbol">¥</span>
            <span class="p_price">2010</span>
            <span class="p_x">X</span>
            <span class="p_num">22</span>
          </div>
          <div class="p_item">
            <span class="p_name">
                丝薄系列满10箱加29元换丝薄系列满10箱加29元换丝薄系列满10箱加29元换丝薄系列满10箱加29元换丝薄系列满10箱加29元换
            </span>
            <span class="p_symbol">¥</span>
            <span class="p_price">2010</span>
            <span class="p_x">X</span>
            <span class="p_num">22</span>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="ceshi">
    </div>-->
    <div class="preferential">
      <span class="p_text">已满足换购政策套餐</span>
      <div class="p_right" @click="show=true">
        <span class="p_to">去换购</span>
        <img src="../../cmmon/image/public/大于 (1).png" alt />
      </div>
    </div>
    <van-action-sheet v-model="show" title="选择换购套餐">
      <div class="text">
        <span>已符合以下套餐</span>
      </div>
      <div class="coupons" v-for="(item,index) in [1,1,1]" :key="index">
        <span class="c_t">丝薄系列满10箱加29元</span>
        <span class="c_b">换购1箱丝薄纸尿裤试用装L</span>
        <div class="c_add">
          <img src="../../cmmon/image/public/c_add.png" alt />
        </div>
      </div>
      <div class="finish">
        <van-button round type="info">完成</van-button>
      </div>
    </van-action-sheet>
    <div class="fooder">
      <div class="tan">
        <img src="../../cmmon/image/public/垃圾桶.png" alt />
      </div>
      <div class="all">
        <span class="a_text">合计:</span>
        <span class="a_symbol">¥</span>
        <span class="a_price">2019</span>
      </div>
      <div class="add">
        <span>提交订单</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    replace:false,
      show: false,
      overlay: false,
      value1: 0,
      value2: "a",
      option1: [
        { text: "XXL/3包/箱", value: 0 },
        { text: "XXL/4包/箱", value: 1 },
        { text: "XXL/5包/箱", value: 2 }
      ]
    };
  },
  methods: {
    onClickLeft() {
      console.log("返回");
    },
    onClickRight() {
      console.log("xixi");
    }
  }
};
</script>


<style lang="less" scoped>
@import url("../../assets/modifyvant.less");
html,
body {
  background-color: #f5f6fa;
}
.van-nav-bar .van-hairline--bottom {
  height: 44px;
  background-color: aqua;
}
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
  .back {
    width: 50px;
    height: 100%;
    //   background-color: blue;
    position: absolute;
    top: 0;
    left: 10px;
    box-sizing: border-box;
    text-align: center;
    img {
      width: 20px;
      margin-top: 13px;
    }
  }

  span {
    display: block;

    // background-color: aqua;
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: rgba(0, 0, 0, 1);
  }
}

.shopList {
  width: 100%;
  // height: 500px;
  //   background-color: blue;
  margin-top: 59px;
  padding: 0 15px;
  .shopList_content {
    width: 100%;
    // height: 316px;
    background-color: #fff;
    padding: 20px 15px 30px;
    border-radius: 10px;
    .shopList_text {
      width: 100%;
      height: 20px;
      //   background-color: cadetblue;
      line-height: 20px;

      display: flex;
      .shopList_symbol {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        width: 6px;
        height: 12px;
        background: rgba(67, 128, 241, 1);
        border-radius: 3px;
        border: 2px solid rgba(67, 128, 241, 1);
      }
      .shopList_texts {
        margin-left: 5px;
        height: 20px;
        width: 100%;
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(0, 0, 0, 1);
        line-height: 20px;
      }
    }
    .shopList_item {
      width: 100%;
      height: 72px;
      //   background-color: blueviolet;
      margin: 10px 0;
      padding-left: 10px;
      display: flex;
      justify-content: space-between;
      .s_img {
        width: 72px;
        height: 72px;
        background-color: #f5f6fa;
        box-sizing: border-box;
        padding: 8px;
        img {
          width: 56px;
        }
      }
      .s_msg {
        width: 225px;
        height: 100%;
        // background-color: aqua;
        position: relative;
        box-sizing: border-box;
        padding-right: 15px;
        .m_name {
          position: absolute;
          width: 100%;
          height: 20px;
          font-size: 14px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: rgba(0, 0, 0, 1);
          line-height: 20px;
        }
        .m_size {
          width: 120px;
          height: 20px;
          //   background-color: cornflowerblue;
          position: absolute;
          top: 25px;
          line-height: 20px;
          display: flex;
          justify-content: space-between;
          span {
            display: block;
            height: 17px;
            font-size: 12px;
            font-family: PingFang-SC-Medium, PingFang-SC;
            font-weight: 500;
            color: #dededeff;
            line-height: 17px;
          }
          .size {
            width: 87px;
            height: 100%;
            background-color: blue;
            .van-dropdown-menu {
              height: 20px !important;
              width: 87px;
            }
            .van-ellipsis {
              color: black;
            }
            .van-popup--top {
              width: 87px;
              left: 155px;
            }
            .van-cell {
              padding: 10px 8px;
              height: 100%;
            }
            .van-cell__title {
              span {
                color: black;
              }
            }
            .van-cell__value {
              display: none;
            }
          }
        }
        .m_price {
          width: 50%;
          height: 20px;
          //   background-color: blue;
          position: absolute;
          bottom: 0px;
          display: flex;
          .m_symbol {
            // height: 19px;
            font-size: 16px;
            font-family: DIN-Medium, DIN;
            font-weight: 500;
            color: rgba(254, 4, 4, 1);
            line-height: 19px;
            -webkit-transform-origin-x: 5;
            -webkit-transform-origin-y: 5;
            -webkit-transform: scale(0.7);
          }
          .m_p {
            font-size: 16px;
            font-family: DIN-Medium, DIN;
            font-weight: 500;
            color: rgba(254, 4, 4, 1);
            line-height: 19px;
            // -webkit-background-clip: text;
            // -webkit-text-fill-color: transparent;
          }
        }
        .m_choose {
          width: 88px;
          height: 20px;
          // background-color: brown;
          position: absolute;
          bottom: 0px;
          right: 0px;
          display: flex;
          .m_sub {
            width: 20px;
            height: 20px;
            // background-color: cadetblue;
            img {
              width: 20px;
            }
          }
          .m_num {
            width: 30px;
            height: 20px;
            background-color: #f5f6fa;
            border-radius: 10px;
            margin: 0 9px;
            text-align: center;
            .num {
              font-size: 14px;
              display: block;
            }
          }
          .m_add {
            width: 20px;
            height: 20px;
            // background-color: cadetblue;
            img {
              width: 20px;
            }
          }
        }
      }
    }
  }
}

.preferential {
  width: 100%;
  height: 36px;
  background-color: #fdf1db;
  position: fixed;
  left: 0;
  bottom: 50px;
  padding: 0 50px 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .p_text {
    display: block;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
    line-height: 17px;
  }
  .p_right {
    width: 55px;
    height: 100%;
    // background-color: aqua;
    text-align: center;
    line-height: 100%;
    display: flex;
    align-items: center;
    img {
      height: 10px;
    }
    .p_to {
      margin-right: 5px;
      display: block;
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(254, 4, 4, 1);
      line-height: 17px;
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
  display: flex;
  align-items: center;
  //   margin-top: 50px;
  .tan {
    width: 20px;
    height: 20px;
    // background-color: aqua;
    margin-right: 10px;
    margin-left: 10px;
    padding: 2px;
    img {
      width: 16px;
    }
  }
  .all {
    width: 150px;
    height: 100%;
    // background-color: chocolate;
    position: relative;
    display: flex;
    margin-right: 15px;
    .a_text {
      position: absolute;
      top: 18px;
      width: 28px;
      height: 17px;
      font-size: 12px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(34, 34, 34, 1);
      line-height: 17px;
    }
    .a_symbol {
      position: absolute;
      top: 17px;
      left: 35px;
      font-size: 16px;
      font-family: DIN-Medium, DIN;
      font-weight: 500;
      color: rgba(254, 4, 4, 1);
      line-height: 19px;
      -webkit-transform-origin-x: 5;
      -webkit-transform-origin-y: 5;
      -webkit-transform: scale(0.8);
    }
    .a_price {
      position: absolute;
      top: 16px;
      left: 45px;
      font-size: 16px;
      font-family: DIN-Medium, DIN;
      font-weight: 500;
      color: rgba(254, 4, 4, 1);
      line-height: 19px;
    }
  }
  .add {
    width: 143px;
    height: 44px;
    background: rgba(67, 128, 241, 1);
    border-radius: 22px;
    border: 2px solid rgba(67, 128, 241, 1);
    text-align: center;
    line-height: 20px;
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

.ceshi {
  width: 100;
  height: 50px;
  background-color: coral;
}

// 换购
.van-action-sheet__header {
  font-size: 14px;
  font-weight: 600 !important;
}
.van-action-sheet__content {
  height: 487px;
  padding: 0 15px;
  .text {
    width: 100%;
    height: 34px;
    background-color: #fdf1db;
    padding: 7px 15px;

    span {
      display: block;
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(34, 34, 34, 1);
      line-height: 17px;
    }
  }
  .coupons {
    width: 100%;
    height: 80px;
    background-color: #f6f7f9;
    margin: 10px 0;
    padding: 23px 15px 0px;
    position: relative;
    .c_t {
      display: block;
      font-size: 14px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 600;
      color: rgba(0, 0, 0, 1);
      margin-bottom: 7px;
    }
    .c_b {
      display: block;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(255, 88, 88, 1);
      line-height: 14px;
    }
    .c_add {
      position: absolute;
      width: 28px;
      height: 28px;
      // background-color: blue;
      top: 30px;
      right: 15px;
      img {
        width: 28px;
      }
    }
  }
  .finish {
    width: 100%;
    height: 50px;
    //   background-color: crimson;
    position: fixed;
    bottom: 0;
    left: 0;
    //   box-sizing: border-box;
    padding: 5px 15px;
    //   line-height: 50px;
    .van-button {
      position: absolute;
      top: 3px;
      width: 344px;
      height: 44px;
      //  margin-top: px;
      font-size: 14px;
    }
  }
}

// 已选换购满减商品

.replace {
  width: 100%;
  // height: 500px;
  //   background-color: blue;
  margin-top: 15px;
  margin-bottom: 100px;
  padding: 0 15px;
  .replace_content {
    width: 100%;
    // height: 316px;
    background-color: #fff;
    padding: 20px 15px 30px;
    border-radius: 10px;
    .replace_text {
      width: 100%;
      height: 20px;
    //   background-color: cadetblue;
      line-height: 20px;
      box-sizing: border-box;
      padding-right: 10px;
      display: flex;
      margin-bottom: 10px;
      .replace_symbol {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        width: 6px;
        height: 12px;
        background: rgba(67, 128, 241, 1);
        border-radius: 3px;
        border: 2px solid rgba(67, 128, 241, 1);
      }
      .replace_texts {
        margin-left: 5px;
        height: 20px;
        width: 100%;
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 600;
        color: rgba(0, 0, 0, 1);
        line-height: 20px;
      }
      .s_tos {
        width: 100px;
        height: 100%;
        // background-color: blue;
        display: flex;
        justify-content: space-around;
        align-items: center;
        span {
          display: block;
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(129, 170, 210, 1);
          line-height: 14px;
        }
        img {
          width: 10px;
          height: 10px;
        }
      }
    }
    .replace_product {
      width: 100%;
      height: 100%;
      padding: 3px 10px;
    //   background-color: coral;
      .p_item {
          margin: 10px 0;
        width: 100%;
        height: 100%;
        // background-color: yellow;
        display: flex;
        align-items: center;
        position: relative;
        line-height: 17px;
        .p_name {
          width: 147px;
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(0, 0, 0, 1);
        }
        .p_symbol {
          position: absolute;
          top: 11px;
          left: 210px;
          font-size: 12px;
          font-family: DIN-Regular, DIN;
          font-weight: 400;
          color: rgba(254, 4, 4, 1);
        }
        .p_price {
            position: absolute;
            left: 218px;
            top: 11px;
          font-size: 16px;
          font-family: DIN-Medium, DIN;
          font-weight: 500;
          color: rgba(254, 4, 4, 1);
        //   line-height: 19px;
        }
        .p_x {
          position: absolute;
          right: 22px;
          top: 11px;
          font-size: 12px;
          font-family: DIN-Regular, DIN;
          font-weight: 400;
          color: rgba(153, 153, 153, 1);
          line-height: 18px;
        }
        .p_num {
        position: absolute;
        left: 275px;
        top: 10px;
          font-size: 16px;
          font-family: DIN-Regular, DIN;
          font-weight: 400;
          color: rgba(153, 153, 153, 1);
          line-height: 18px;
        }
      }
    }
  }
}
</style>