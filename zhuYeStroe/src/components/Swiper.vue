<template>
  <swiper id="mySwiper" :options="swiperOption">
    <swiper-slide id="slide" v-for="(slide,index) in swiperSlides" :key="index">
      <img :src="slide" alt="" style="width:100%">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carrousel',
    props:['swiperSlides'],
    data() {
      return {
        swiperOption: {
          autoplay:true,
          setWrapperSize :true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          mousewheelControl : true,
          observeParents:true,
          disableOnInteraction:true,
//          loop:true,
        },
//        swiperSlides: [1, 2, 3, 4, 5]
      }
    },
    mounted() {
//      setInterval(() => {
//        console.log('simulate async data')
//        let swiperSlides = this.swiperSlides
//        if (swiperSlides.length < 10) swiperSlides.push(swiperSlides.length + 1)
//      }, 3000)

    }
  }
</script>


<style scoped>
  html,body{
    width: 100%;
    height:100%;
  }
#mySwiper{
  margin-top: 0.7rem;
  width:100%;
  height:1.95rem;
}
  #mySwiper #slide{
    font-size: 0.16rem;
  }
  .swiper-pagination{
    color:red;
    width:0.1rem;
    height:0.1rem;
  }
</style>
