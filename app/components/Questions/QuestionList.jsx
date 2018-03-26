import React from 'react'
import _ from 'lodash'

class QuestionList extends React.Component {

  renderAnswers(answers){
    return _.map(answers, (answer, index) =>
      {
        return (
          <div key={index}>
            {answer.text}
          </div>
        )
      }
    )
  }

  renderQuestions(){
    return _.map(this.props.questions, (question) => {
      return (
        <div>
          {question.text}
          {this.renderAnswers(question.answers)}
        </div>
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
