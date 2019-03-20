const HOST = "https://github-trending-api.now.sh"

module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  // 配置一些全局变量
  defineConstants: {
    HOST: HOST
  },
  weapp: {},
  h5: {}
}
