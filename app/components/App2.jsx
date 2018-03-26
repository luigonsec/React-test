import React from 'react'
import {todos} from '../todos.json'
import TodoList from './Todo/TodoList'
import TodoForm from './Todo/TodoForm'
import _ from 'lodash'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      todos: todos
    }
  }

  render () {
    return (
      <div>
        <h1>React Todo</h1>
        <TodoForm
          todos={this.state.todos}
          createTask={this.createTask.bind(this)}
        />
        <TodoList
          todos={this.state.todos}
          toggleTask={this.toggleTask.bind(this)}
          setTaskComplete={this.setTaskComplete.bind(this)}
          saveTask={this.saveTask.bind(this)}
          deleteTask={this.deleteTask.bind(this)}
        />
      </div>
    )
  }

  createTask (task) {
    this.state.todos.push({
      task,
      isCompleted: false
    })
    this.setState({
      todos: this.state.todos
    })
  }

  setTaskComplete (task, bool) {
    const foundTodo = _.find(
      this.state.todos,
      (todo, index) => todo.task === task
    )
    foundTodo.isCompleted = bool
    this.setState({
      todos: this.state.todos
    })
  }

  toggleTask (task) {
    const foundTodo = _.find(
      this.state.todos,
      (todo, index) => todo.task === task
    )
    foundTodo.isCompleted = !foundTodo.isCompleted
    this.setState({
      todos: this.state.todos
    })
  }

  saveTask (oldTask, newTask) {
    const foundTodo = _.find(
      this.state.todos,
      (todo, index) => todo.task === oldTask
    )
    foundTodo.task = newTask
    this.setState({
      todos: this.state.todos
    })
  }

  deleteTask (task) {

  }
}

module.exports = App
