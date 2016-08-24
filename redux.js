function dispatchAndLog(store,action){
	console.log('dispatching',action);
	store.dispatch(action);
	consoel.log('next state',store.getState())
}
dispatchAndLog(store,addTodo('Use Redux'))

// 日志记录，和崩溃报告属于不同的模块
function patchStoreToAddLogging(store){
	let next = store.dispatch
	store.dispatch = function dispatchAnyLog(action){
		console.log('dispatch',action)
		let result = next(action)
		console.log('next state',store.getState())
		return result
	}
}

function patchStoreToAddCrashReporting(store){
	let next = store.dispatch
	store.dispatch = function dispatchAndReportErrors(action){
		try{
			return next(action)
		}catch(err){
			console.log('捕获了一个异常',err)
			Raven.captureException(err,{
				extra:{
					action,
					state:store.getState()
				}
			})
			throw err
		}

	}
}

function logger(store){
	let next = store.dispatch
	//we do this like before
	return function dispatchAnaLog(action){
		console.log('dispatching',action)
		let result = next(action)
		console.log('next state',store,getState())
		return result
	}
}

function applyMiddlewareByMonkeypatching(store,middleware){
	middlewares =  middleware.slice()
	middlewares.reverse()
	//change dispatch() method in every middleware
	middlewares.forEach(middleware=>store.dispatch = middleware(store)
	)
}

function logger(store){
	return function wrapDispatchToAddLogging(next){
		return function dispatchingAndLog(action){
			console.log('dispatching',action)
			let result = next(action)
			console.log('next state',store.getState())
			return result;
		}
	}
}

const logger = store =>next => action => {
	let result = next(action)
	return result
}

const crashReporter = store =>next=>action {
	try{
		return next(action)
	}catch(err){
		Raven.captureException(err,{
			extra:{
				action,
				state:store.getState()
			}
		})
		throw err
	}
}

function applyMiddleware(store,middlewares){
	middlewares = middlewares.slice()
	middlewares.reverse()

	let dispatch = store.dispatch
	middlewares.forEach(middleware => dispatch = middleware(store)(dispatch)	
	)
	return Object.assign({},store,{dispatch})
}

// applyMiddleware()
import { createStore, combineReducers,applyMiddleware } from 'redux'

let createStoreWithMiddleware = applyMiddleware(logger,crashReporter)(createStore)

let todoApp = conbineReducers(reducers)
let store = createStoresWithMiddleware(todoApp)


let createStoreWithMiddleware = applyMiddleware(
	rafScheduler,
	timeoutScheduler,
	thunk,
	vanillaPromise,
	readyStatePromise,
	logger,
	crashReporter
	)(createStore)

let todoApp = combineReducers(reducers)
let store  = createStoreWithMiddleware(todoApp)


import fetch from "isomorphic-fetch"
export const REQUEST_POST = "REQUEST_POSTS"
export const SELECT_

process.stdout.write("Hello, World.");

process.stdout.write("Hello, World!")

function todoApp(state = initialState,action){
	switch(action.type){
		case SET_VISIBILITY_FILTER:
			return Object.assign({},state,{
				visibilityFilter:action.filter
			})
		default:
			return state
	}
}

return getAddedIds(state.cart)

function makeActionCreator(type,...argNames){
	return function(...args){
		let action = { type }
		argNames.forEach((args,index)=>{action[argNames[index]]=args[index]})
	}
	return action
}

const ADD_TODO = "ADD_TODO"
const EDIT_TODO = "EDIT_TODO"
const REMOVE_TODO = "REMOVE_TODO"

export const addTodo = makeActionCreator(ADD_TODO,'todo')
export const editTodo = makeActionCreator(EDIT_TODO,'id','todo')
export const removeTodo = makeActionCreator(REMOVE_TODO,'id')

import {rederToString} from 'react-dom/server'

function handleRender(req,res){
	//创建新的Redux Store是实例
	const store = createStore(counterApp);
	//把组件渲染成字符串
	const html = renderToString(
		<Provider>
			<App/>	
		</Provider>
		)
	//从store 中获取 state
	const initialState = store.getStore();
	//把渲染之后的页面内容发送给客户端
	res.send(renderFullPage(html,initialState));
}
















