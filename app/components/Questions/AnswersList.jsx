import React from 'react'
import AnswerItem from './AnswerItem'
import _ from 'lodash'

class AnswersList extends React.Component {
  addAnswer (a) {
    this.state.answers.push(a)
    this.setState(
      {
        answers: this.state.answers
      }
    )
  }

  renderAnswers () {
    return _.map(this.props.answers, (answer, index) => {
      return (
        <AnswerItem
          key={index}
          answer={answer}
          addAnswer={this.addAnswer.bind(this)}
        />
      )
    })
  }

  render () {
    return this.renderAnswers()
  }
}

module.exports = AnswersList
