import React from 'react'
import _ from 'lodash'
import {Container, Row, Col, Button, Card, CardHeader, ListGroup, ListGroupItem} from 'reactstrap'
import FontAwesome from 'react-fontawesome'

class Answer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      answer: this.props.answer
    }
  }

  handleChange () {
    this.state.answer.isCorrect = !this.state.answer.isCorrect
    this.setState({
      answer: this.state.answer
    })
  }

  handleDelete () {
    this.props.deleteAnswer(this.state.answer)
  }

  renderAnswer () {
    const isCorrect = this.state.answer.isCorrect
    const style = {
    }
    if (!isCorrect) {
      style.color = 'red'
    } else {
      style.color = 'green'
      style.fontWeight = 'bold'
    }
    return (
      <CardHeader style={style}>
        <Row>
          <Col sm={12}>
            {this.state.answer.text}
          </Col>
          <Col sm={12}>
            <Button className='float-right' size='sm' onClick={this.handleChange.bind(this)}>
              <FontAwesome name='pencil' />
            </Button>
            <Button className='float-right' size='sm' onClick={this.handleDelete.bind(this)}>
              <FontAwesome name='trash' />
            </Button>
          </Col>
        </Row>
      </CardHeader>
    )
  }

  render () {
    return this.renderAnswer()
  }
}

module.exports = Answer
