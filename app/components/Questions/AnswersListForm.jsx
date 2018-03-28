import React from 'react'
import AnswerForm from './AnswerForm'
import _ from 'lodash'
import {FormGroup, Button, Label} from 'reactstrap'
import FontAwesome from 'react-fontawesome'

class AnswersListForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      answersCreated: 0,
      answers: props.answers
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState(
      {
        answers: nextProps.answers
      }
    )
  }

  addAnswer () {
    const answer = {
      id: this.state.answersCreated,
      text: '',
      isCorrect: false
    }
    this.state.answers.push(answer)
    this.setState(
      {
        answersCreated: this.state.answersCreated + 1,
        answers: this.state.answers
      }
    )
  }

  /**
   * [Elimina una respuesta en funcion del id]
   * @param  {[int]} key [Id de la respuesta]
   * @return {[void]}
   */
  deleteAnswer (key) {
    this.state.answers = this.state.answers.filter((a) => {
      return a.id !== key
    })
    this.setState(
      {
        answers: this.state.answers
      }
    )
  }

  renderAnswers () {
    return _.map(this.state.answers, (answer, index) => {
      return (
        <AnswerForm
          key={answer.id}
          answer={answer}
          addAnswer={this.addAnswer.bind(this)}
          deleteAnswer={this.deleteAnswer.bind(this)}
        />
      )
    })
  }

  render () {
    return (
      <div>
        <FormGroup>
          <Button size='sm' onClick={this.addAnswer.bind(this)} type='button'>
            Añadir posible respuesta <FontAwesome name='plus' />
          </Button>
        </FormGroup>
        {this.renderAnswers()}
      </div>
    )
  }
}

module.exports = AnswersListForm
