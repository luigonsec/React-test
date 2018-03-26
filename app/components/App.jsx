import React from 'react'
import {questions} from '../questions.json'
import QuestionList from './Questions/QuestionList'
import QuestionForm from './Questions/QuestionForm'
import {Container, Row, Col} from 'reactstrap'
// import _ from 'lodash'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      questions: questions
    }
  }

  render () {
    return (
      <Container>
        <h1>Cuestionarios</h1>
        <QuestionForm
          questions={this.state.questions}
          createQuestion={this.createQuestion.bind(this)}
        />
        <QuestionList
          questions={this.state.questions}
        />
      </Container>
    )
  }

  createQuestion (q, a) {
    this.state.questions.push(
      {
        text: q,
        answers: a
      }
    )
    debugger;
    this.setState({questions: this.state.questions})
  }
}

module.exports = App
