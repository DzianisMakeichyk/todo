import { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TodoView from '../components/TodoView/TodoView';
import { actions } from '../redux/modules/todo';

const { addTodo, removeTodo, addCompletedTodo, removeCompletedTodo } = actions;

class TodoItemContainer extends Component {
	render () {
		const { todos, completedTodos, addTodo, removeTodo, addCompletedTodo, removeCompletedTodo } = this.props;

		return (
			<>
				<TodoView 
					todoList={todos}
					completedTodos={completedTodos}
					addTodo={addTodo} 
					removeTodo={removeTodo} 
					addCompletedTodo={addCompletedTodo}
					removeCompletedTodo={removeCompletedTodo}
				/>
			</>
		)
	}
}

const mapStateToProps = ({todo: { todos, completedTodos }}) => {
	return { 
		todos,
		completedTodos
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		addTodo,
		removeTodo,
		addCompletedTodo,
		removeCompletedTodo,
	}, dispatch)
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(TodoItemContainer);
