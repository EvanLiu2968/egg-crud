'use strict';

// had enabled by egg

exports.static = true;

exports.redis = {
  enable: true,
  package: 'egg-redis',
};

exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};

// exports.mysql = {
//   enable: true,
//   package: 'egg-mysql',
// };

exports.validate = {
  enable: true,
  package: 'egg-validate',
};

exports.swaggerdoc = {
  enable: true,
  package: 'egg-swagger-doc',
};
