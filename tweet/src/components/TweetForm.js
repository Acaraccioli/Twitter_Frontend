import React, { Component } from 'react'
import axios from 'axios'

class TweetForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      body: this.props.tweet.body,
      user: this.props.tweet.user

    }
  }

  handleInput = (e) => {
  this.setState({[e.target.name]: e.target.value})
}

  render() {
    return (
      <div className="tile">
       <form>
  
    <textarea className='input' name="body"
    placeholder='Insert your tweet'
    value={this.state.body} onChange={this.handleInput}>
    </textarea>

    <textarea className='input' name="user"
    placeholder='Insert your username'
    value={this.state.user} onChange={this.handleInput}>
    </textarea>
    </form>
      </div>
    );
  }
}

export default TweetForm