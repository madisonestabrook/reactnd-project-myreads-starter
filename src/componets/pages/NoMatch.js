import React from 'react';

class NoMatch extends  React.Component {
  render () {
    return(
    <div>
    <h1>Error 404: There is Nothing Here</h1>
    <h5>Try double-checking your spelling</h5>
    <p>This might be result of a page being moved or removed.</p>
    </div>
    );
  }
}
export default NoMatch
