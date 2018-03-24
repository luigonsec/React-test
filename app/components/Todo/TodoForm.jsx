import React from 'react'
import _ from 'lodash'

class TodoForm extends React.Component {
  constructor () {
    super()
    this.state = {
      error: null
    }
  }

  renderTaskSection () {
    const todo = this.props.todo
    const taskStyle = {
      color: todo.isCompleted ? 'green' : 'red',
      cursor: 'pointer'
    }
    return (
      <td style={taskStyle}>
        {todo.task}
      </td>
    )
  }

  render () {
    return (
      <form onSubmit={this.handleCreate.bind(this)}>
        <input ref={(input) => { this.inputText = input }} type='text' placeholder='Agrega una tarea' />
        <button>Enviar</button>
        {this.renderError()}
      </form>
    )
  }

  handleCreate (e) {
    e.preventDefault()
    let task = this.inputText.value
    let validateInput = this.validateInput(task)
    if (validateInput) {
      return this.setState({error: validateInput})
    }
    this.inputText.value = ''
    this.setState({error: null})
    return this.props.createTask(task)
  }

  renderError () {
    if (!this.state.error) return null
    return (
      <div style={{color: 'red'}}>
        {this.state.error}
      </div>
    )
  }

  validateInput (task) {
    if (!task) {
      return 'Please enter a task'
    } else if (_.find(this.props.todos, (todo, index) => { return todo.task === task })) {
      return 'Task already exists'
    } else {
      return null
    }
  }
}

module.exports = TodoForm
