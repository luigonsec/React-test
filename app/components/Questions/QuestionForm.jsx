import React from 'react'
// import _ from 'lodash'
import AnswersListForm from './AnswersListForm'
import AlertError from './../Basic/AlertError'
import {Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import FontAwesome from 'react-fontawesome'

class QuestionForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      questionsCreated: this.props.questions.length,
      text: '',
      error: null,
      answers: []
    }
  }

  handleNameChange (event) {
    const target = event.target
    const value = target.value
    const name = target.name
    const state = {}
    state[name] = value
    this.setState(state)
  }

  checkQuestionName () {
    let allOk = true
    if (!this.state.text) {
      this.state.error = 'Debe introducir un nombre'
      this.setState(
        {
          error: this.state.error
        }
      )
      allOk = false
    }
    return allOk
  }

  checkAnswersText () {
    let allOk = true
    this.state.answers.forEach(function (answer) {
      if (!answer.text || answer.isCorrect == null) {
        answer.error = 'Hay errores en la posible respuesta'
        allOk = false
      } else {
        answer.error = null
      }
    })
    this.setState(
      {
        answers: this.state.answers
      }
    )
    return allOk
  }

  checkNumAnswers () {
    let allOk = true
    let errorText = null
    if (this.state.answers.length < 2) {
      allOk = false
      errorText = 'Debe haber al menos dos respuestas'
    }
    this.setState(
      {
        error: errorText
      }
    )
    return allOk
  }

  handleQuestionCreate (e) {
    e.preventDefault()

    // comprobamos que todo este bien y si no
    // interrumpimos la ejecucion
    const allOk = this.checkQuestionName() &&
    this.checkNumAnswers() &&
    this.checkAnswersText()
    if (!allOk) {
      return
    }

    this.props.createQuestion(this.state.questionsCreated + 1, this.state.text, this.state.answers)
    this.setState(
      {
        error: null,
        questionsCreated: this.state.questionsCreated + 1,
        text: '',
        answers: []
      }
    )
  }

  render () {
    return (
      <Form onSubmit={this.handleQuestionCreate.bind(this)}>
        <FormGroup row>
          <Col sm={9}>
            <Label>
              <b>Introduzca una nueva pregunta</b>
            </Label>
          </Col>
          <Col sm={3}>
            <Button size='sm' type='submit'>
              Guardar pregunta  <FontAwesome name='save' />
            </Button>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={12}>
            <Input name='text' value={this.state.text} onChange={this.handleNameChange.bind(this)} type='text' placeholder='Introduzca una pregunta' />
          </Col>
        </FormGroup>
        <AlertError
          error={this.state.error}
        />
        <AnswersListForm
          {... this.props}
          answers={this.state.answers}
        />
      </Form>
    )
  }
}

module.exports = QuestionForm
