let commode = angular.module('common',[])

commode.config(function ($httpProvider) {
	$httpProvider.defaults.transformRequest = function (obj) {
		let arr = [];
		for(let name in obj){
			arr.push(`${encodeURIComponent(name)}=${encodeURIComponent(obj[name])}`)
		}
		return arr.join('&')
	}
	$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
})

//假如要是使用的话，就直接把common这个模块依赖加进去了
