import React from 'react';
import Followers from './followers';

class FollowerList extends React.Component {

  render() {
    return (
      <div>
        {
            this.props.followers.map(item => {
                return <Followers info={item} />
            })
        }
        <h2>Followers List:</h2>
      </div>
    );
  }
}

export default FollowerList;