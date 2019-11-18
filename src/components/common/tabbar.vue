<!--
 * @Author: your name
 * @Date: 2019-11-17 23:32:12
 * @LastEditTime: 2019-11-18 00:09:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \caredily66\src\components\common\tabbar.vue
 -->
<template>
  <div>
    <div class="footer">
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
      active: 0,
      currIndex: 0,
      tabbars: [
        {
          name: "index",
          title: "首页",
          normal: require("../../cmmon/image/tabbar/首页-未选中.png"),
          active: require("../../cmmon/image/tabbar/首页-选中.png")
        },
        {
          name: "product",
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
          name: "me",
          title: "我的",
          normal: require("../../cmmon/image/tabbar/笑脸.png"),
          active: require("../../cmmon/image/tabbar/笑脸 (1).png")
        }
      ]
    };
  },
  methods: {
    tab(index, val) {
      this.currIndex = index;
      this.$router.push(val);
    }
  }
};
</script>
<style lang="less" scoped>
.footer {
  width: 100%;
  height: 48px;
  background-color: forestgreen;
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 2;
}
</style>