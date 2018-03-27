import React from 'react'
// import _ from 'lodash'
import AnswersList from './AnswersList'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import FontAwesome from 'react-fontawesome'

class QuestionForm extends React.Component {
  constructor () {
    super()
    this.state = {
      text: '',
      answers: [],
      error: null
    }
  }

  handleChange (event) {
    const target = event.target
    const value = target.value
    const name = target.name
    const state = {}
    state[name] = value
    this.setState(state)
  }

  handleCreate (e) {
    e.preventDefault()
    let text = this.state.text
    this.props.createQuestion(text, this.state.answers)
    this.setState(
      {
        text: '',
        answers: []
      }
    )
  }

  addAnswerInput () {
    this.state.answers.push(
      {
        text: '',
        isCorrect: false
      }
    )
    this.setState(
      {
        answers: this.state.answers
      }
    )
  }

  render () {
    return (
      <Form onSubmit={this.handleCreate.bind(this)}>
        <FormGroup row>
          <Label>
            Introduzca una nueva pregunta
          </Label>
          <Input name='text' value={this.state.text} onChange={this.handleChange.bind(this)} type='text' placeholder='Introduzca una pregunta' />
        </FormGroup>
        <FormGroup row>
            Añadir posible respuesta
          <Button size='sm' onClick={this.addAnswerInput.bind(this)} type='button'>
            <FontAwesome name='plus' />
          </Button>
        </FormGroup>
        <AnswersList
          {... this.props}
          answers={this.state.answers}
        />
        <FormGroup row>
          <Button size='sm' type='submit'>
            <FontAwesome name='save' />
          </Button>
        </FormGroup>
      </Form>
    )
  }
}

module.exports = QuestionForm
