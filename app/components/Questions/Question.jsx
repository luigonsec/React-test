import React from 'react'
import _ from 'lodash'
import {Container, Row, Col, Button, Card, CardHeader, ListGroup, ListGroupItem} from 'reactstrap'
import Answer from './Answer'
import FontAwesome from 'react-fontawesome'

class Question extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      question: this.props.question
    }
  }

  handleDelete () {
    this.props.deleteQuestion(this.state.question)
  }

  deleteAnswer (answer) {
    const answers = this.state.question.answers.filter(
      function (a) {
        return a.id !== answer.id
      }
    )
    this.state.question.answers = answers
    this.setState(
      {
        question: this.state.question
      }
    )
  }

  renderAnswers () {
    return _.map(this.state.question.answers, (answer, index) => {
      return (
        <Answer
          deleteAnswer={this.deleteAnswer.bind(this)}
          key={answer.id}
          answer={answer}
        />
      )
    })
  }

  renderQuestion () {
    return (
      <Card>
        <ListGroup>
          <CardHeader>
            <Row>
              <Col sm={9}>
                <b>{this.state.question.id} {this.state.question.text}</b>
              </Col>
              <Col sm={3}>
                <Button className='float-right' size='sm' onClick={this.handleDelete.bind(this)}>
                  <FontAwesome name='trash' />
                </Button>
              </Col>
            </Row>
          </CardHeader>
          {this.renderAnswers()}
        </ListGroup>
      </Card>
    )
  }

  render () {
    return this.renderQuestion()
  }
}

module.exports = Question
