window.onload = function () {
	var arrApp = Array.from(document.getElementsByTagName('*')).filter(ele=>ele.getAttribute('ng-app')!=undefined);
	//处理ng-app
	arrApp.forEach(app=>{
		function findDerective(directive) {
			let arr = [];
			var arrApp = Array.from(app.getElementsByTagName('*')).forEach(ele=>{
				let str = ele.getAttribute(directive);
				if(str){
					//如果键和值相等,就可以省略一个---ES6
					models.push({name:str,ele});
				}
			})
		}


		let $scope = {};
		//找到所有的ng-model
		let models = findDerective('ng-model')
		//数据===>HTML
		function apply() {
			for(let name in $scope){
				models.forEach(json=>{
					if(json.name==name){
						json.ele.value = $scope[name];
					}
				})
			}
			//只要数据有变化就调用binds
			binds.forEach(json=>{
				json.ele.innerHTML = json.name;
			})
		}

		//html ===>数据
		models.forEach(json=>{
			json.ele.oninput = function(){
				$scope[json.model] = this.value;
				apply();
			}
		})

		//ng-bind

		let binds = findDerective('ng-bind');

	})



}