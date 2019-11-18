<template>
  <div class="result">
    <div class="result-wrapper">
      <div class="song" v-for="(item,index) in list" :key="index">
        <div class="name" @dblclick="toCmt(item.id)">
          <span class="iconfont icon-play" @click="toPlayer(item.id)"></span>
          {{item.name}}
          <span
            class="iconfont icon-editmedia"
            v-if="item.mvid != 0"
            @click="toMV(item.mvid)"
          ></span>
        </div>
        <div class="singer">{{item.artists | formatName}}</div>
        <div class="album">《{{item.album.name}}》</div>
        <div class="time">{{item.duration | formatTime }}</div>
      </div>
    </div>
  </div>
</template>

<script>
// 导入axios，难道每个组件都导入一次吗？如果每个组件都导入一次就麻烦了
// 所以做一次全局导入就可以了，以后其他地方就不用再导入了

import BScroll from "better-scroll";

export default {
  data() {
    return {
      list: [],
      bscroll:undefined
    };
  },
  methods: {
    toCmt(id) {
      this.$router.push("/cmt/" + id);
    },

    toMV(mvid) {
      this.$router.push("/mv/" + mvid);
    },

    searchData() {
      // 获取一下路由传递过来的数据
      const name = this.$route.params.name;

      //发请求
      this.$axios
        .get(`https://autumnfish.cn/search?keywords=${name}`)
        .then(backData => {
          console.log(backData);
          this.list = backData.data.result.songs;
        });
    },

    toPlayer(id) {
      this.$router.push("/player/" + id);
    }
  },
  // 创建出来才调用1次
  created() {
    this.searchData();
  },
  // 只要数据发生改变就调用
  // updated任意数据发生改变，都会来调用
  watch: {
    "$route.params.name"() {
      this.searchData();
    }
  },

  filters: {
    formatName(value) {
      let str = "";

      for (let i = 0; i < value.length; i++) {
        str += value[i].name + "|";
      }

      // 去掉最后一个|
      str = str.substr(0, str.length - 1);
      return str;
    },

    formatTime(value) {
      //先把毫秒转为秒
      let sec = Math.round(value / 1000);

      //把秒算成分
      let min = parseInt(sec / 60);

      //再得到剩余的秒
      sec = sec % 60;

      sec = sec < 10 ? "0" + sec : sec;

      return min + ":" + sec;
    }
  },

  mounted() {
    // 传入选择器
    this.bscroll = new BScroll('.result');
  },
  updated(){

    this.bscroll.refresh();
  }
};
</script>

<style>

  .result{

    height: 500px;
    /* border: 1px dashed #000; */
    overflow: hidden;
  }

</style>
