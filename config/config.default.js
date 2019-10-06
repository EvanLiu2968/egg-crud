'use strict';
const path = require('path');

module.exports = appInfo => {
  const config = {};

  config.cluster = {
    listen: {
      port: 7001,
    },
  };

  // should change to your own
  config.keys = appInfo.name + '_1490750627161_5967';

  config.middleware = [ 'errorHandler', 'authHandler' ];

  config.uploadDir = path.join(__dirname, '../uploadFile');

  config.swaggerdoc = {
    dirScanner: './app/controller',
    apiInfo: {
      title: 'egg-api-doc',
      description: 'Api doc powerd by egg-swagger-doc.',
      version: '1.0.0',
    },
    schemes: ['http'],
    parameters: [
      {
        description: '用户登录凭证',
        name: 'accessToken',
        in: 'header',
      },
    ],
    // https://swagger.io/specification/#securitySchemeObject
    securityDefinitions: {
      apiKey: {
        type: 'apiKey',
        description: '用户登录凭证',
        name: 'accessToken',
        in: 'header',
      },
    },
    enableSecurity: true,
    // enableValidate: true,
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

  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'egg-crud',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'root',
    define: {
      timestamps: false, // 自动维护时间戳
      underscored: true, // 是否不转换为驼峰式，仅用于create_at update_at字段
      freezeTableName: true, // 禁止修改表名，默认情况下sequelize将自动将所有传递的模型名称（define的第一个参数）转换为复数
    },
    timezone: '+08:00', // 保存为本地时区
    dialectOptions: {
      dateStrings: true,
      typeCast(field, next) {
        // for reading from database
        if (field.type === 'DATETIME') {
          return field.string();
        }
        return next();
      },
    },
  };

  // config.mysql = {
  //   client: {
  //     host: '127.0.0.1',
  //     port: '3306',
  //     user: 'root',
  //     password: 'root',
  //     database: 'egg-crud',
  //   },
  //   app: true,
  //   agent: false,
  // };

  // 配置上传文件白名单
  config.multipart = {
    fileExtensions: ['.pdf', '.txt'],
  };

  return config;
};

