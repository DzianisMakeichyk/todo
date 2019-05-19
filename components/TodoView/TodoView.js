import React from 'react';
import { isToday, isTomorrow } from 'date-fns';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes from 'prop-types';

import AddForm from '../AddForm/AddForm';
import Header from '../Header/Header';
import NoTasks from '../NoTasks/NoTasks';
import TodoItem from '../TodoItem/TodoItem';

import {
  Title,
  TodoViewContainer,
  TodoViewStyles,
  TodoViewWrapper,
} from './styles';

const TodoView = ({
  addCompletedTodo, addTodo, completedTodos, removeCompletedTodo, removeTodo, todoList,
}) => {
  todoList.sort((a, b) => a.date - b.date);

  return (
    <TodoViewStyles>
      <Header count={todoList.length} />
      <TodoViewContainer>
        <TodoViewWrapper>
          {todoList.length > 0 ? <>
            {todoList.filter(item => isToday(item.date)).length > 0
            && <>
              <Title>Today</Title>
              <ul>
                <ReactCSSTransitionGroup transitionName="showItem" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                  {todoList.map(item => isToday(item.date) && <TodoItem
                    key={item.id}
                    item={item}
                    completedTodos={completedTodos}
                    addCompletedTodo={addCompletedTodo}
                    removeTodo={removeTodo}
                    removeCompletedTodo={removeCompletedTodo}
                  />)}
                </ReactCSSTransitionGroup>
              </ul>
              </>
            }
            {todoList.filter(item => isTomorrow(item.date)).length > 0
            && <>
              <Title>Tomorrow</Title>
              <ul>
                <ReactCSSTransitionGroup transitionName="showItem" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                  {todoList.map(item => isTomorrow(item.date) && <TodoItem
                    key={item.id}
                    item={item}
                    completedTodos={completedTodos}
                    addCompletedTodo={addCompletedTodo}
                    removeTodo={removeTodo}
                    removeCompletedTodo={removeCompletedTodo}
                  />)}
                </ReactCSSTransitionGroup>
              </ul>
            </>}
            {todoList.filter(item => !isToday(item.date) && !isTomorrow(item.date)).length > 0
            && <>
              <Title>Other</Title>
              <ul>
                {todoList.map(item => !isToday(item.date) && !isTomorrow(item.date) && <TodoItem
                  key={item.id}
                  item={item}
                  completedTodos={completedTodos}
                  addCompletedTodo={addCompletedTodo}
                  removeTodo={removeTodo}
                  removeCompletedTodo={removeCompletedTodo}
                />)}
              </ul>
              </>
            }
          </> : <NoTasks />}
          <AddForm
            todoList={todoList}
            addTodo={addTodo}
          />
        </TodoViewWrapper>
      </TodoViewContainer>
    </TodoViewStyles>);
};

TodoView.propTypes = {
  completedTodos: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
  todoList: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
  addTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  addCompletedTodo: PropTypes.func.isRequired,
  removeCompletedTodo: PropTypes.func,
};

TodoView.defaultProps = {
  removeCompletedTodo: () => {},
};

export default TodoView;
