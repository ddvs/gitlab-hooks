module.exports = {
  // 项目监听
  'defaultListen': false,
  // 监听列表
  'listen': [
    {
      'type': '{{listenType}}',
      'host': '{{listenDomain}}',
      'port': {{listenPort}}
    }
  ],
  'repositoryDir': '{{repositoryDir}}',
  'cpuLen': 1,
  'paths': {
    '/php/laravel': {
      'confFile': '{{confFile}}',
      'domain': '{{domain}}',
      'serverAdmin': '{{serverAdmin}}',
      'rootLog': '{{rootLog}}',
      'DirectoryIndex': '{{DirectoryIndex}}',
      'secret': '{{secret}}'
    }
  }
}
