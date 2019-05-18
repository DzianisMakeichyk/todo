import { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TodoView from '../components/TodoView/TodoView';
import { actions } from '../redux/modules/todo';

const { 
	addCompletedTodo,
	addTodo,
	removeCompletedTodo,
	removeTodo,
} = actions;

class TodoItemContainer extends Component {
	render () {
		const {
			addCompletedTodo,
			addTodo,
			completedTodos,
			removeCompletedTodo,
			removeTodo,
			todos,
		} = this.props;

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
		addCompletedTodo,
		addTodo,
		removeCompletedTodo,
		removeTodo,
	}, dispatch)
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(TodoItemContainer);

