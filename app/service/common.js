'use strict';
const Service = require('egg').Service;
const fs = require('fs');
const path = require('path');

class CommonService extends Service {

  async uploadFile(stream) {
    const uploadDir = this.config.uploadDir;
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, '0777');
    }
    const fileUrl = path.join(uploadDir, stream.filename);

    const writerStream = fs.createWriteStream(fileUrl);

    stream.pipe(writerStream);

    const File = new this.ctx.model.File();
    File.file_name = stream.filename;
    File.file_url = fileUrl;
    return File.save();
  }

}

module.exports = CommonService;
