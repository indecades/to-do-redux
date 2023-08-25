export const addTodo = (content) => {
	return {
		type: "ADD_TODO",
		payload: content,
	};
};

export const deleteTodo = (id) => {
	return {
		type: "DELETE_TODO",
		payload: id,
	};
};

export const editTodo = (content) => {
	return {
		type: "EDIT_TODO",
		payload: content,
	};
};

export const toggleTodo = (id) => {
	return {
		type: "TOGGLE_TODO",
		payload: id,
	};
};
