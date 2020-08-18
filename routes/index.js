const express = require('express');
const router = express.Router();
const app = express();
// const mongoose = require('./databaseMyDev');


//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});
  
app.get('/hello', function (req, res) {
  res.json({name: 'MyDEV', })
});

/* GET home page. */
router.get('/', function(req, res, next) {
  // mongoose
  res.render('index', { title: 'Express' });
});

module.exports = router;
