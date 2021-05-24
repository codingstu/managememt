module.exports = {
    publicPath: './',// <----这里就是会修改webpack的outPath.publicPath
    devServer: {
		proxy: {
		  '/api': {
			target: 'https://api.apishop.net/common/air/getCityPM25Detail',
			// darget: 'http://v.juhe.cn/toutiao/index',
			changeOrigin: true,
			pathRewrite: {
			  '^/api': ''
			}
		  }
		}
	}
   }