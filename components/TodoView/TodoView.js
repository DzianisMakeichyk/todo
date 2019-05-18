import isToday from 'date-fns/is_today';
import isTomorrow from 'date-fns/is_tomorrow';

import { 
  AddForm,
  TodoItem,
  Header,
  NoTasks,
} from '..';

import { 
  TodoViewWrapper,
  TodoViewContainer,
  TodoViewStyles,
  Title,
} from './styles';

const TodoView = ({ 
  addCompletedTodo,
  addTodo,
  completedTodos,
  removeCompletedTodo,
  removeTodo,
  todoList,
  }) => <TodoViewStyles>
    <Header />
    <TodoViewContainer>
      <TodoViewWrapper>
        {todoList.length > 0 ? <>
          {todoList.filter(item => isToday(item.date)).length > 0 && <>
            <Title>Today</Title>
            <ul>
              {todoList.map(item => !!isToday(item.date) && <TodoItem
                key={item.id}
                item={item}
                completedTodos={completedTodos}
                addCompletedTodo={addCompletedTodo}
                removeTodo={removeTodo}
                removeCompletedTodo={removeCompletedTodo} 
                />
              )}
            </ul>
          </>}
          {todoList.filter(item => isTomorrow(item.date)).length > 0 && <>
            <Title>Tomorrow</Title>
            <ul>
              {todoList.map(item => !!isTomorrow(item.date) && <TodoItem
                key={item.id}
                item={item}
                completedTodos={completedTodos}
                addCompletedTodo={addCompletedTodo}
                removeTodo={removeTodo}
                removeCompletedTodo={removeCompletedTodo} 
                />
              )}
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
  </TodoViewStyles>;

export default TodoView;
