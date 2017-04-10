// a library to wrap and simplify api calls
import apisauce from 'apisauce'

// our "constructor"
const create = (baseURL = 'https://api.github.com/') => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //

  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache'
    },
    // 10 second timeout...
    timeout: 10000
  })

  // headers: {'Authorization': 'Token 234jf3049jr'}

  // Wrap api's addMonitor to allow the calling code to attach
  // additional monitors in the future.  But only in __DEV__ and only
  // if we've attached Reactotron to console (it isn't during unit tests).
  if (__DEV__ && console.tron) {
    api.addMonitor(console.tron.apisauce)
  }

  // ------
  // STEP 2
  // ------
  //
  // Define some functions that call the api.  The goal is to provide
  // a thin wrapper of the api layer providing nicer feeling functions
  // rather than "get", "post" and friends.
  //
  // I generally don't like wrapping the output at this level because
  // sometimes specific actions need to be take on `403` or `401`, etc.
  //
  // Since we can't hide from that, we embrace it by getting out of the
  // way at this level.
  //
  const getUser = () => api.get('api/profile/')
  const updateUser = (user) => api.put('api/profile/', user)
  const authorize = (userCredentials) => api.post('api/authenticate/', userCredentials)
  const signup = (user) => api.post('api/users/', user)
  const getGroups = () => api.get('api/chats/')
  const getUsers = (userQuery) => api.get('api/search', {username: userQuery})
  const createGroup = (newGroupInfo) => api.post('api/chats/', newGroupInfo)
  const requestMessages = (groupId, language) => api.get(`api/chats/${groupId}/`, { language })
  const sendNewMessage = (messageDetails) => api.post('api/messages/', messageDetails)
  const config = api

  // ------
  // STEP 3
  // ------
  //
  // Return back a collection of functions that we would consider our
  // interface.  Most of the time it'll be just the list of all the
  // methods in step 2.
  //
  // Notice we're not returning back the `api` created in step 1?  That's
  // because it is scoped privately.  This is one way to create truly
  // private scoped goodies in JavaScript.
  //
  return {
    // a list of the API functions from step 2
    config,
    getUser,
    updateUser,
    authorize,
    signup,
    getGroups,
    getUsers,
    createGroup,
    requestMessages,
    sendNewMessage
  }
}

// let's return back our create method as the default.
export default {
  create
}
