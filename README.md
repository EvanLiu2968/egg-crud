# egg-crud
A full example egg crud app framework, include mysql, redis and swagger-doc. 

此项目是为了提供一个开箱即用的egg应用模版(依赖mysql, redis)，按正常的前后端分离逻辑，后端服务仅需提供接口服务、接口文档及部署流程

需要加入webpack、react、vue这些前端服务的话，可参考[https://github.com/EvanLiu2968/evanliu2968](https://github.com/EvanLiu2968/evanliu2968)

## 主要集成服务
- egg-script(egg-cluster)
- [egg-sequelize](https://eggjs.org/zh-cn/tutorials/sequelize.html)
- egg-redis(集成登录、授权服务)
- [egg-swagger-doc](https://www.npmjs.com/package/egg-swagger-doc) 接口文档服务

### Swagger URL

- swaggerUI http://localhost:7001/swagger-ui.html
- JSON http://localhost:7001/swagger-doc

## sequelize
Node的sequelize相当于Java的mybatis, golang的gorm。在一些较为复杂的应用中，我们可能会需要一个 ORM 框架来帮助我们管理数据层的代码

### sequelize-cli
- 初始化 Migrations 配置文件和目录
```bash
npx sequelize init:config
npx sequelize init:migrations
```
- 初始化 Migration 文件
```bash
npx sequelize migration:generate --name=init-user
```
- 升级数据库（初始化数据库）
```bash
# 升级数据库
npx sequelize db:migrate
# 如果有问题需要回滚，可以通过 `db:migrate:undo` 回退一个变更
# npx sequelize db:migrate:undo
# 可以通过 `db:migrate:undo:all` 回退到初始状态
# npx sequelize db:migrate:undo:all
```

> migrate可以用于升级数据库和初始方法化数据库，但初始化数据库还可以使用`Model.sync()`
```javascript
// 在定义Model后加上，会同步Model至数据库表，新增的字段也会同步，migrate更适合记录数据库的升级、变更、迁移，如何选择看具体场景
ModelInstance.sync({ alter: true });
```

- 初始化数据
```bash
# 创建seed
npx sequelize seed:create --name init-user
# 执行所有seed
npx sequelize db:seed:all
# 执行指定seed
npx sequelize db:seed --seed ${timestamp}-init-user.js
```

### Build Setup

```bash
# install dependencies
$ yarn

# serve at localhost:7001
$ yarn run dev

```

### Deploy

```bash
$ yarn run start
$ yarn run stop
```

### npm scripts

- Use `yarn run lint` to check code style.
- Use `yarn run test` to run unit test.
- Use `yarn run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.

##### Mac start
```bash
brew install redis mongodb
brew services start redis
brew services start mongodb
```

##### Windows start
可使用phpstudy等类似集成环境工具快速启动本地服务

##### Linux(CentOS7) start
```bash
# redis install [yum install redis](https://www.cnblogs.com/rslai/p/8249812.html)
yum install redis

# control
systemctl start redis.service
systemctl stop redis.service

# install mysql
# https://stackoverflow.com/questions/9083408/fatal-error-cant-open-and-lock-privilege-tables-table-mysql-host-doesnt-ex
wget http://repo.mysql.com/mysql-community-release-el7-5.noarch.rpm
rpm -ivh mysql-community-release-el7-5.noarch.rpm
yum install mysql-server

# edit config
vim /etc/my.cnf
datadir=/data/mysql
# mysql control
systemctl start mysqld

# login
# cat /var/log/mysqld.log|grep 'A temporary password'
mysql -u root -p
use mysql
update mysql.user set authentication_string = password("123456") where user="root";
GRANT ALL ON *.* to root@'%' IDENTIFIED BY 'root'; # to allow remote connect
flush privileges;
quit;

# download mongodb package

wget http://mirrors.aliyun.com/mongodb/yum/redhat/6Server/mongodb-org/3.4/x86_64/RPMS/mongodb-org-mongos-3.4.0-1.el6.x86_64.rpm

# create yum resposity

rpm -ivh mongodb-org-mongos-3.4.0-1.el6.x86_64.rpm

# install

yum install mongodb

# start service

service mongod start

# conf

cd /etc/mongo.conf

```
