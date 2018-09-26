import axios from 'axios'
import qs from 'qs'
 
axios.interceptors.request.use(config => {
  //显示loading
  console.log('loading_start')
  return config
}, error => {
  return Promise.reject(error)
})
 
 
// axios.interceptors.response.use(response => {
//   return response
// }, error => {
//   if (error) {
//     console.log(error.response)
//   }
//   return Promise.reject(error)
// })

const httpServer = (opts, data) => {
 
    let Public = { //公共参数
      'srAppid': ""
    }
 
    let httpDefaultOpts = { //http默认配置
      method: opts.method,
      // baseURL: 'http://localhost:10000',
      url: opts.url,
      timeout: 10000,
      // params:Object.assign(Public, data),
      // data:qs.stringify(Object.assign(Public, data)),
      data:qs.stringify(data),
      headers: opts.method=='get'?{
        'X-Requested-With': 'XMLHttpRequest',
        "Accept": "application/json",
        "Content-Type": "application/json; charset=UTF-8"
      }:{
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }
 
    if(opts.method=='get'){
      delete httpDefaultOpts.data
    }else{
      delete httpDefaultOpts.params
    }
    
    let promise = new Promise(function(resolve, reject) {
      axios(httpDefaultOpts)
      .then(
        (res) => {
          resolve(res)
        }
      ).catch(
        (res) => {
          console.log(res.response.status)
          if (error.response.status === 404) {
            
          }
          if (error.response.status === 403) {
            
          }
          if (error.response.status === 500) {
            
          }
          if (error.response.status === 502) {
            
          }
          reject(res)
        }
      )
 
    })
  return promise
}
 
export default httpServer



