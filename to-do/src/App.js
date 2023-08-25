import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, editTodo, deleteTodo } from "./store/actions";
import "./css/todo.css";
function App() {
	const todos = useSelector((state) => state.todos.data);
	const dispatch = useDispatch();
	const handleCompleted = (id) => {
		dispatch(toggleTodo(id)); // toggleTodo action typee will run using the items id
	};
	const handleDelete = (id) => {
		dispatch(deleteTodo(id)); // delete id of the item to remove it
	};
	const handleEdit = (id) => {
		const editedTodo = prompt("Edit the todo"); // asks user to what they want to change the item
		if (editedTodo !== "") {
			// if editedTodo is not empty
			dispatch(editTodo({ id, content: editedTodo })); // replace the item with the new content added by the user in the prompt
		}
	};
	const add = (e) => {
		e.preventDefault(); //prevent page from reloading **
		const content = e.target.todo.value;
		if (content.trim() !== "") {
			// check that user gives input //trim removes the white space
			dispatch(addTodo(content));
			e.target.todo.value = ""; //clears input
		}
	};
	return (
		// onsubmit the add function will run
		<div className="App">
			<h1 className="heading">To-do</h1>
			<form
				onSubmit={add}
				className="form"
			>
				<input
					placeholder="add a task"
					name="todo"
				/>
				<button type="submit">Add</button>
			</form>
			<ul>
				{Object.keys(todos).map((id) => (
					//removes error all items of map should have a unique key value **
					<li key={id}>
						{todos[id].content}
						<button onClick={() => handleEdit(id, todos[id].content)}>
							Edit
						</button>
						<button onClick={() => handleDelete(id)}>Delete</button>
						{!todos[id].completed && (
							<button onClick={() => handleCompleted(id)}>Completed</button>
						)}
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;
