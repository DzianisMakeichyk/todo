import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import TodoView from '../components/TodoView/TodoView';
import { actions } from '../redux/modules/todo';

const TodoItemContainer = ({
  completedTodos, todos, addTodo, removeTodo, addCompletedTodo, removeCompletedTodo,
}) => {
  return (
    <TodoView
      todoList={todos}
      completedTodos={completedTodos}
      addTodo={addTodo}
      removeTodo={removeTodo}
      addCompletedTodo={addCompletedTodo}
      removeCompletedTodo={removeCompletedTodo}
    />
  );
};

const mapStateToProps = ({ todo: { todos, completedTodos } }) => {
  return { todos, completedTodos };
};

const {
  addCompletedTodo, addTodo, removeCompletedTodo, removeTodo,
} = actions;

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addCompletedTodo, addTodo, removeCompletedTodo, removeTodo,
  }, dispatch);
};

TodoItemContainer.propTypes = {
  completedTodos: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
  todos: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
  addTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  addCompletedTodo: PropTypes.func.isRequired,
  removeCompletedTodo: PropTypes.func,
};

TodoItemContainer.defaultProps = {
  removeCompletedTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoItemContainer);
