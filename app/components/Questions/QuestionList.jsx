import React from 'react'
import Question from './Question'
import _ from 'lodash'
import {Container, Row, Col, Button, Card, CardHeader, ListGroup, ListGroupItem} from 'reactstrap'

class QuestionList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      questions: this.props.questions
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState(
      {
        questions: nextProps.questions
      }
    )
  }

  handleChange () {
    const answer = this.answer
    this.state.questions.forEach(
      function (a) {
        if (a.id === answer.id) a.isCorrect = !a.isCorrect
      }
    )
  }

  renderAnswers (answers) {
    return _.map(answers, (answer, index) => {
      const isCorrect = answer.isCorrect
      const style = {
        color: 'red'
      }
      if (isCorrect) style.color = 'green'
      return (
        <CardHeader sm={12} key={index} style={style}>
          {answer.text} <Button ref={() => { this.answer = answer }} onClick={this.handleChange.bind(this)}>Cambiar</Button>
        </CardHeader>
      )
    })
  }

  renderQuestions () {
    return _.map(this.state.questions, (question, index) => {
      return (
        <Question
          deleteQuestion={this.props.deleteQuestion.bind(this)}
          key={question.id}
          question={question}
        />
      )
    })
  }

  render () {
    return this.renderQuestions()
  }
}

module.exports = QuestionList
