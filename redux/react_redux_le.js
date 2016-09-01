let todos = [
	{index:1,complete:true},
	{index:2,complete:false},
	{index:3,complete:true},
	{index:4,complete:true},
	{index:5,complete:false},
	{index:6,complete:true},
];

const completeCount = todos.reduce((count,todo)=>
	todo.complete ? count+1: count,1000
)

console.log(completeCount);

const state = todos.filter(todo =>
		todo.index >1 
	)

console.log(state.length);

const mapstate = todos.map(todo=>
	todo.index >=3?
		Object.assign({},todo,{todo:"wangdejun"}):
		todo
	)

console.log(mapstate);

console.log([].length>0)
