import React from 'react'

class Followers extends React.Component {

    render() {
        return(
            <div>
                <h2>Follower Username: {this.props.info.login}</h2>
                <img src={this.props.info.avatar_url} alt = 'follower avatar'/>
            </div>
        )
    }
}   

export default Followers;