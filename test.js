
var compose = (f, g) => (x => f(g(x)));

var toUpperCase = word => word.toUpperCase();
var split = x => (str => str.split(x));

var f = compose(split(' '),toUpperCase);


var m = f("abcd efgh")
console.log(m);