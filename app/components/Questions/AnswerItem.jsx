import React from 'react'
import FontAwesome from 'react-fontawesome'
import {Input, Button, FormGroup, Label} from 'reactstrap'
// import _ from 'lodash'

class AnswerItem extends React.Component {
  constructor (props) {
    super()
    this.state = {
      added: false,
      answer: props.answer
    }
  }

  handleDelete () {
    this.setState({added: false})
    const answerStored = this.state.answer
    answerStored.text = null
    answerStored.isCorrect = false
    this.setState({answer: answerStored})
  }

  handleCreate () {
    this.setState({added: true})
    const answerStored = this.state.answer
    answerStored.text = this.textQuestion.value
    answerStored.isCorrect = this.isCorrectQuestion.value === 'on'
    this.setState({answer: answerStored})
  }

  renderAnswers () {
    const InputName = this.renderInput()
    const Checkbox = this.renderCheckbox()
    const AddButton = this.renderAddButton()
    const DeleteButton = this.renderDeleteButton()
    return (
      <div>
        {InputName}
        {Checkbox}
        <FormGroup row>
          {AddButton}
          {DeleteButton}
        </FormGroup>
      </div>
    )
  }

  renderCheckbox () {
    const disabled = !this.props.added ? 'disabled' : '';
    return (
      <FormGroup row>
        <FormGroup check inline>
          <Label check>
            <input ref={(input) => { this.isCorrectQuestion = input }} type='radio' name='radio1' disabled={this.props.added} />
            Si
          </Label>
        </FormGroup>
        <FormGroup check inline>
          <Label check>
            <input ref={(input) => { this.isCorrectQuestion = input }} type='radio' name='radio1' disabled={this.props.added} />
            No
          </Label>
        </FormGroup>
      </FormGroup>
    )
  }

  renderInput () {
    if (!this.state.added) {
      return (
        <FormGroup row>
          <Label>
            Escriba la posible respuesta
          </Label>
          <input ref={(input) => { this.textQuestion = input }} type='text' placeholder='Introduzca una posible respuesta' />
        </FormGroup>
      )
    } else {
      return (
        <FormGroup row>
          <Label>
            Escriba la posible respuesta
          </Label>
          <input ref={(input) => { this.textQuestion = input }} type='text' placeholder='Introduzca una posible respuesta' disabled='true' />
        </FormGroup>
      )
    }
  }

  renderDeleteButton () {
    if (!this.state.added) {
      return (
        <Button size='sm' type='button' onClick={this.handleDelete.bind(this)}>
          <FontAwesome name='trash' />
        </Button>
      )
    }
  }

  renderAddButton (a) {
    if (!this.state.added) {
      return (
        <Button size='sm' type='button' onClick={this.handleCreate.bind(this)}>
          <FontAwesome name='plus' />
        </Button>
      )
    }
  }

  render () {
    return this.renderAnswers()
  }
}

module.exports = AnswerItem
