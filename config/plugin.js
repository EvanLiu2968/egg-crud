'use strict';

// had enabled by egg

exports.static = true;

exports.redis = {
  enable: true,
  package: 'egg-redis',
};

exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};

exports.validate = {
  enable: true,
  package: 'egg-validate',
};

exports.swaggerdoc = {
  enable: true,
  package: 'egg-swagger-doc',
};
