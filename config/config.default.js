'use strict';

module.exports = appInfo => {
  const config = {};

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

  // 配置上传文件白名单
  config.multipart = {
    fileExtensions: ['.pdf', '.txt'],
  };

  return config;
};

