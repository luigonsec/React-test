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

  handleChange (event) {
    const target = event.target
    const value = target.value
    const name = target.name
    const state = {}
    this.state.answer[name]= value
    this.setState({answer: this.state.answer})
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
            <Input  type='radio' name='isCorrect' onChange={this.handleChange.bind(this)}  disabled={this.props.added} />
            Si
          </Label>
        </FormGroup>
        <FormGroup check inline>
          <Label check>
            <Input type='radio' name='isCorrect' onChange={this.handleChange.bind(this)}  disabled={this.props.added} />
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
          <Input name='text' onChange={this.handleChange.bind(this)} type='text' placeholder='Introduzca una posible respuesta' />
        </FormGroup>
      )
    } else {
      return (
        <FormGroup row>
          <Label>
            Escriba la posible respuesta
          </Label>
          <Input name='text' onChange={this.handleChange.bind(this)} type='text' placeholder='Introduzca una posible respuesta' disabled='true' />
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
