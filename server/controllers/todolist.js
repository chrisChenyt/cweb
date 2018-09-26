const todolist = require('../models/todolist.js');

const getTodolist = async function (ctx) {
  const data = ctx.request.body // post过来的数据存在request.body里
  const result = await todolist.getTodolistById(data.userId) // 通过await “同步”地返回查询结果
  ctx.body = {
    success: true,
    list:result // 将请求的结果放到response的body里返回
  }
}

const createTodolist = async function (ctx) {
  const data = ctx.request.body // post过来的数据存在request.body里
  const success = await todolist.createTodolist(data)
  const result = await todolist.getTodolistById(data.userId) // 通过await “同步”地返回查询结果
  ctx.body = {
    success,
    list:result // 将请求的结果放到response的body里返回
  }
}

const removeTodolist = async function (ctx) {
  const data = ctx.request.body // post过来的数据存在request.body里
  const id = data.id
  const userId = data.userId
  const success = await todolist.removeTodolist(id, userId)
  const result = await todolist.getTodolistById(data.userId) // 通过await “同步”地返回查询结果
  ctx.body = {
    success,
    list:result // 将请求的结果放到response的body里返回
  }
}

const updateTodolist = async function (ctx) {
  const data = ctx.request.body // post过来的数据存在request.body里
  const id = data.id
  const userId = data.userId
  let status = data.status
  status === '0' ? status = 1 : status = 0// 状态反转（更新）

  const success = await todolist.updateTodolist(id, userId, status)
  const result = await todolist.getTodolistById(data.userId) // 通过await “同步”地返回查询结果
  ctx.body = {
    success,
    list:result // 将请求的结果放到response的body里返回
  }
}

module.exports = {
  getTodolist,
  createTodolist,
  removeTodolist,
  updateTodolist
}