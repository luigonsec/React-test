import React from 'react'
import User from './User'
import _ from 'lodash'

class ListaUsuarios extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      users: this.props.users
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      users: nextProps.users
    })
  }

  render () {
    return _.map(this.state.users, (user, index) => {
      return (
        <User
          key={user.id}
          user={user}
        />
      )
    })
  }
}

module.exports = ListaUsuarios
