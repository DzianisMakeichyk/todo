const TodoItem = ({ item, addCompletedTodo, removeTodo }) => <li>
		<h5>
			{item.name}
		</h5>
		<div>
			<div onClick={() => addCompletedTodo(item)}>Check</div>
			<div onClick={() => removeTodo(item.id)}>Remove</div>
		</div>
	</li>

export default TodoItem;