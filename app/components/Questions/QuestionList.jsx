import React from 'react'
import _ from 'lodash'
import {Container, Row, Col} from 'reactstrap'

class QuestionList extends React.Component {
  renderAnswers (answers) {
    return _.map(answers, (answer, index) => {
      return (
        <Col key={index}>
          {answer.text}
        </Col>
      )
    })
  }

  renderQuestions () {
    return _.map(this.props.questions, (question, index) => {
      return (
        <Col key={index}>
          {question.text}
          {this.renderAnswers(question.answers)}
        </Col>
      )
    })
  }

  render () {
    return (
      <div>
        {this.renderQuestions()}
      </div>
    )
  }
}

module.exports = QuestionList
