import isToday from 'date-fns/is_today';
import isTomorrow from 'date-fns/is_tomorrow';

import AddForm from '../AddForm/AddForm';
import TodoItem from '../TodoItem/TodoItem';

const TodoView = ({ todoList, completedTodos, addTodo, removeTodo, removeCompletedTodo, addCompletedTodo }) => <div>
    <h2 style={{display: 'inline'}}>My Todos 2</h2>
    <div>
      <AddForm todoList={todoList} addTodo={addTodo} />
    </div>
    <div>
            {console.log(!!todoList)}
    {!!todoList ? <> 
      <ul>
        <div>Today</div>
        {todoList.map(item => <>
          <div key={item.id}>
            {isToday(item.date) && <TodoItem
            item={item}
            completedTodos={completedTodos}
            addCompletedTodo={addCompletedTodo}
            removeTodo={removeTodo}
            removeCompletedTodo={removeCompletedTodo} 
            />}
          </div>
          </>
        )}
        </ul>
        <br />
        <br />
        <ul>
          <div>Tomorrow</div>
          {todoList.map(item => <>
            <div key={item.id}>
            {isTomorrow(item.date) && <TodoItem
              item={item}
              completedTodos={completedTodos}
              addCompletedTodo={addCompletedTodo}
              removeTodo={removeTodo}
              removeCompletedTodo={removeCompletedTodo} 
              />}
            </div>
            </>
          )}
        </ul> 
      </> : <h3>no todos!</h3>}
    </div>
  </div>

export default TodoView;
