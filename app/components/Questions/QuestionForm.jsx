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

  handleQuestionCreate (e) {
    e.preventDefault()

    let errors = false
    // Verificamos que la pregunta tenga un texto
    let text = this.state.text
    if (!text) {
      this.state.error = 'Debe introducir un nombre'
      this.setState(
        {
          error: this.state.error
        }
      )
      errors = true
    }

    // Verificando que todas las respuestas posibles
    // tengan un texto
    this.state.answers.forEach(function (answer) {
      if (!answer.text || answer.isCorrect == null) {
        answer.error = 'Hay errores en la posible respuesta'
        errors = true
      } else {
        answer.error = null
      }
    })
    this.setState(
      {
        answers: this.state.answers
      }
    )

    // Verificamos que al menos haya dos respuestas
    if (this.state.answers.length < 2) {
      errors = true
      this.setState(
        {
          error: 'Debe haber al menos dos respuestas'
        }
      )
    }

    // Si hay algun error interrumpimos
    // el proceso de guardado
    if (errors) {
      return
    }

    this.props.createQuestion(this.state.questionsCreated + 1, text, this.state.answers)
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
