<template>
<div class="wrapper">
  <swiper :options="swiperOption">
    <swiper-slide v-for="item of swiperList" :key="item.id">
      <img 
        class="swiper-img" 
        :src="item.imgUrl"
      />
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>   
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1805/e5/59fad13a64807d02.jpg_750x200_713ae984.jpg'
      },{
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1708/f1/ee65a13642c95c02.jpg_750x200_3440fec0.jpg'
      }]
    };
  }
};
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active//样式穿透
  background: #fff !important
.wrapper
  overflow: hidden//防止页面加载时抖动
  width: 100%
  height: 0
  padding-bottom: 31.25%
  background-color: #eee
  .swiper-img 
    width: 100%;
</style>
