const path = require('path')
module.exports = {
  helpers: {
    raw: function (options) {
      return options.fn(this)
    }
  },
  prompts: {
    name: {
      'type': 'string',
      'required': true,
      'message': 'Project name'
    },
    description: {
      'type': 'string',
      'required': false,
      'message': 'Project description',
      'default': 'ddv gitlab hooks project'
    },
    author: {
      'type': 'string',
      'message': 'Author',
      'default': 'ddv gitlab hooks'
    },
    listenType: {
      'type': 'string',
      'required': true,
      'message': 'hooks listen type',
      'default': 'tcp'
    },
    listenDomain: {
      'type': 'string',
      'required': true,
      'message': 'hooks listen domain',
      'default': 'hooks.abc.com'
    },
    listenPort: {
      'type': 'number',
      'required': true,
      'message': 'hooks listen port',
      'default': 80
    },
    repositoryDir: {
      'type': 'string',
      'required': true,
      'message': 'apache2 conf ',
      'default': path.join(__dirname, './repository')
    },
    confFile: {
      'type': 'string',
      'message': 'apache2 conf file path',
      'default': path.join(__dirname, './laravel.php.conf')
    },
    domain: {
      'type': 'string',
      'message': 'apache2 conf file domain suffix',
      'default': 'git.abc.com'
    },
    serverAdmin: {
      'type': 'string',
      'message': 'apache2 server admin email',
      'default': 'webmaster@localhost'
    },
    rootLog: {
      'type': 'string',
      'message': 'apache2 server log root dir',
      'default': '/disk2/log/phpweb/'
    },
    DirectoryIndex: {
      'type': 'string',
      'message': 'apache2 default directory index',
      'default': 'index.html index.php'
    },
    secret: {
      'type': 'string',
      'message': 'gitlab secret key',
      'required': true,
      'default': guid()
    }
  },
  completeMessage: '{{#inPlace}}To get started:\n\n  npm install # Or yarn\n  npm run dev{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install # Or yarn\n  npm run dev{{/inPlace}}'
}
function guid () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0
    var v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}
