'use strict';
const Service = require('egg').Service;

class LoginService extends Service {

  async login(user) {

    return {
      result: true,
    };
  }

  async logout() {

    return {
      result: true,
    };
  }

  async getUser() {

    return {
      result: true,
    };
  }

}

module.exports = LoginService;
