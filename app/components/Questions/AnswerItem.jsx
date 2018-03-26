import React from 'react'
import _ from 'lodash'

class AnswerItem extends React.Component {

  constructor(){
    super();
    this.state = {
      added : false
    }
  }

  handleCreate(a,e,i){
    this.setState({added : true});
    const answer = {
      text: this.textQuestion.value,
      isCorrect: this.isCorrectQuestion.value == 'on'
    }
    this.prop.addAnswer(answer)
  }


  renderAnswers(){
    const style = {'background-color' : 'grey'}
    if(this.state.added) style['background-color'] = 'green'

    return (
      <div style={style}>
        {this.renderInput()}
        {this.renderCheckbox()}
        {this.renderAddButton()}
      </div>
    )
  }

  renderCheckbox(){
    if(!this.state.added){
      return (
        <input ref={(input) => { this.isCorrectQuestion = input }} type='checkbox' />
      )
    }else{
      return (
        <input ref={(input) => { this.isCorrectQuestion = input }} type='checkbox' disabled/>
      )
    }
  }

  renderInput(){
    if(!this.state.added){
      return (
        <input ref={(input) => { this.textQuestion = input }} type='text' placeholder='Introduzca una posible respuesta' />
      )
    }else{
      return (
        <input ref={(input) => { this.textQuestion = input }} type='text' placeholder='Introduzca una posible respuesta' disabled='true'/>
      )
    }
  }

  renderAddButton(){
    if(!this.state.added){
      return(
        <button type='button' onClick={this.handleCreate.bind(this)}>OK</button>
      )
    }

  }

  render () {
    return (
      <div>
          {this.renderAnswers()}
      </div>
    )
  }
}

module.exports = AnswerItem
