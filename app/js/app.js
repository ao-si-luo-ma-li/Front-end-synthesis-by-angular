"use strict";

//声明了依赖关系
var mymodule = angular.module('ngshowCaseApp', ['ui.bootstrap']);
mymodule.controller('table-ctrl', function($scope) {
	var vm = $scope.vm = {};
	//分页设置
	//每页显示条数，及当前第几页
	vm.page = {
		size: 10,
		index: 1
	};

	vm.sort = {
		// 代表主关键字
		column: 'id',
		// 排序方向，dir
		direction: -1,
		// column 表示以哪一列作为排序的主关键字
		toggle: function(column) {
			// 表示点击的是最后一列详情，该列不能进行排序，直接结束
			if (column.sortable === false) {
				return;
			}

			// 如果当前点击的是同一个关键字，则排序方向颠倒
			if (this.column === column.name) {
				this.direction = -this.direction || -1;
			} else {
				// 否则更换主关键字，并重新调整方向
				this.column = column.name;
				this.direction = -1;
			}
		}
	};

	//构建数据模型
	vm.columns = [{
		label: 'ID',
		name: 'id',
		type: 'string'
	}, {
		label: '姓名',
		name: 'name',
		type: 'string'
	}, {
		label: '粉丝数',
		name: 'followers',
		type: 'number'
	}, {
		label: '收入',
		name: 'income',
		type: 'currency'
	}, {
		// 代表最后一列，用于显示详情的一列
		label: '',
		name: 'detail',
		sortable: false
	}];


	vm.items = [];
	//moment.js是处理时间的插件
	//这里是获取年龄的操作
	vm.age = function(birthday) {
		return moment().diff(birthday, 'years');
	};

	//生成模拟数据
	var MAX_NUM = 50;
	//生成min-max之间的随机数
	function rand(min, max) {
		return Math.floor((max - min) * Math.random()) + min;
	}

	for (var i = 0; i < MAX_NUM; i++) {
		var nameId = rand(0, MAX_NUM);
		vm.items.push({
			id: i + 1,
			name: 'Name' + nameId,
			followers: rand(0, Math.pow(1000, 3)),
			//subtract() 获取当前天数向前推算x天的时间
			birthday: moment().subtract('day', rand(365, 365 * 50)).toDate(),
			income: rand(1000, Math.pow(1000, 2))
		});
	}

})