import { combineReducers } from "redux"; // importing combineReducers

// used the code provided from the pdf**
const initialTodoState = {
	// Content 1 will appear if the page is reefreshed incae it's deleted or it'll just appear as the 1st todo
	nextId: 2,
	data: {
		1: {
			content: "Content 1",
			completed: false, // set default content 1 to not completed
		},
	},
};

const todoReducer = (state = initialTodoState, action) => {
	switch (action.type) {
		case "ADD_TODO":
			const newId = state.nextId + 1; // 2nd input 1st input is default (Content 1)
			return {
				nextId: newId,
				data: {
					...state.data, //spread syntax
					[newId]: {
						//new property
						content: action.payload,
						completed: false,
					},
				},
			};
		case "DELETE_TODO": // delete Todo action type
			const { [action.payload]: deleteTodo, ...remainingTodo } = state.data; //object to delete
			return {
				// return
				...state,
				data: remainingTodo, //remaining items
			};
		case "EDIT_TODO": // edit todo action type
			return {
				...state,
				data: {
					...state.data,
					[action.payload.id]: {
						...state.data[action.payload.id],
						content: action.payload.content,
					},
				}, // replaces new item with old item
			};
		case "TOGGLE_TODO": // toggle todo action type
			return {
				// return
				...state,
				data: {
					...state.data,
					[action.payload]: { ...state.data[action.payload], completed: true },
				}, // set item to completed and boolean to true
			};
		default:
			return state;
	}
};

export default combineReducers({ todos: todoReducer }); // combine todos and todoReducer
