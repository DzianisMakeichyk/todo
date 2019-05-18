import React, { Component } from 'react';
import DatePicker from 'react-datepicker';

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

import 'react-datepicker/dist/react-datepicker.css';

import { Button } from '../../util/icons';

import { TAGS } from '../../util/constant/dates';

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '', 
      tag: [],
      date: '',
      isOpenModal: false,
      isDataPickerOpen: false,
    }
  }

  handleChange = e => {
    if (e.target) {
      const { name, type, value } = e.target;
      console.log(value)
      const val = type === 'number' ? parseFloat(value) : value;

      this.setState({ [name]: val });
    }
  };

  handleChangeTags = e => {
    if (e.target) {
      const { value } = e.target;
      const tag = TAGS[value - 1];

      console.log(tag)

      this.setState({ tag });
    }
  };

  addItem = e => {
    e.preventDefault();
    this.props.addTodo(this.state);
  };

  render () {
    const { date, isOpenModal, tag, isDataPickerOpen } = this.state;

    return <AddFormWrapper isOpenModal={isOpenModal}>
      <AddFormButton onClick={() => this.setState({ isOpenModal: !isOpenModal })}>
        <Button />
      </AddFormButton>
      <FormStyles onSubmit={this.addItem}>
        <AddFormHeader>
          Add new task
        </AddFormHeader>
        <FormInput>
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            id="AddTask" />
          <label htmlFor="AddTask">Add new task</label>
        </FormInput>

        <FormTags
          name="tags"
          required
          id="SelectCategory"
        >
          {TAGS.map(item => <FormTag 
            key={item.id}
            color={item.color} 
            isChecked={tag.id === item.id}
            >
            <input
              type="radio"
              value={item.id}
              onChange={this.handleChangeTags}
              id={item.name.toLocaleLowerCase().replace(' ', '-') + item.id}
              name="tagGroup" 
              defaultChecked={tag.id === item.id}
            />
            <label htmlFor={item.name.toLocaleLowerCase().replace(' ', '-') + item.id}>{item.name}</label>
          </FormTag>)}
        </FormTags>
        <FormDataPicker>
          <DataPickerHeader>
            <p tabIndex={0} onClick={() => this.setState({ isDataPickerOpen: !isDataPickerOpen })}>Choose date</p>
          </DataPickerHeader>
          <DatePicker
            tabIndex={-1}
            open={isDataPickerOpen}
            selected={date}
            onChange={date => this.setState({ date })}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="MMMM d, yyyy h:mm aa"
            timeCaption="time"
          />
        </FormDataPicker>
        <SubmitButtonWrapper>
          <SubmitButton type='submit'>
            Add Item
          </SubmitButton>
        </SubmitButtonWrapper>
      </FormStyles>
    </AddFormWrapper>
  }
}

export default AddForm;