import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

import {
  InputRadio, Item, ItemContent, ItemIcon,
} from './styles';

import { Trash } from '../../util/icons';

const TodoItem = ({ item, addCompletedTodo, removeTodo }) => <Item color={item.tag.color}>
  <InputRadio>
    <label htmlFor={`${item.name.slice(0, 8).replace(' ', '-')}-${item.id}`}>
      <input
        id={`${item.name.slice(0, 8).replace(' ', '-')}-${item.id}`}
        type="checkbox"
        defaultChecked={item.checked}
        onChange={() => addCompletedTodo(item)}
      />
    </label>
  </InputRadio>
  <time>{format(item.date, 'hh:mmaa').replace('.', '')}</time>
  <ItemContent isChecked={item.checked}>
    <span>
      {item.name}
    </span>
  </ItemContent>
  <ItemIcon onClick={() => removeTodo(item.id)}>
    <Trash />
    <span>Remove</span>
  </ItemIcon>
</Item>;

TodoItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    checked: PropTypes.bool,
    date: PropTypes.string,
  }).isRequired,
  addCompletedTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default TodoItem;
