<!--
 * @Author: your name
 * @Date: 2019-11-15 10:26:30
 * @LastEditTime: 2019-11-18 01:01:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \caredily66\src\views\product\product.vue
 -->
<template>
  <div class="all">
    <div class="head">
      <span>得乐云</span>
    </div>
    <!-- 列表 -->
    <div class="product-content">
      <van-tree-select :items="items" :main-active-index.sync="activeIndex">
        <template slot="content">
          <div class="swiper">
            <div class="swiper_content">
              <van-swipe :autoplay="3000" indicator-color="white">
                <van-swipe-item>1</van-swipe-item>
                <van-swipe-item>2</van-swipe-item>
                <van-swipe-item>3</van-swipe-item>
                <van-swipe-item>4</van-swipe-item>
              </van-swipe>
            </div>
          </div>
          <div class="tap">
            <ul class="list">
              <li @click="cur=0" :class="{active:cur==0}">综合</li>
              <li @click="cur=1" :class="{active:cur==1}">销售</li>
              <li @click="cur=2" :class="{active:cur==2}">价格</li>
              <li @click="cur=3" :class="{active:cur==3}">销售</li>
            </ul>
          </div>
          <!-- <van-card
            num="2"
            tag="标签"
            price="2.00"
            desc="描述信息"
            title="商品标题"
            thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
            origin-price="10.00"
          />-->
          <!-- <van-image v-if="activeIndex === 0" src="https://img.yzcdn.cn/vant/apple-1.jpg" />
          <van-image v-if="activeIndex === 1" src="https://img.yzcdn.cn/vant/apple-2.jpg" />-->
          <div class="right" v-if="activeIndex === 0" >
            <div class="listb">
              <ul>
                <li class="shoplist" v-for="(item,index) in shopList" :key="index">
                  <!-- <van-card
                style="height:97px"
                  price="2.00"
                  desc="描述信息"
                  title="商品标题"
                  thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
                  origin-price="10.00"
                  />-->
                  <div class="img">
                    <img src="https://img.yzcdn.cn/vant/t-thirt.jpg" alt />
                  </div>
                  <div class="s_infomation">
                    <div class="new">
                      <p>新品</p>
                    </div>
                    <span class="name">果C纸尿裤</span>
                    <div class="introduce">
                      <p>天然果C面层，呵护宝宝敏感肌肤</p>
                    </div>
                    <div class="price">
                      <span class="rmb">¥</span>
                      <span class="price_a">98.2</span>
                    </div>
                    <div class="del_price">
                      <span class="del_prices">¥98.2</span>
                    </div>
                    <div class="add">
                      <img src="../../cmmon/image/public/添加.png" alt />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="right" v-if="activeIndex === 1" >
            <div class="listb">
              <ul>
                <li class="shoplist" v-for="(item,index) in [1,1,1]" :key="index">
                  <!-- <van-card
                style="height:97px"
                  price="2.00"
                  desc="描述信息"
                  title="商品标题"
                  thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
                  origin-price="10.00"
                  />-->
                  <div class="img">
                    <img src="https://img.yzcdn.cn/vant/t-thirt.jpg" alt />
                  </div>
                  <div class="s_infomation">
                    <div class="new">
                      <p>新品</p>
                    </div>
                    <span class="name">果C纸尿裤</span>
                    <div class="introduce">
                      <p>天然果C面层，呵护宝宝敏感肌肤</p>
                    </div>
                    <div class="price">
                      <span class="rmb">¥</span>
                      <span class="price_a">98.2</span>
                    </div>
                    <div class="del_price">
                      <span class="del_prices">¥98.2</span>
                    </div>
                    <div class="add">
                      <img src="../../cmmon/image/public/添加.png" alt />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="right" v-if="activeIndex === 2" >
            <div class="listb">
              <ul>
                <li class="shoplist" v-for="(item,index) in [1,1,1]" :key="index">
                  <!-- <van-card
                style="height:97px"
                  price="2.00"
                  desc="描述信息"
                  title="商品标题"
                  thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
                  origin-price="10.00"
                  />-->
                  <div class="img">
                    <img src="https://img.yzcdn.cn/vant/t-thirt.jpg" alt />
                  </div>
                  <div class="s_infomation">
                    <div class="new">
                      <p>新品</p>
                    </div>
                    <span class="name">果C纸尿裤</span>
                    <div class="introduce">
                      <p>天然果C面层，呵护宝宝敏感肌肤</p>
                    </div>
                    <div class="price">
                      <span class="rmb">¥</span>
                      <span class="price_a">98.2</span>
                    </div>
                    <div class="del_price">
                      <span class="del_prices">¥98.2</span>
                    </div>
                    <div class="add">
                      <img src="../../cmmon/image/public/添加.png" alt />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
        </template>
      </van-tree-select>
    </div>

    <!-- 底部 -->
    <div class="footer">
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
      <van-tabbar v-model="active" class="active_tab">
        <van-tabbar-item v-for="(item,index) in tabbars" :key="index" @click="tab(index,item.name)">
          <span :class="currIndex == index ? active:''">{{item.title}}</span>
          <template slot="icon" slot-scope="props">
            <img :src="props.active ? item.active : item.normal" />
          </template>
        </van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0,
      items: [
        { text: "婴童品类" },
        { text: "居家品类" },
        { text: "居家品类" },
        { text: "居家品类" },
        { text: "居家品类" },
        { text: "居家品类" },
        { text: "居家品类" },
        { text: "居家品类" }
      ],
      categorysList: [],
      currIndex: 0,
      active: 0,
      cur: 0,
      shopList: [1, 1, 1, 1, 1, 1, 1],
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
  }
};
</script>

<style lang="less" scpoed>
body html {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
.all {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  .head {
    width: 100%;
    height: 44px;
    line-height: 44px;
    // background-color: aquamarine;
  background-color: #fe5353;
    position: fixed;
    text-align:center;
    top: 0;
    left: 0;

    span {
      display: inline-block;
      width: 54px;
      height: 44px;
      line-height: 44px;
      font-size: 18px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: rgba(0, 0, 0, 1);
    }
  }
  // .product {
  //   width: 100%;
  //   height: 100%;

  //   //   background-color: blue;
  //   //   display: flex;
  //   //   position: fixed;
  //   //   top: 44px;
  //   //   .floorNavigation {
  //   //     width: 90px;
  //   //     height: 100%;
  //   //     background-color: brown;
  //   //     ul {
  //   //       width: 100%;
  //   //       li {
  //   //         width: 90px;
  //   //         height: 49px;
  //   //         background-color: blueviolet;
  //   //         font-size: 12px;
  //   //         font-family: PingFangSC-Regular, PingFang SC;
  //   //         font-weight: 400;
  //   //         color: rgba(0, 0, 0, 1);
  //   //       }
  //   //     }
  //   //   }
  // }

  .product-content {
    display: flex;
    flex: 1;
    margin-top: 44px;
    margin-bottom: 48px;
    width: 100%;
    height: 100%;
    // padding: 0 0 48px 0;
    // background-color: crimson;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
  }
  .van-tree-select__content {
    width: 285px;
    // height: 150vw;
    .swiper {
      width: 100%;
      height: 110px;
      background-color: blue;
      padding: 0 15px;
      box-sizing: border-box;
      // margin-top: 0;
      .swiper_content {
        width: 100%;
        height: 110px;
        background-color: blueviolet;
        .van-swipe {
          width: 100%;
          height: 110px;
        }
      }
    }
    .tap {
      width: 100%;
      height: 40px;
      background-color: chartreuse;
      .list {
        display: flex;
        justify-content: space-around;
        line-height: 40px;
        li {
          text-align: center;
          width: 25%;
          height: 100%;
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(0, 0, 0, 1);
          // border:1px solid red;
        }
        .active {
          // background-color: red;
          color: #4380f1;
        }
      }
    }
    .right {
      width: 100%;
      height: 100%;

      .listb {
        width: 100%;
        height: 415px;
        overflow-y: scroll;
        ul {
          overflow-y: scroll;
          width: 100%;
          height: 100%;
          .shoplist {
            width: 100%;
            height: 97px;
            // background-color: blue;
            box-sizing: border-box;
            padding-left: 21px;
            padding-top: 16px;
            display: flex;
            .img {
              width: 60px;
              height: 60px;
              background-color: darkgoldenrod;

              img {
                width: 60px;
              }
            }
            .s_infomation {
              margin-left: 16px;
              width: 177px;
              height: 60px;
              // background-color:navajowhite;
              position: relative;
              .new {
                width: 28px;
                height: 14px;
                background: rgba(255, 88, 88, 1);
                border-radius: 2px;
                text-align: center;
                line-height: 14px;
                p {
                  color: rgba(255, 255, 255, 1);
                  font-size: 12px;
                  -webkit-transform: scale(0.84);
                }
              }
              .name {
                position: absolute;
                top: -3px;
                left: 30px;
                font-size: 14px;
                font-family: PingFangSC-Semibold, PingFang SC;
                font-weight: 600;
                color: rgba(0, 0, 0, 1);
              }
              .introduce {
                position: absolute;
                top: 15px;
                p {
                  font-size: 10px;
                  font-family: PingFangSC-Regular, PingFang SC;
                  font-weight: 400;
                  color: #b2b2b2;
                  -webkit-transform-origin-x: 0;
                  -webkit-transform: scale(0.84);
                }
              }
              .price {
                position: absolute;
                top: 35px;
                color: #fe5353;

                .rmb {
                  display: inline-block;
                  transform: scale(0.75);
                  font-size: 12px;
                }
              }
              .del_price {
                position: absolute;
                top: 36px;
                left: 40px;
                .del_prices {
                  display: inline-block;
                  transform: scale(0.8);
                  font-size: 12px;
                  color: #b2b2b2;
                  text-decoration: line-through;
                }
              }
              .add {
                position: absolute;
                top: 36px;
                left: 155px;
                width: 18px;
                height: 18px;
                img {
                  width: 18px;
                }
              }
            }
          }
        }
      }
    }
  }
  .van-tree-select {
    display: block;
    height: 574px !important;
  }
  .van-tree-select__nav {
    float: left;
    width: 90px;
    height: 100%;
  }
  .van-tree-select__nav-item {
    width: 90px;
    height: 49px;
  }

  //   .swipe-content {
  //     width: 100%;
  //     height: 110px;
  //     background-color: blue;
  //     padding: 0 14px;

  //     .swipe {
  //       width: 100%;
  //       height: 100%;
  //       background-color: chartreuse;
  //       .van-swipe{
  //           height: 110px;
  //           img{
  //               height: 110px;
  //           }
  //       }
  //     }
  //   }
}
</style>
