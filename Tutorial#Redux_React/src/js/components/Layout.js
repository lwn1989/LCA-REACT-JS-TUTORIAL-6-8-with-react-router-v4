import React from 'react'
import { connect } from 'react-redux'

import { fetchUser } from '../actions/userActions.js'
import { fetchTweets } from '../actions/tweetsAction.js'

class Layout extends React.Component {
  componentWillMount () {
    this.props.dispatch(fetchUser())
  }

  fetchTweets () {
    this.props.dispatch(fetchTweets())
  }

  render () {
    const { user, tweets } = this.props

    return (
      <div>
        <h1>{user.name}</h1>
        <button onClick={this.fetchTweets.bind(this)}>Fetch fetchTweets</button>
        <ul>{tweets.map((tweet, i) => (<li key={i}>{tweet.text}</li>))}</ul>
      </div>
    )
  }
}

const mapStateToProps = (store) => ({
  user: store.user.user,
  tweets: store.tweets.tweets
})
export default connect(mapStateToProps)(Layout)
