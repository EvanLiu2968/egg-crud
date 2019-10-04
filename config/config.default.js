'use strict';

module.exports = appInfo => {
  const config = {};

  config.cluster = {
    listen: {
      port: 7001,
    },
  };

  // should change to your own
  config.keys = appInfo.name + '_1490750627161_5967';

  config.swaggerdoc = {
    dirScanner: './app/controller',
    apiInfo: {
      title: 'egg-api-doc',
      description: 'Api doc powerd by egg-swagger-doc.',
      version: '1.0.0',
    },
    schemes: ['http'],
    enable: true,
    routerMap: true,
  };

  // redis
  config.redis = {
    client: {
      host: process.env.EGG_REDIS_HOST || '127.0.0.1',
      port: process.env.EGG_REDIS_PORT || 6379,
      password: process.env.EGG_REDIS_PASSWORD || '',
      db: process.env.EGG_REDIS_DB || '0',
    },
  };

  config.mysql = {
    // database configuration
    client: {
      // host
      host: 'localhost',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: 'root',
      // database
      database: 'egg-crud',
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };

  // 配置上传文件白名单
  config.multipart = {
    fileExtensions: ['.pdf', '.txt'],
  };

  return config;
};

