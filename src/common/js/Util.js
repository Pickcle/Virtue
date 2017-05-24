/**
 * 获取TFS完整地址
 * @param {string} defaultImg 默认图片地址
 * @param {string} key        tfs Key
 * @param {int} width      		图片宽度
 * @param {int} height     		图片高度
 * @param {int} quality 			图片质量 如果不传，则返回的图片是70%质量
 * @param {boolean} isWebp 		是否返回webp图片
 */
export default {
  getTfsImg: function (defaultImg, key, width, height, quality, isWebp) {
		if (!key || key == '') {
 			return defaultImg || '';
 		}

 		// fix洗数据可能造成的问题
 		key = key.split('|')[0];

		//如果是个完整地址，直接返回
		if (/^https?:\/\/\S*/.test(key)) {
			return key;
		}

 		let url = '',//最终图片url
				imgUrl = '',//拼装tfs地址后的url
				imgKey = '',//图片key
				needTransform = false,//是否需要图片转换（尺寸缩放，质量转换）
				sizeStr = '',//图片尺寸参数
				qualityStr = '';//图片质量参数

		//2017.4.13上线后，不再依靠服务器返回的图片格式，直接取图片key丢给tfs让他们做处理
		//如果key有后缀格式，将后缀格式截取掉赋值给imgKey
		//如果key没有后缀格式，直接赋值给imgKey
		let regExp = /^(\S*(?=\.(jpeg|jpg|png|gif)$)|\S*)/ig;
		imgKey = key.match(regExp)[0];

		imgUrl = 'https://static.jk.cn/image/' + imgKey;

		//如果需要尺寸缩放
 		if (width) {
			needTransform = true;
 			if (height) {
 				sizeStr = `/rs,w_${width},h_${height}`;
 			} else {
				sizeStr = `/rs,w_${width},h_${width}`;
 			}
 		}

		//如果需要质量转换
		if (quality == 0) {
			//如果质量参数为0，则质量取原图
		} else if (!quality || quality < 0 || quality >= 100) {
			needTransform = true;
			qualityStr = `/tf,q_70`;
		} else {
			needTransform = true;
			qualityStr = `/tf,q_${quality}`;
		}

		if (needTransform) {
			//如果需要转换
			url = `${imgUrl}?img=${sizeStr}${qualityStr}`;
		} else {
			url = imgUrl;
		}
		return url;
	}
}
