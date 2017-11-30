<template>
  <div id="app">
    <MNav></MNav>
    <router-view></router-view>
  </div>
</template>

<script>
  import MNav from './components/Nav.vue';
export default {
  name: 'app',
  components:{
    MNav
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html{
  font-size: 100px;
}
  ul li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
</style>
