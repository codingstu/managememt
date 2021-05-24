module.exports = {
    publicPath: './',// <----这里就是会修改webpack的outPath.publicPath
    devServer: {
		proxy: {
		  '/api': {
			target: 'https://api.apishop.net/common/postcode/getPostCodeByAddr',
			changeOrigin: true,
			pathRewrite: {
			  '^/api': ''
			}
		  }
		}
	}
   }