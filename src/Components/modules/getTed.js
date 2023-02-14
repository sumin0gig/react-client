//액션타입
const ADD_DATA = "ADD_DATA";
//액션생성함수
export const addData = (data) => ({
	type:ADD_DATA,
	data: data
})
//초기상태
const initialState = [];
export default function getTed(state=initialState,action){
	switch(action.type){
		case ADD_DATA:
			return [
				...state,
				action.data
			]
		default:
			return state;
	}
}
