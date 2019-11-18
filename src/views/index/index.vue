<!--
 * @Author: your name
 * @Date: 2019-11-11 22:10:30
 * @LastEditTime: 2019-11-18 00:53:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \caredily66\src\views\index\index.vue
 -->
<template>
  <div>
    <!-- 头部 -->
    <div class="head">
      <span>得乐云</span>
    </div>
    <!--信息 -->
    <div class="msg">
      <div class="msg-left">
        <div class="hp"></div>
        <span>周华燕</span>
      </div>
      <div class="msg-right">
        <i class="icon-kefu-copy iconfont span1"></i>
        <span class="span2">客服</span>
      </div>
    </div>
    <!-- 轮播 -->
    <div class="Shuffling">
      <van-swipe  indicator-color="white" >
        <van-swipe-item><img src="https://img.alicdn.com/tfs/TB1HUmbmrj1gK0jSZFOXXc7GpXa-520-280.jpg_q90_.webp" alt=""></van-swipe-item>
        <van-swipe-item><img src="https://img.alicdn.com/simba/img/TB1c9cQhkP2gK0jSZPxSuucQpXa.jpg" alt=""></van-swipe-item>
        <van-swipe-item><img src="https://img.alicdn.com/simba/img/TB1C04Xmbr1gK0jSZR0SuvP8XXa.jpg" alt=""></van-swipe-item>
      </van-swipe>
    </div>

    <!-- 导航 -->
    <div class="nav">
      <ul>
        <li>
          <div>
            <img src="../../cmmon/image/index1/SY_ICO_0`(4).png" alt />
          </div>
          <p>活动中心</p>
        </li>
        <li>
          <div>
            <img src="../../cmmon/image/index1/SY_ICO_0`.png" alt />
          </div>
          <p>朋友圈素材</p>
        </li>
        <li>
          <div>
            <img src="../../cmmon/image/index1/SY_ICO_0`(2).png" alt />
          </div>
          <p>政策解读</p>
        </li>
        <li>
          <div>
            <img src="../../cmmon/image/index1/SY_ICO_0`(1).png" alt />
          </div>
          <p>产品大全</p>
        </li>
        <li>
          <div>
            <img src="../../cmmon/image/index1/SY_ICO_0`(3).png" alt />
          </div>
          <p>每日签到</p>
        </li>
      </ul>
    </div>
    <!-- zixun -->
    <div class="information">
      <div class="contain">
        <img src="../../cmmon/image/index1/Shape.png" alt />
        <span class="span1">资讯</span>
        <div>2019 CBME圆满落幕，凯儿得乐完美收官啊啊啊啊</div>
      </div>
    </div>

    <!-- 11 -->
    <div class="add">
      <div class="center">
        <div class="left"></div>
        <div class="right">
          <div class="top"></div>
          <div class="bottom"></div>
        </div>
      </div>
    </div>

    <!-- 热销 -->
    <div class="hotsell">
      <span>热销产品</span>
      <div class="more">
        查看更多
        <span>></span>
      </div>
    </div>
    <!-- 商品滚动 -->
    <!-- <div class="shopping">
      <div class="wrapper">
        <van-swipe :loop="false">
          <van-swipe-item>
            <div class="pt">
              <div class="ptt"></div>
              <span class="name">丝柔亲体纸尿裤旅行者</span>
              <span class="maidian">产品买点</span>
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div class="pt">
              <div class="ptt"></div>
              <span class="name">丝柔亲体纸尿裤旅行者</span>
              <span class="maidian">产品买点</span>
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div class="pt">
              <div class="ptt"></div>
              <span class="name">丝柔亲体纸尿裤旅行者</span>
              <span class="maidian">产品买点</span>
            </div>
          </van-swipe-item>
          <van-swipe-item>
            <div class="pt">
              <div class="ptt"></div>
              <span class="name">丝柔亲体纸尿裤旅行者</span>
              <span class="maidian">产品买点</span>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div> -->
    <div class="shopping">
      <div class="wai" ref="wai">
        <div class="zhong">
          <div class="li">1</div>
          <div class="li">2</div>
          <div class="li">3</div>
          <div class="li">4</div>
          <div class="li">5</div>
        </div>
      </div>
    </div>
    <!-- 热销活动 -->
    <div class="hotsell">
      <span>热销活动</span>
      <div class="more">
        查看更多
        <span>></span>
      </div>
    </div>
    <!-- tup -->
    <div class="guangg">
      <img src="../../cmmon/image/index1/BJ4.png" alt="">
    </div>
    <!-- 滚动2 -->
    <div class="shopping" style="margin-bottom:78px">
      <div class="wai" ref="wai">
        <div class="zhong">
          <div class="li">1</div>
          <div class="li">2</div>
          <div class="li">3</div>
          <div class="li">4</div>
          <div class="li">5</div>
        </div>
      </div>
    </div>
    <!-- footer -->
    <!-- <div class="footer">
      <div class="item">
        <i class="icon-activeHome iconfont"></i>
      </div>

      <div class="item">1</div>
      <div class="item">1</div>
      <div class="item">1</div>
      <div class="item">1</div>
    </div> -->
    <tabber></tabber>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import tabber from '../../components/common/tabbar.vue';
export default {
  name: "last_play",
  data() {
    return {
      SwiperImg: [
        "https://img.alicdn.com/simba/img/TB1ezHDjxD1gK0jSZFsSuvldVXa.jpg",
        "https://img.alicdn.com/tfs/TB1HUmbmrj1gK0jSZFOXXc7GpXa-520-280.jpg_q90_.webp",
        "https://img.alicdn.com/simba/img/TB1FyChifb2gK0jSZK9SuuEgFXa.jpg"
      ],
      shoplist: [1, 1, 1, 1, 1],
      checked: true,
      bscroll:undefined,
    };
  },
  components:{
    tabber:tabber
  },
  mounted(){
    this.scroll = new BScroll(this.$refs.wai);
  },
  updated(){
    this.bscroll.refresh();
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/modifyvant.css";
.head {
  width: 100%;
  height: 44px;
  text-align: center;
  line-height: 25px;
  background-color: blue;
  z-index: 1;
  span {
    display: inline-block;
    width: 54px;
    height: 25px;
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: rgba(0, 0, 0, 1);
    line-height: 25px;
  }
}

.msg {
  width: 100%;
  height: 41px;
  padding: 0 13px 0 16px;
  display: flex;
  justify-content: space-between;
  background-color: aqua;
  align-items: center;
  .msg-left {
    width: 100px;
    height: 100%;
    display: flex;
    align-items: center;
    .hp {
      width: 28px;
      height: 28px;
      background-color: crimson;
      border-radius: 50%;
      margin-right: 5px;
    }
    span {
      width: 50px;
      height: 17px;
      font-size: 12px;
      font-family: PingFangHK-Medium, PingFangHK;
      font-weight: 500;
      color: rgba(0, 0, 0, 1);
      line-height: 17px;
    }
  }
  .msg-right {
    width: 66px;
    height: 26px;
    background: rgba(245, 246, 250, 1);
    border-radius: 13px;
    position: relative;
    text-align: center;
    line-height: 16px;
    .span1 {
      width: 18px;
      height: 18px;
      margin-right: 1px;
    }
    .span2 {
      width: 22px;
      height: 16px;
      font-size: 12px;
      font-family: PingFangHK-Regular, PingFangHK;
      font-weight: 400;
      color: rgba(0, 0, 0, 1);
    }
  }
}

.Shuffling {
  width: 100%;
  height: 178px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(247, 249, 252, 1) 100%
  );
  padding: 3px 14px 12px 16px;
  // // .Shufflings {
  // //   width: 343px;
  // //   height: 163px;
  // //   background-color: darkgreen;
  // //   border-radius: 5px;
  // //   img {
  // //     width: 100%;
  // //     height: 100%;
  // //   }
  // }
  .van-swipe{
    height:178px;
    img{
      height: 100%;
    }
  }
}

.nav {
  width: 100%;
  height: 80px;
  background-color: burlywood;
  padding: 0 15px;
  margin-top: 6px;
  ul {
    display: flex;
    justify-content: space-around;
    li {
      width: 55px;
      div {
        width: 48px;
        height: 54px;
        border: 1px dotted black;
      }
      span {
        width: 50px;
        height: 16px;
        font-size: 12px;
      }
      p {
        height: 16px;
        width: 60px;
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(0, 0, 0, 1);
        line-height: 16px;
      }
    }
  }
}
.information {
  width: 100%;
  height: 40px;
  background-color: blue;
  padding: 0 16px;
  box-sizing: border-box;
  margin-bottom: 15px;
  .contain {
    width: 343px;
    height: 40px;
    background-color: chartreuse;
    display: flex;
    padding-top: 14px;
    padding-left: 10px;

    img {
      width: 54px;
      height: 12px;
      margin-right: 5px;
    }
    .span1 {
      width: 30px;
      height: 14px;
      background: rgba(67, 100, 241, 1);
      border-radius: 2px;
      font-size: 10px;
      color: rgba(255, 255, 255, 1);
      line-height: 13px;
      text-align: center;
      margin-right: 10px;
    }
    div {
      width: 215px;
      height: 16px;
      font-size: 11px;
      font-family: PingFangHK-Regular, PingFangHK;
      font-weight: 400;
      color: rgba(0, 0, 0, 1);
      line-height: 13px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
.add {
  width: 100%;
  height: 135px;
  background-color: brown;
  padding: 0 15px;
  .center {
    width: 100%;
    height: 100%;
    background-color: aqua;
    display: flex;
    justify-content: space-between;
    .left {
      width: 176px;
      height: 100%;
      background: linear-gradient(
        138deg,
        rgba(251, 230, 120, 1) 0%,
        rgba(254, 186, 106, 1) 100%
      );
      border-radius: 5px;
    }
    .right {
      .top {
        width: 164px;
        height: 65px;
        background: linear-gradient(
          90deg,
          rgba(251, 170, 122, 1) 0%,
          rgba(253, 134, 106, 1) 100%
        );
        border-radius: 5px;
        margin-bottom: 5px;
      }
      .bottom {
        width: 164px;
        height: 65px;
        background: linear-gradient(
          90deg,
          rgba(124, 147, 251, 1) 0%,
          rgba(155, 106, 253, 1) 100%
        );
        border-radius: 5px;
      }
    }
  }
}
.hotsell {
  width: 100%;
  height: 54px;
  background-color: coral;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    font-size: 16px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: rgba(0, 0, 0, 1);
  }
  .more {
    width: 62px;
    height: 17px;
    background-color: brown;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #acadaf;
    line-height: 17px;
    span {
      width: 5px;
      height: 5px;
      background-color: cadetblue;
      font-size: 10px;
      color: #acadaf;
    }
  }
}

// .shopping {
//   width: 100%;
//   height: 193px;
//   background-color: rgba(155, 106, 253, 1);
//   padding: 0 15px;
// .van-swipe{
//   height: 193px;
//     .van-swipe-item{
//       height: 100%;
//     }
//   }
// }
//   // .wrapper {
//   //   height: 193px;
//   //   background-color: aqua;
//   //   overflow: hidden;
//   //   .pt {
//   //     width: 84px;
//   //     height: 100%;
//   //     background-color: violet;
//   //     margin-left: 10px;
//   //     .ptt {
//   //       width: 100%;
//   //       height: 106px;
//   //       background-color: crimson;
//   //       border: 1px solid black;
//   //     }
//   //     .name {
//   //       display: block;
//   //       width: 84px;
//   //       height: 28px;
//   //       font-size: 12px;
//   //       font-family: PingFangSC-Medium, PingFang SC;
//   //       font-weight: 500;
//   //       color: rgba(34, 34, 34, 1);
//   //       line-height: 14px;
//   //     }
//   //     .maidian {
//   //       margin-top: 5px;
//   //       display: block;
//   //       width: 44px;
//   //       height: 10px;
//   //       font-size: .1rem;
//   //       font-family: PingFangSC-Regular, PingFang SC;
//   //       font-weight: 400;
//   //       color:#9B9B9B;
//   //       line-height: 10px;
//   //     }
//   //   }
//      }

.shopping{
  width: 100%;
  height: 193px;
  background-color: chartreuse;
  padding: 0 16px;
  .wai{
    height: 100%;
    width: 100%;
    border: 1px dotted black;
    overflow: scroll;
    .zhong{
      width: 520px;
      height: 100%;
      display: flex;
       .li{
      width: 104px;
      height: 100%;
      border: 1px solid black;
      background-color:crimson;
    }
    }
  }
}

.guangg{
  width: 100%;
  height: 115px;
  background-color:cyan;
  padding: 0 15px;
  
  img{
    height: 100%;
  }
}
.footer{
  width: 100%;
  height: 48px;
  background-color:forestgreen;
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  
  .item{
    width: 75px;
    height: 100%;
    border: 1px solid black;
    text-align: center;
    box-sizing: border-box;
    i{
      width: 18px;
      height: 18px;
    }
  }

}

</style>