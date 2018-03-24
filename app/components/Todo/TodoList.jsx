import React from 'react'
import TodoListHeader from './TodoListHeader'
import TodoListItem from './TodoListItem'
import _ from 'lodash'

class TodoList extends React.Component {
  renderItems () {
    const props = _.omit(
      this.props,
      'todos'
    )

    return _.map(this.props.todos, (todo, index) => {
      return (
        <TodoListItem
          index={index}
          {...todo}
          {...props}
        />
      )
    })
  }
  render () {
    return (
      <table>
        <TodoListHeader />
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    )
  }
}

module.exports = TodoList
