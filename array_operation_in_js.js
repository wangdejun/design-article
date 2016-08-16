let myarr = new Array();
console.log(myarr);
myarr[0]={name1:[1,2,3,4,5,6,7]};
console.log(myarr);
myarr[1]={name2:[8,9,10,11,12,13,14]};
console.log(myarr);
myarr[1]={name2:[8,9,10,11,12,13,14]};
console.log(myarr);


myarr={
	name1:[1,2,3,4,5,6,7],
	name2:[8,9,10,11,12,13,14],
	name2:[8,9,10,11,12,13,14],
}
/**
 * map() -> i -> item
 */
myarr.map((item,i)=>{
	for(prop in item){
		//通过数组中对象的key取出来value,value值是一个数组;
		console.log(prop);
		item[prop].map((item1,j)=>{
			//对小数组进行map运算，返回数组中的每一个值
			console.log(item1);
		});
	}
});