<template>
    <div>
     <div class="header">
       <router-link to="/classify">
         <img src="../assets/2.png" alt="">
         <p>分类</p>
       </router-link>
       <div class="right">
         <input type="text" placeholder="热搜：精装算量 结算 管理 图形对量" style="outline:none; text-align: left">
         <input type="button" class="search-btn" style="outline:none;">
       </div>
     </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {}
        },
        computed: {},
        components: {},
        methods: {},

    }
</script>


<style scoped>
 html,body{
   position: relative;
    width:100%;
    height:100%;
  }
   .header{
     width: 100%;
     height:0.7rem;
     background-color: #434343;
     text-align: center;
     /*border-bottom: 1px solid #cecece;*/
     position: fixed;
     top:0;
     left:0;
     z-index: 100;
   }

  .header a{
    position: relative;
    display: block;
    margin:0.15rem 0.2rem;
    width: 0.38rem;
    height:0.4rem;

  }
  .header a img{
    position: absolute;
    margin-left: -0.15rem;
    width: 0.33rem;
    height:0.17rem;
  }

  .header a p{
    font-size: 0.18rem;
    padding-top: 0.2rem;
    color:#fff;
  }
  .header .right{
    width:2.8rem;
    height:0.4rem;
    /*border: 1px solid red;*/
    background-color: #f9ffe2;
    position: absolute;
    top:0.15rem;
    right:0.2rem;
    border-radius: 0.05rem;
  }

  .header .right input:first-child{
    display:block;
    position: absolute;
    padding-left: 0.1rem;
    font-size: 0.14rem;
    top:0.025rem;
    width:80%;
    height:0.3rem;
   padding-top: 0.02rem;
    border: none;
    text-align: center;

  }
  .header .right input:last-child{
    box-sizing: border-box;
    display: inline-block;
    position: absolute;
    top:0.025rem;
    right:0;
    width: 15%;
    height:0.349rem;
    background: url("../assets/3.doc_search.png")no-repeat center;
    background-color: #fff;
    background-size: 55%;
    border: none;

  }

</style>
