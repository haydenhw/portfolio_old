import React, { Component } from 'react';
import { withRouter } from  'react-router';
import Portfolio from './Portfolio';
import Nav from './Nav';
import Routes from '../routes';

class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
      areLinksHidden: true,
    }
  }

  toggleNavLinks = () => {
    const { areLinksHidden } = this.state;
    this.setState({ areLinksHidden: !areLinksHidden});
  }

  render() {
    const { areLinksHidden } = this.state;
    return (
      <div>
        <Nav areLinksHidden={areLinksHidden} onMenuClick={this.toggleNavLinks} />
        <div className="container">
          {Routes}
        </div>
      </div>
    );
  }
}

export default withRouter(LandingPage);
