// 这里是二次封装axios 发送请求 定义拦截器

import axios from 'axios'

const request = axios.create({
    // 设置请求的根路径和超时时间
    baseURL: '/',// 定义根路径
    // timeOut: 20000,//设置超时时间
})
//先触发请求拦截器--发送请求--响应拦截器--触发then/catch/await
//定义请求拦截器(设置公共的请求参数，请求头)

request.interceptors.request.use((config) => {
    // config 是请求的所有信息
    // 暂时不需要
    /* if(token){
        config.headers['token']=token
        //或者
        config.headers['authorization']=`Bearer${token}`
    } */
    return config
})
// 定义响应拦截器(1、判断响应具体是成功还是失败2、返回更加具体的错误信息)
request.interceptors.response.use((response) => {
    // 看响应状态码决定响应成功或者是失败
    // 响应成功 2xxx 200-299
    // code是20000才是功能成功，非20000就是失败
    // response.data代表的是响应数据
    if (response.data.code === 20000) {
        // 功能成功--返回成功的数据
        // 第一个data是总的data里面可能包括message id name等 第二个data表示的是data里面的data里面的数据
        return response.data.data
    } else {
        //功能失败
        return Promise.reject(response.data.message)
    }
}, (error) => {
    //失败响应，非2xx
    //  console.log(error.message.status);//获取状态码
    if (error.message) {
        // 服务器返回了响应，但是响应是失败的
        // 401是未授权  没有权限访问 可能是没有token 或者是token失效或者是过期
        // 404 找不到可能是请求的地址写错了
        // 403是禁止访问 500（服务器内部错误）
        if (error.message.status === 401) {
        }
    } else {
        // 服务器没有返回响应
        // 请求超时或者是网络的错误
    }
})

// 暴露出去
export default request