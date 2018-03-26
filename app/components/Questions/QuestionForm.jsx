import React from 'react'
import _ from 'lodash'
import AnswersList from './AnswersList'

class QuestionForm extends React.Component {
  constructor () {
    super()
    this.state = {
      answers: [],
      error: null
    }
  }


  handleCreate(e){
    e.preventDefault();
    let t = this.inputQuestion.value;
    this.props.createQuestion(t, this.state.answers)
    this.inputQuestion.value = '';
    this.setState(
      {
          answers: this.state.answers
      }
    )
  }

  addAnswerInput(){
    this.state.answers.push(
      {
        text : null,
        isCorrect: false
      }
    )
    this.setState(
      {
        answers: this.state.answers
      }
    );
  }

  render () {
    return (
      <form onSubmit={this.handleCreate.bind(this)}>
        <input ref={(input) => { this.inputQuestion = input }} type='text' placeholder='Introduzca una pregunta' />
        <button onClick={this.addAnswerInput.bind(this)} type='button'>Añadir respuesta</button>
        <AnswersList
          {... this.props}
          answers={this.state.answers}
        />
        <button type='submit'>Enviar</button>
      </form>
    )
  }



}

module.exports = QuestionForm
