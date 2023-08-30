import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { deleteTodo, add } from "./todoslice";

const Todo = () => {
	const dispatch = useDispatch();
	const todos = useSelector((state) => {
		return state.todo.todos;
	});
	useEffect(() => {
		console.log(todos);
	}, [todos]);
	const deleteItem = (indexToDelete) => {
		console.log(indexToDelete);
		dispatch(deleteTodo(indexToDelete));
	};
	const addTodo = (e) => {
		e.preventDefault();
		const newTodoOb = {
			name: e.target.name.value,
			status: e.target.status.value,
		};
		dispatch(add(newTodoOb));
	};
	return (
		<div>
			<form onSubmit={addTodo}>
				<input type="text" name="name" />
				<select name="status">
					<option value="complete">Complete</option>
					<option value="incomplete">InComplete</option>
				</select>
				<button>Add</button>
			</form>
			{todos.map((todo, index) => (
				<div index={index}>
					Name:{todo.name} and Status {todo.status}
					<button
						onClick={() => {
							deleteItem(index);
						}}
					>
						Delete
					</button>
				</div>
			))}
		</div>
	);
};
export default Todo;