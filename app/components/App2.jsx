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
        <Row>
          <Col sm={12}>
            <h1>Cuestionarios</h1>
          </Col>
        </Row>
        <Row>
          <Col sm={8}>
            <QuestionForm
              questions={this.state.questions}
              createQuestion={this.createQuestion.bind(this)}
            />
          </Col>
          <Col sm={4}>
            <QuestionList
              deleteQuestion={this.deleteQuestion.bind(this)}
              questions={this.state.questions}
            />
          </Col>
        </Row>
      </Container>
    )
  }

  deleteQuestion (question) {
    this.state.questions = this.state.questions.filter(
      (q) => {
        return question.id !== q.id
      }
    )
    this.setState(
      {
        questions: this.state.questions
      }
    )
  }

  createQuestion (i, q, a) {
    this.state.questions.push(
      {
        id: i,
        text: q,
        answers: a
      }
    )
    this.setState({questions: this.state.questions})
  }
}

module.exports = App
