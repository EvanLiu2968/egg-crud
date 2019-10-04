'use strict';

const Controller = require('egg').Controller;

/**
 * @controller CommonController 通用业务
 */
class CommonController extends Controller {

  /**
   * @ignore
   */
  async nothing() {
    const { ctx } = this;
    ctx.body = 'nothing';
  }

  /**
   * @summary 获取幸运礼包
   * @description 随机抽取一个神秘礼包，最高500万代金券哦
   * @Deprecated
   * @router get /v1/getMoney
   * @response 200 giftResponse 成功获得一个幸运礼包
   */
  async getGift() {
    const { ctx } = this;
    ctx.body = {
      message: '谢谢惠顾',
      coupon: null,
    };
  }

  /**
   * @summary 上传文件
   * @router post /v1/upload
   * @request formData file *file
   * @response 200 uploadResponse 上传的文件信息
   */
  async upload() {
    const { ctx, service } = this;

    const stream = await ctx.getFileStream();
    const id = stream.fields.id;
    const origin = ctx.origin;

    ctx.body = await service.user.uploadImg(origin, id, stream);
  }
}
module.exports = CommonController;