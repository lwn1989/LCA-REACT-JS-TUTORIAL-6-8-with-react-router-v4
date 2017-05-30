import React from 'react';

export default class Archives extends React.Component {
  render() {
    console.log(this.props);
    const { match } = this.props;
    const { article } = match.params;
    const { search } = this.props.location;

    var indexOfEqual = search.indexOf('=');
    var date = search.slice(indexOfEqual+1);

    return (
      <div>
        <h1>Archives {article}</h1>
        date: {date} filter: none
      </div>
    );
  }
}
