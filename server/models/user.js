const db  = require('../config/db.js'); // 引入user的表结构
const userModel = '../schema/user.js'
const TodolistDb = db.Todolist // 引入数据库

const User = TodolistDb.import(userModel) // 用sequelize的import方法引入表结构，实例化了User。

const getUserByName = async function (name) {
  console.log(name)
  const userInfo = await User.findOne({
    where: {
      user_name: name
    }
  })
  return userInfo
}

const createUser = async function (data) {
  await User.create({
    user_name: data.name,
    password: data.password
  })
  return true
}

module.exports =  {
  getUserByName,
  createUser
}