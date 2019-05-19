import React from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

import {
  InputRadio, Item, ItemContent, ItemIcon,
} from './styles';

import { Trash } from '../../util/icons';

const TodoItem = ({ item, addCompletedTodo, removeTodo }) => {
  const handleChecked = () => {
    const element = item;
    element.checked = !element.checked;
    addCompletedTodo(element);
  };

  return (
    <Item color={item.tag.color} isChecked={item.checked} tabIndex={0}>
      <InputRadio>
        <input
          id={`${item.name.slice(0, 8).replace(' ', '-')}-${item.id}`}
          type="checkbox"
          defaultChecked={item.checked}
          onChange={() => handleChecked()}
        />
        <label htmlFor={`${item.name.slice(0, 8).replace(' ', '-')}-${item.id}`}></label>
      </InputRadio>
      <time>{format(item.date, 'hh:mmaa').replace('.', '')}</time>
      <ItemContent>
        <span>
          {item.name}
        </span>
      </ItemContent>
      <ItemIcon onClick={() => removeTodo(item.id)} tabIndex={0}>
        <Trash />
        <span>Remove</span>
      </ItemIcon>
    </Item>
  )
};

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
