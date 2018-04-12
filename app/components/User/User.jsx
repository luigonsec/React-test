import React from 'react'
// import _ from 'lodash'

class User extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user: this.props.user
    }
  }

  render () {
    return (
      <div>
        { this.state.user.id }
      </div>
    )
  }
}

module.exports = User
