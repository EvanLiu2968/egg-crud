'use strict';
const Service = require('egg').Service;
const fs = require('fs');
const path = require('path');

class CommonService extends Service {

  async uploadImg(origin, id, stream) {
    const writerStream = fs.createWriteStream(path.join(this.config.baseDir, `app/public/${stream.filename}`));

    stream.pipe(writerStream);

    let fileUrl = `${origin}/public/${stream.filename}`;

    return {
      fileUrl,
    };
  }

}

module.exports = CommonService;
