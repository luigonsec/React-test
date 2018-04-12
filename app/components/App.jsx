import React from 'react'
import UserService from '../services/UserService'
import ListaUsuarios from './User/ListaUsuarios'
import {Container, Row, Col} from 'reactstrap'
// import _ from 'lodash'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      err: null,
      users: []
    }
    this.init()
  }

  init () {
    const _this = this;
    UserService.all(function (err, users) {
      if (err) {
        return _this.setState({
          err: err,
          users: []
        })
      }

      return _this.setState({
        err: null,
        users: users
      })
    })
  }

  render () {
    const users = this.state.users
    return (
      <Container>
        <Row>
          <Col sm={12}>
            <h1>Usuario</h1>
          </Col>
        </Row>
        <Row>
          <ListaUsuarios
            users={users}
          />
        </Row>
      </Container>
    )
  }
}

module.exports = App
