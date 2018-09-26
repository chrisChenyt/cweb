import api from '../controllers/todolist.js'
import koaRouter from 'koa-router'
const router = koaRouter()

router.post('/getList', api.getTodolist) //获取列表
      .post('/createList', api.createTodolist) //新建
      .post('/deleteList', api.removeTodolist) //删除
      .post('/updateList', api.updateTodolist) //完成|还原

module.exports = router; // 导出router规则