import React, { Component } from 'react'
import axios from 'axios'
import Tweet from './Tweet'
import update from 'immutability-helper'
import TweetForm from './TweetForm'





class TweetsContainer extends Component {
 

  constructor(props) {
  super(props)
  this.state = {
    tweets: [],
    editingTweetId:null
  }
}
addNewTweet = () => {
  axios.post(
    'http://localhost:3001/api/v1/tweets',
    { tweet:
      {
        body: '',
        user: ''
      }
    }
  )
.then(response => {
    console.log(response)
    const tweets = update(this.state.tweets, {
      $splice: [[0, 0, response.data]]
    })
    this.setState({tweets:tweets,
    	editingTweetId: response.data.id

    })
  })
  .catch(error => console.log(error))
}

//   .then(response => {
//     console.log(response)
//   })
//   .catch(error => console.log(error))
// }

componentDidMount() {
  axios.get('http://localhost:3001/api/v1/tweets.json')
  .then(response => {
    console.log(response)
    this.setState({tweets: response.data})
  })
  .catch(error => console.log(error))
}

render() {


  return (

    <div>
    <button className="newTweetButton"
  onClick={this.addNewTweet} >
  New Tweet
</button>


	{this.state.tweets.map((tweet) => {
  if(this.state.editingTweetId === tweet.id) {
    return(<TweetForm tweet={tweet} key={tweet.id} />)
  } else {
    return (<Tweet tweet={tweet} key={tweet.id} />)
  }
})}


    </div>

  );

}
}

export default TweetsContainer