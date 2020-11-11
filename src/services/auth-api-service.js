import config from '../config'

const AuthApiService = {
  // register user

  postUser(user) {
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      }, 
      body: JSON.stringify(user),
    })
      .then(res => 
        (!res.ok) ?
          res.json().then(e => Promise.reject(e)) :
          res.json()
    )
      .catch(err => {
      console.log('error:', err)
    })
  },
}

export default AuthApiService