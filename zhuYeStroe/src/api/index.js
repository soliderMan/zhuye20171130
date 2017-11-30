
import axios from 'axios';
axios.defaults.baseURL='http://localhost:3000';
axios.interceptors.response.use(res=>{
  return res.data;
});

//获取轮播图
export let getSliders=()=>{
  return axios.get('/slider')
};

//获取热门图书
export let getHot=()=>{
  return axios.get('/hot')
};

export let getAll = () =>{
  return axios.all([getSliders(),getHot()]);
};
