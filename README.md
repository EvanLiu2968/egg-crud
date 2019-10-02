# egg-crud
A full example egg crud app, only with egg server. 

此项目是为了提供一个开箱即用的egg应用模版，按正常的前后端分离逻辑，后端服务仅需提供接口服务、接口文档及部署流程

需要继承webpack、react、vue这些前端服务的话，可参考[https://github.com/EvanLiu2968/evanliu2968](https://github.com/EvanLiu2968/evanliu2968)

## 主要集成服务
- egg-cluster
- egg-mysql
- egg-redis
- [egg-swagger-doc-feat](https://www.npmjs.com/package/egg-swagger-doc) 接口文档服务

### Build Setup

```bash
# install dependencies
$ npm install

# serve at localhost:7001
$ npm run dev

```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.

### URL 

- swaggerUI: http://localhost:7001/swagger-ui.html

- JSON
http://localhost:7001/swagger-doc
