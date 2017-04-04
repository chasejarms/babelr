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
  loginUser: (username, password) => {
    // This fixture only supports gantman or else returns skellock
    const user = require('../Fixtures/guest.json')
    const errors = require('../Fixtures/errors.json')

    if (password === 'password' && username === 'guest') {
      return { ok: true, user }
    } else {
      return { ok: false, errors }
    }
  }
}
