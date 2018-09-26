const user = require('../models/user.js');
const jwt = require( 'jsonwebtoken');
const bcrypt = require( 'bcryptjs');

const userLogin = async function (ctx) {
  const data = ctx.request.body // post过来的数据存在request.body里
  const userInfo = await user.getUserByName(data.name)
  if (userInfo != null) { // 如果查无此用户会返回null
    if (!bcrypt.compareSync(data.password, userInfo.password)) {
      ctx.body = {
        success: false, // success标志位是方便前端判断返回是正确与否
        message: '密码错误！'
      }
    } else {
      const userToken = {
        name: userInfo.user_name,
        userId: userInfo.user_id
      }
      const secret = 'vue-koa-chen' // 指定密钥
      const token = jwt.sign(userToken, secret) // 签发token
      ctx.body = {
        success: true,
        token: token // 返回token
      }
    }
  } else {
    ctx.body = {
      success: false,
      message: '该用户不存在！' // 如果用户不存在返回用户不存在
    }
  }
}

const createUser = async function (ctx) {
  const data = ctx.request.body // post过来的数据存在request.body里
  if(data.name=='' || data.password==''){
    ctx.body = {
      success: false,
      message: '用户名或密码不能为空'
    }
  }else{
    const userInfo = await user.getUserByName(data.name)
    if (userInfo == null) { // 如果返回null用户不存在
      //生成salt的迭代次数
      const saltRounds = 10;
      //随机生成salt
      const salt = bcrypt.genSaltSync(saltRounds);
      //获取hash值
      var hash = bcrypt.hashSync(data.password, salt);
      //把hash值赋值给password变量
      data.password = hash;
  
      const success = await user.createUser(data)
      const newUserInfo = await user.getUserByName(data.name)
      const userInfo = {
        name: newUserInfo.user_name,
        userId: newUserInfo.user_id
      }
      const secret = 'vue-koa-chen' // 指定密钥
      const token = jwt.sign(userInfo, secret) // 签发token
      ctx.body = {
        success,
        token: token // 返回token
      }
    } else {
      ctx.body = {
        success: false,
        message: '该用户已存在！' // 如果用户已存在返回用户已存在
      }
    }
  }
}

module.exports =  {
  userLogin,
  createUser
}