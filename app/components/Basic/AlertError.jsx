import React from 'react'
import {Alert} from 'reactstrap'

class AlertError extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      error: this.props.error
    }
  }
  componentWillReceiveProps (nextProps) {
    this.setState(
      {
        error: nextProps.error
      }
    )
  }

  render () {
    if (!this.state.error) return (null)
    return (
      <Alert>
        {this.state.error}
      </Alert>
    )
  }
}

module.exports = AlertError
