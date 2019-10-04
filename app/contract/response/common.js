'use strict';

module.exports = {
  giftResponse: {
    message: { type: 'string', description: '礼包名称' },
    coupon: { type: 'string', description: '获得的礼包卡号' },
  },

  uploadResponse: {
    id: { type: 'string', description: 'id' },
    fileUrl: { type: 'string', description: '文件地址' },
    fileName: { type: 'string', description: '文件名' },
    fileSize: { type: 'integer', description: '文件大小' },
    fileType: { type: 'integer', description: '文件类型' },
  },

};
