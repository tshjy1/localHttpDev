const express = require('express');
const router = express.Router();

const usersRouter = require('./myDev/users');

router.use('/users', usersRouter)

/* GET home page. */
router.get('/', function(req, res, next) {
  // mongoose
  res.render('index', { title: '双军的本地DEV环境数据库', baseName: 'myDev' });
});

module.exports = router
