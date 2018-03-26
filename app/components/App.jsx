import React from 'react'
import {questions} from '../questions.json'
import QuestionList from './Questions/QuestionList'
import QuestionForm from './Questions/QuestionForm'
import _ from 'lodash'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      questions : questions
    }
  }

  render () {
    return (
      <div>
        <h1>Cuestionarios</h1>
        <QuestionForm
          questions = {this.state.questions}
          createQuestion={this.createQuestion.bind(this)}
        />
        <QuestionList
          questions={this.state.questions}
        />
      </div>
    )
  }


  createQuestion (q,a) {
    this.state.questions.push(
      {
        text: q,
        answers: a
      }
    )
    this.setState({questions : this.state.questions})
    console.log(q);
  }

}

module.exports = App
