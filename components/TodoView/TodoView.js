import { isToday, isTomorrow } from 'date-fns';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { 
  AddForm,
  Header,
  NoTasks,
  TodoItem,
} from '..';

import { 
  Title,
  TodoViewContainer,
  TodoViewStyles,
  TodoViewWrapper,
} from './styles';

const TodoView = ({ 
  addCompletedTodo,
  addTodo,
  completedTodos,
  removeCompletedTodo,
  removeTodo,
  todoList,
  }) => {
    todoList.sort((a, b) => a.date - b.date);

    return  <TodoViewStyles>
    <Header count={todoList.length}/>
    <TodoViewContainer>
      <TodoViewWrapper>
        {todoList.length > 0 ? <>
          {todoList.filter(item => isToday(item.date)).length > 0 && <>
            <Title>Today</Title>
            <ul>
            <ReactCSSTransitionGroup transitionName="showItem" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
              {todoList.map(item => !!isToday(item.date) && <TodoItem
                key={item.id}
                item={item}
                completedTodos={completedTodos}
                addCompletedTodo={addCompletedTodo}
                removeTodo={removeTodo}
                removeCompletedTodo={removeCompletedTodo} 
                />
              )}
            </ReactCSSTransitionGroup>
            </ul>
          </>}
          {todoList.filter(item => isTomorrow(item.date)).length > 0 && <>
            <Title>Tomorrow</Title>
            <ul>
            <ReactCSSTransitionGroup transitionName="showItem" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
              {todoList.map(item => !!isTomorrow(item.date) && <TodoItem
                key={item.id}
                item={item}
                completedTodos={completedTodos}
                addCompletedTodo={addCompletedTodo}
                removeTodo={removeTodo}
                removeCompletedTodo={removeCompletedTodo} 
                />
              )}
              </ReactCSSTransitionGroup>
            </ul> 
          </>}
          </> : <NoTasks />}
        <div>
        <AddForm 
          todoList={todoList}
          addTodo={addTodo}
        />
      </div>
      </TodoViewWrapper>
    </TodoViewContainer>
  </TodoViewStyles>
  };

export default TodoView;
