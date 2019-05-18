import format from 'date-fns/format';

import { 
	Item,
	InputRadio,
	ItemIcon,
	ItemContent,
} from './styles';

import { VisuallyHidden } from '..';

import { Trash } from '../../util/icons';

const TodoItem = ({ item, addCompletedTodo, removeTodo }) => <Item color={item.tag.color}>
	<InputRadio>
		<input
			id={item.name.slice(0,8).replace(' ', '-') + '-' + item.id}
			type="radio"
			defaultChecked={item.checked}
			onClick={() => addCompletedTodo(item)}
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
		<VisuallyHidden>Remove</VisuallyHidden>
	</ItemIcon>
	</Item>

export default TodoItem;
