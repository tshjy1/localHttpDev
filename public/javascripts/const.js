/**
 * 请求返回数据
 */
const Callback = function (err, data, res) {
  if (err) {
    res.send({
      'status': 0,
      'message': err
    });
  } else {
    res.send({
      'status': 1,
      'data': data,
      'message': 'success',
    });
  }
}


module.exports = {
  Callback,
}