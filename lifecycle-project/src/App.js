import React from 'react';
import './App.css';
import User from './components/user';
import FollowersList from './components/followersList';
import axios from 'axios';

class App extends React.Component {
  
  state = {

    user: 'vchavarria1995',
    userInfo: {},
    followers: []
  }

  getFollowers = () => {
    axios.get(`https://api.github.com/users/${this.state.user}/followers`)
      .then(res => {
        console.log('Followers', res)
        this.setState({
          followers: res.data
        })
      })
      .catch(err => {
        console.log('Followers Error', err);
      })
  }

  componentDidMount() {

    axios.get(`https://api.github.com/users/${this.state.user}`)
      .then(res => {
        console.log("User");
        console.log("User Error:", res.data);
        this.setState({
          userInfo: res.data
        })
        console.log(this.state);
        this.getFollowers();
      })
      .catch(err => {
        console.log("Error", err);
      })
  }

  render() {
    return (
      <div className="App">
        <User info={this.state.userInfo} />
        <FollowersList followers={this.state.followers}/>
      </div>
    );
  }
}

export default App;