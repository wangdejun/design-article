let myarr = new Array();
console.log(myarr);
myarr[0]={name1:"wangdejun"};
console.log(myarr);
myarr[1]={name2:"wangdejunjun"};
console.log(myarr);
/**
 * map() -> i -> item
 */
console.log(myarr.map((item,i)=>{
	for(prop in item){
		//通过数组中对象的key取出来value;
		return "nihao " + item[prop] + "  " +"index:"+i;
	}
}));

console.log(myarr);