# Docs
 - [官方文档（英文）](https://docs.nestjs.com/)
 - [8.x 文档（中文）](https://docs.nestjs.cn/8/introduction)

# Features
 - [x] HTTP 模块集合接口 & ~~@Global 声明全局~~
 - [x] 使用 Swagger 生成接口文档
 - [ ] 统一封装响应数据格式
 - [ ] ~~使用 cache 优化慢的接口~~
 - [ ] 日志
 - [x] 异常处理
 - [ ] Swagger 设置请求头
 - [ ] 环境配置
 - [x] 参数校验 & 转换

# Code Style Guide
 ```javascript
  // 请求接口函数命名以 fetch 开头，如：
  fetchWeather() {
    
  }
  // 对需要处理数据格式的应该使用单独函数进行处理，格式化处理数据函数以 toFormat 开头，data 结尾，如：
  toFormatWeatherData() {

  }
 ```