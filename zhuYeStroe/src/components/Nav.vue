<template>
    <div>
      <div class="myNav">
        <router-link to="/home">
          <img src="../assets/1.png" alt="">
        </router-link>
        <router-link to="/product">
          <h3>商品分类</h3>
        </router-link>
        <router-link to="/mycar">
          <h3>购物车</h3>
        </router-link>
        <router-link to="/personal">
          <h3>个人中心</h3>
        </router-link>
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
    width: 100%;
    height:100%;
  }
  div{
    width: 100%;
    height:100%;
  }
  div .myNav{
    position: fixed;
    bottom:-0.01rem;
    left:0;
    height: 0.5rem;
    width: 100%;
    border-top: 1px solid #cecece;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    background-size: 100%;
    z-index: 999;

  }
  div .myNav a{
    display: inline-block;
    flex: 1;
    text-align: center;

  }
  div .myNav a img{
    /*display: inline-block;*/
    padding-bottom: 0.18rem;
    /*text-align: center;*/
    color:#000;
  }
  div .myNav a h3{
    color:#020202;
    font-size:0.2rem;
  }
</style>
