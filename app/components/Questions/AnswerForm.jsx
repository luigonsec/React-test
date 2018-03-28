import React from 'react'
import FontAwesome from 'react-fontawesome'
import {Input, Button, FormGroup, Label, Row, Col} from 'reactstrap'
// import _ from 'lodash'

class AnswerForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      added: false,
      answer: props.answer
    }
  }

  handleDelete () {
    this.props.deleteAnswer(this.state.answer.id)
  }

  handleChange (event) {
    const target = event.target
    const value = event.target.type === 'radio' ? target.value === 'on' : target.value
    const name = target.name.split('-')[0]
    const state = {
      answer: this.state.answer
    }
    state['answer'][name] = value
    this.setState(state)
  }

  renderAnswers () {
    const InputName = this.renderInput()
    const Checkbox = this.renderRadioIsCorrect()
    const DeleteButton = this.renderDeleteButton()
    return (
      <FormGroup>
        <Row>
          <Col sm={12}>
            <b>Escriba la posible respuesta</b>
          </Col>
        </Row>
        <Row>
          <Col sm={11}>
            {InputName}
          </Col>
          <Col sm={1}>
            {DeleteButton}
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            {Checkbox}
          </Col>
        </Row>
      </FormGroup>
    )
  }

  renderRadioIsCorrect () {
    const radioName = 'isCorrect-' + this.state.answer.id
    return (
      <FormGroup>
        <FormGroup check inline>
          <Label check>
            <Input value='on' name={radioName} onChange={this.handleChange.bind(this)} type='radio' disabled={(this.state.added) ? 'disabled' : ''} />
            Correcta
          </Label>
        </FormGroup>
        <FormGroup check inline>
          <Label check>
            <Input value='off' name={radioName} onChange={this.handleChange.bind(this)} type='radio' disabled={(this.state.added) ? 'disabled' : ''} />
            Incorrecta
          </Label>
        </FormGroup>
      </FormGroup>
    )
  }

  renderInput () {
    const inputName = 'text-' + this.state.answer.id
    return (
      <FormGroup>
        <Input name={inputName} value={this.state.answer.text} onChange={this.handleChange.bind(this)} type='text' placeholder='Introduzca una posible respuesta' disabled={(this.state.added) ? 'disabled' : ''} />
      </FormGroup>
    )
  }

  renderDeleteButton () {
    return (
      <Button size='sm' type='button' onClick={this.handleDelete.bind(this)}>
        <FontAwesome name='trash' />
      </Button>
    )
  }

  render () {
    return this.renderAnswers()
  }
}

module.exports = AnswerForm
