let fs =require('fs');
let express =require('express');
let app=express();
app.listen(3000);
let sliders=require('./slider');
let bodyParser=require('body-parser');

//获取热门图书之前 需要读取
function read(cb) {
  fs.readFile('./hotBook.json','utf8',function (err,data) {
    if(err || data.length===0){
      cb([])
    }
    cb(JSON.parse(data))
  })
}

//解决跨域
app.use(function (req,res,next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  if(req.method=="OPTIONS") res.send();/*让options请求快速返回*/
  else  next();
})
//请求轮播图数据
app.get('/slider',function (req,res) {
  res.json(sliders);
});
//请求首页热门图书
app.get('/hot',function (req,res) {
  read(function (books) {
    let hot=books.reverse().slice(0,8);
    res.json(hot)
  })
})
