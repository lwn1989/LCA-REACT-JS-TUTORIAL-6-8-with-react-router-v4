import React from 'react';

export default class Footer extends React.Component {
  render() {
    const footerStyle = {
      textAlign: "center"
    }
    return (
      <footer className="col-xs-12" style={footerStyle}>
        Copyright &copy; KillerNew.net
      </footer>
    );
  }
}
