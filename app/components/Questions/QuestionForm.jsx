import React from 'react'
// import _ from 'lodash'
import AnswersListForm from './AnswersListForm'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
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
    let text = this.state.text
    this.props.createQuestion(this.state.questionsCreated + 1, text, this.state.answers)
    this.setState(
      {
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

        <AnswersListForm
          {... this.props}
          answers={this.state.answers}
        />
      </Form>
    )
  }
}

module.exports = QuestionForm
