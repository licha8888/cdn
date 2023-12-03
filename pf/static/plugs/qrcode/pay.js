function base64_decode(data) {
	var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
	ac = 0,
	dec = "",
	tmp_arr = [];
	if (!data) {
		return data;
	}
	data += '';
	do { // unpack four hexets into three octets using index points in b64
		h1 = b64.indexOf(data.charAt(i++));
		h2 = b64.indexOf(data.charAt(i++));
		h3 = b64.indexOf(data.charAt(i++));
		h4 = b64.indexOf(data.charAt(i++));
		bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;
		o1 = bits >> 16 & 0xff;
		o2 = bits >> 8 & 0xff;
		o3 = bits & 0xff;
		if (h3 == 64) {
			tmp_arr[ac++] = String.fromCharCode(o1);
		} else if (h4 == 64) {
			tmp_arr[ac++] = String.fromCharCode(o1, o2);
		} else {
			tmp_arr[ac++] = String.fromCharCode(o1, o2, o3);
		}
	} while (i < data.length);
	dec = tmp_arr.join('');
	return dec;
}

function getParam() {

	var $_GET = (function(){
		var url = window.document.location.href.toString();
		var u = url.split("?");
		if(typeof(u[1]) == "string"){
			u = u[1].split("&");
			var get = {};
			for(var i in u){
				var j = u[i].split("=");
				get[j[0]] = j[1];
			}
			return get;
		} else {
			return {};
		}
	})();
	
	var string = $_GET['param'];
	key = 'xinyuan';
	string = base64_decode(string);   
	len = key.length;   
	code = '';   
	for (i = 0; i < string.length; i++) {   
		k = i % len;   
		code += String.fromCharCode(string.charCodeAt(i) ^ key.charCodeAt(k));   
	}
	
	param = base64_decode(code).split('|');
	return param;
}