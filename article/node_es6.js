var i = 0;
var start = +new Date(),
    duration;
 
function A(){
    this.name = '小强';
}
A.prototype.getName = function() {
    return this.name;
};
 
while(i++ < 100000){
    var a = new A();
    a.getName();
}
 
duration = +new Date() - start;
console.log(duration);
 