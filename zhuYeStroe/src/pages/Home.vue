<template>
  <div>
    <MHeader></MHeader>
    <Swiper :swiperSlides="sliders"></Swiper>
    <ul class="list">
      <li v-for="(book,index) in HotBooks" :key="index">
        <a href=""><img :rc="book.img" alt=""></a>
        <span>{{book.title}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import MHeader from '../components/MHeader.vue';
import Swiper from '../components/Swiper.vue';
import {getAll} from '../api';
  export default {
    data () {
      return { sliders:[],HotBooks:[]}
    },
    created(){
     this.getData();
    },
    computed:{},
    components:{
      MHeader,
      Swiper
    },
    methods:{
         async getData(){
             let [sliders,hotBooks]=await getAll();
            this.sliders=sliders;
            this.HotBooks=hotBooks;
        }
    },

  }
</script>


<style scoped>
  html,body{
    width:100%;
    height:100%;
  }
  div{
    width:100%;
    height:100%;
  }
 .list{
   width:100%;
   height:2.06rem;
   padding: 0.07rem 0;
   display: flex;
   flex-wrap: wrap;
 }
  .list li {
    position: relative;
    /*width:0.94rem;*/
    height:1.03rem;
    flex: 1;
    border: 1px solid red;
  }

  .list li a{
    /*position: absolute;*/
    /*top:0;*/
    /*left:0.1rem;*/
    display: block;
    width:0.61rem;
    height:0.61rem;
    border: 1px solid #000;
  }
  .list li span{
    display: block;
    /*position: absolute;*/
    /*top:0.8rem;*/

    font-size: 0.15rem;
  }
</style>
