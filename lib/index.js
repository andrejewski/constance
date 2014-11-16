
function constance(prefix, obj, postfix) {
	if(arguments.length === 1) {
		obj = prefix;
		prefix = postfix = "";
	} else if(postfix == void 0) {
		if(typeof prefix === 'object') {
			postfix = obj;
			obj = prefix;
			prefix = "";
		} else {
			postfix = "";
		}
	}

	if(Array.isArray(obj)) {
		obj = toObject(obj);
	}

	var dest = {};
	for(var key in obj) {
		if(obj.hasOwnProperty(key)) {
			dest[key] = prefix+key+postfix;
		}
	}
	return dest;
}

function toObject(arr) {
	var obj = {};
	for(var key in arr) {
		if(arr.hasOwnProperty(key)) {
			obj[arr[key]] = null;
		}
	}
	return obj;
}

module.exports = constance;
