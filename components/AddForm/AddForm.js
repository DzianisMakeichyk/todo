import DatePicker from 'react-datepicker';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

import {
  AddFormButton,
  AddFormWrapper,
  FormStyles,
  AddFormHeader,
  FormInput,
  FormTags,
  FormTag,
  FormDataPicker,
  SubmitButton,
  SubmitButtonWrapper,
  DataPickerHeader,
} from './styles';

import { Button } from '../../util/icons';

import TAGS from '../../util/constant/dates';

import 'react-datepicker/dist/react-datepicker.css';

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      isDataPickerOpen: false,
      isOpenModal: false,
      name: '',
      tag: [],
    };
  }

  handleChange = e => {
    if (e.target) {
      const { name, type, value } = e.target;
      const val = type === 'number' ? parseFloat(value) : value;

      this.setState({ [name]: val });
    }
  };

  handleChangeTags = e => {
    if (e.target) {
      const { value } = e.target;
      const tag = TAGS[value - 1];

      this.setState({ tag });
    }
  };

  addItem = e => {
    e.preventDefault();

    const { addTodo } = this.props;

    addTodo(this.state);

    this.setState({
      date: '',
      name: '',
      tag: [],
    });
  };

  render () {
    const {
      date,
      isDataPickerOpen,
      isOpenModal,
      name,
      tag,
    } = this.state;

    return <AddFormWrapper isOpenModal={isOpenModal}>
      <AddFormButton onClick={() => this.setState({ isOpenModal: !isOpenModal })}>
        <Button />
      </AddFormButton>
      <CSSTransition
        classNames="showUp"
        in={isOpenModal}
        timeout={300}
        unmountOnExit
      >
        <FormStyles onSubmit={this.addItem}>
          <AddFormHeader>
            Add new task
          </AddFormHeader>
          <FormInput>
            <input
              id="AddTask"
              name="name"
              onChange={this.handleChange}
              required
              type="text"
              value={name}
            />
            <label htmlFor="AddTask">Add new task</label>
          </FormInput>

          <FormTags
            name="tags"
            required
            id="SelectCategory"
          >
            {TAGS.map(item => <FormTag
              color={item.color}
              isChecked={tag.id === item.id}
              key={item.id}
            >
              <input
                defaultChecked={tag.id === item.id}
                id={item.name.toLocaleLowerCase().replace(' ', '-') + item.id}
                name="tagGroup"
                onChange={this.handleChangeTags}
                type="radio"
                value={item.id}
              />
              <label htmlFor={`${item.name.toLocaleLowerCase().replace(' ', '-')}${item.id}`}>{item.name}</label>
            </FormTag>)}
          </FormTags>
          <FormDataPicker>
            <DataPickerHeader>
              <button
                type="button"
                tabIndex={0}
                onClick={() => this.setState({ isDataPickerOpen: !isDataPickerOpen })}
                onKeyPress={() => this.setState({ isDataPickerOpen: !isDataPickerOpen })}
              >
                Choose date
              </button>
            </DataPickerHeader>
            <DatePicker
              dateFormat="MMMM d, yyyy HH:mm"
              onChange={stage => this.setState({ date: stage })}
              onClickOutside={() => this.setState({ isDataPickerOpen: !isDataPickerOpen })}
              open={isDataPickerOpen}
              selected={date}
              showTimeSelect
              tabIndex={-1}
              timeCaption="time"
              timeIntervals={15}
            />
          </FormDataPicker>
          <SubmitButtonWrapper>
            <SubmitButton type="submit">
              Add Item
            </SubmitButton>
          </SubmitButtonWrapper>
        </FormStyles>
      </CSSTransition>
    </AddFormWrapper>;
  }
}

AddForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddForm;
