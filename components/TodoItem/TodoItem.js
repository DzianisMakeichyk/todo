import { format } from 'date-fns';

import { 
	InputRadio,
	Item,
	ItemContent,
	ItemIcon,
} from './styles';

import { Trash } from '../../util/icons';

const TodoItem = ({ item, addCompletedTodo, removeTodo, }) => <Item color={item.tag.color}>
	<InputRadio>
		<input
			id={item.name.slice(0, 8).replace(' ', '-') + '-' + item.id}
			type="checkbox"
			defaultChecked={item.checked}
			onChange={() => addCompletedTodo(item)}
		/>
		<label htmlFor={item.name.slice(0,8).replace(' ', '-') + '-' + item.id}></label>
	</InputRadio>
	<time>{format(item.date, "hh:mmaa").replace('.', '')}</time>
	<ItemContent isChecked={item.checked}>
		<span>
			{item.name}
		</span>
	</ItemContent>
	<ItemIcon onClick={() => removeTodo(item.id)}>
		<Trash/>
		<span>Remove</span>
	</ItemIcon>
	</Item>

export default TodoItem;
