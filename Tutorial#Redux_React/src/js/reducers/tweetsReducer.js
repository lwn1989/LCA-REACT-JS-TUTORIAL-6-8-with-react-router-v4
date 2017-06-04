
const initialState = {
  tweets: [],
  fetching: false,
  fetched: false,
  error: null
}
const tweetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TWEETS': {
      return {...state, fetching: true}
    }
    case 'FETCH_TWEETS_REJECTED': {
      return {...state, fetching: false, fetched: false, error: action.payload}
    }
    case 'FETCH_TWEETS_FULFILED': {
      return {...state, fetching: false, fetched: true, error: false, tweets: action.payload}
    }
    case 'ADD_TWEET': {
      return {...state, tweets: [...state.tweets, action.payload]}
    }
    case 'UPDATE_TWEET': {
      const { id } = action.payload
      var newTweets = [...state.tweets]
      const tweetToUpdate = state.tweets.findIndex((tweet) => {
        return tweet.id === id
      })
      newTweets[tweetToUpdate] = action.payload
      return {...state, tweets: newTweets}
    }
    case 'DELETE_TWEET': {
      return {...state, tweets: state.tweets.filter((item) => item.id !== action.payload)}
    }
  }
  return state
}
export default tweetsReducer
