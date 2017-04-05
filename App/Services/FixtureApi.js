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
  getUser: (username) => {
    // This fixture only supports gantman or else returns skellock
    const gantmanData = require('../Fixtures/gantman.json')
    const skellockData = require('../Fixtures/skellock.json')
    return {
      ok: true,
      data: username.toLowerCase() === 'gantman' ? gantmanData : skellockData
    }
  },
  authorize: ({ username, password }) => {
    const token = 'a1b2c3'
    const errors = require('../Fixtures/errors.json')

    if (password === 'password' && username === 'guest') {
      return { ok: true, token }
    } else {
      return { ok: false, errors }
    }
  },
  signup: (newUser) => {
    return require('../Fixtures/guest.json')
  }
}
