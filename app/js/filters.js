// paging用来对前端数据进行分页
mymodule.filter('paging', function() {
	return function(items, index, pageSize) {
		if (!items) return [];
		var offset = (index - 1) * pageSize;
		return items.slice(offset, offset + pageSize);
	};
});
// size用来在页面中获取过滤后的数组长度
mymodule.filter('sizing', function() {
	return function(items) {
		if (!items) return 0;
		return items.length || 0;
	}
});
// orderClass用来生成排序图标
mymodule.filter('orderClass', function() {
	return function(direction) {
		if (direction == -1) {
			return "glyphicon-chevron-down";
		} else {
			return "glyphicon-chevron-up";
		}
	}
})