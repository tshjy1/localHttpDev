const express = require('express');
const router = express.Router();
const mongoose = require('./databaseMyDev');
const customConst = require('../../public/javascripts/const');

/************** 定义模式Schema **************/
const Schema = mongoose.Schema

/**
 * user表
 */
const UserSchema = new Schema({
  _id: Schema.Types.ObjectId,
  username: String,
  password: String,
  // createTime: Number,
  // updateTime: Number,
  // ip: String,
  // address: String,
  // area: String,
  // region: String,
  // region_id: String,
  // city_id: String,
  // isp: String,
})
/************** 编译模型Model **************/
/**
 * 编译模型： model(name, [schema], [colleciton], [skipInit] )
   参数： name ：标识model的字符串
　　     schema: 即前面定义的Schema对象
　　 collection：要连接的集合名称（如果在Schema对象中没有指定一个集合）
　　 skipInit： 默认为false，如果为true，则跳过初始化过程，创建一个没有连接到数据库的一个简单的Model对象。
*/

const UsersCollect = mongoose.model('users', UserSchema, 'usr', false)


/* GET users interface. */
router.get('/search', function(req, res, next) {
  UsersCollect.find({}).exec(function (err, data) {
    customConst.Callback(err, data, res)
  });
});

module.exports = router;
