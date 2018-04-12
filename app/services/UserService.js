const axios = require('axios')

module.exports = {

  all: function (cb) {
    axios.get('http://127.0.0.1:8081/api/users')
      .then(res => {
        cb(null, res.data)
      })
      .catch(err => {
        cb(err)
      })
  }
}
