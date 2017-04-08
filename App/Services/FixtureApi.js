export default {
  // Functions return fixtures
  getRoot: () => {
    return {
      ok: true,
      data: require('../Fixtures/root.json')
    }
  },
  getRate: () => {
    return {
      ok: true,
      data: require('../Fixtures/rateLimit.json')
    }
  },
  authorize: ({ username, password }) => {
    const token = 'a1b2c3'
    const errors = require('../Fixtures/errors.json')
    const checkCredentials = (
      password === 'password' &&
      username === 'guest'
    ) || (
      password === '' &&
      username === ''
    )

    if (checkCredentials) {
      return { ok: true, data: {token} }
    } else {
      return { ok: false, data: {non_field_errors: errors} }
    }
  },
  signup: (newUser) => {
    return require('../Fixtures/guest.json')
  },
  getGroups: (token) => {
    const groups = require('../Fixtures/groups.json')
    return { ok: true, data: {chats: groups} }
  },
  config: { setHeader: () => {

  }},
  getUsers: (userQuery) => {
    const userSearch = require('../Fixtures/users.json')
    return { ok: true, data: userSearch }
  },
  getUser: (token) => {
    return { ok: true, data: { user: require('../Fixtures/guest.json') } }
  }
}
