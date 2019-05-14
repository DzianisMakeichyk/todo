import { Component } from 'react';
import DatePicker from 'react-datepicker';

import './styles.js';
import 'react-datepicker/dist/react-datepicker.css';

const TAGS = ['Personal', 'Work', 'Meeting', 'Study', 'Shopping'];

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '', 
      tag: '',
      date: '',
    }
  }

  handleChange = e => {
    if (e.target) {
      const { name, type, value } = e.target;
      const val = type === 'number' ? parseFloat(value) : value;

      this.setState({ [name]: val });
    }
  };

  addItem = e => {
    e.preventDefault();
    this.props.addTodo(this.state);
  };

  render () {
    return (
      <form onSubmit={this.addItem}>
        <div>
          <input onChange={this.handleChange} type='text' placeholder='Item to add' name="name" ref='Name' />
        </div>
        <div>
          <select
            name="tags"
            required
            onChange={this.handleChange}
            style={{ width: '100%' }}
          >
            {TAGS.map(tag =>
              <option value={tag.toString()} key={tag}>
                <span>{tag}</span>
              </option>
            )}
          </select>
        <div>
        <DatePicker
          selected={this.state.date}
          onChange={date => this.setState({ date })}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="MMMM d, yyyy h:mm aa"
          timeCaption="time"
        />
        </div>
      </div>
      <button type='submit'>Add Item</button>
    </form>
    )
  }
}

export default AddForm;