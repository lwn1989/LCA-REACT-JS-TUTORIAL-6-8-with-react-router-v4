import React from 'react';
import Article from '../components/article.js';

export default class Archives extends React.Component {
  render() {
    console.log(this.props);
    const { match } = this.props;
    const { article } = match.params;
    const { search } = this.props.location;

    // no query values in router v4 anymore, only search
    if (search) {
      const dateReg = /^\?date=.*&/;
      const filterReg = /&filter=.*/;
      const dateMatchRes = search.match(dateReg);
      if (dateMatchRes) {
        var filterMatchRes = search.match(filterReg);
        var date = dateMatchRes[0].slice(6,-1);
        if (filterMatchRes) {
          var filter = filterMatchRes[0].slice(8);
        } else {
          var filter = 'Wrong input';
        }
      } else {
        if (search.match(/^\?date=/)) {
          var date = search.slice(6);
        } else {
          var date ="Wrong Input";
        }
        var filter = "none";
      }
    } else {
        var date = "none";
        var filter = "none";
    }

    const Articles = [
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
    ].map((title, i) => <Article key={i} title={title} />);

    return (
      <div>
        <h1>Archives</h1>
        article: {article}, date: {date}, filter: {filter}
        <div className="row">
          {Articles}
        </div>
      </div>
    );
  }
}
