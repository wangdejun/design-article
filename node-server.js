//启动一个简单的服务器
// var http = require('http');
// http.createServer(function(request,response){
// 	response.writeHead(200,{'Content-Type':'text/plain'});
// 	response.end('Hello World\n');
// }).listen(8124);

// console.log('Server running at http://127.0.0.1:8124/');

/**
 * [buf description]
 * @type {Buffer}
 */
buf = new Buffer(256);
len = buf.write('\u00bd + \u00bc = \u00be', 0);
console.log(len + " bytes: " + buf.toString('utf8', 0, len));


str = "node.js",
buf = new Buffer(str.length),
i;
for (var i = 0; i < str.length ; i += 1) {
buf[i] = str.charCodeAt(i);
}
console.log(buf);

str = '\u00bd + \u00bc = \u00be';
console.log(str + ": " + str.length + " characters, " +
Buffer.byteLength(str, 'utf8') + " bytes");

console.log(__filename + "/");
console.log(__dirname);