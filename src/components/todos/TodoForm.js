import { Component } from 'react';

class TodoForm extends Component {
  state = { title: '', complete: false }

  // save the user input into the state
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addTodo(this.state)
    this.setState({ title: '', complete: false })
  }

  render() {
    const { title } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="title"
          value={title}
          onChange={this.handleChange}

          required
          placeholder="Add item"
        />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default TodoForm;