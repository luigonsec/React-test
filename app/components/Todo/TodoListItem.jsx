import React from 'react'

class TodoListItem extends React.Component {
  constructor () {
    super()
    this.state = {
      isEditing: false
    }
  }

  onToogleEditing () {
    if (!this.state.isEditing) this.props.setTaskComplete(this.props.task, false)
    this.setState({isEditing: !this.state.isEditing})
  }

  renderTaskSection () {
    const {task, isCompleted} = this.props
    const taskStyle = {
      color: isCompleted ? 'green' : 'red',
      cursor: 'pointer'
    }

    if (this.state.isEditing) {
      return (
        <td style={taskStyle}>
          <input
            ref={(input) => { this.textInput = input }}
            type='text'
            defaultValue={task} />
        </td>
      )
    }

    return (
      <td style={taskStyle}>
        {task}
      </td>
    )
  }
  renderActionSection () {
    const textButton = this.state.isEditing ? 'Cancel' : 'Edit'
    return (
      <td>
        <form onSubmit={this.onSaveClick.bind(this)}>
          <button type='submit' onClick={this.saveTask}>
            Save
          </button>
          <button type='button' onClick={this.onToogleEditing.bind(this)}>
            {textButton}
          </button>
        </form>
      </td>
    )
  }

  render () {
    return (
      <tr key={this.props.index}>
        { this.renderTaskSection() }
        { this.renderActionSection() }
      </tr>
    )
  }

  onSaveClick (e) {
    e.preventDefault()
    const task = this.props.task
    this.props.setTaskComplete(task, true)
    if (this.state.isEditing) {
      this.props.saveTask(task, this.textInput.value)
    }
    this.setState({isEditing: false})
  }
}

module.exports = TodoListItem
