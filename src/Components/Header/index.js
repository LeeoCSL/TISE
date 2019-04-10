import React, { Component } from 'react';
import propTypes from 'prop-types';

import { withNavigation } from 'react-navigation';

class Header extends Component {
  static propTypes = {
    navigation: propTypes.shape({
      navigate: propTypes.func,
    }).isRequired,
  };

  render() {
    return null;
  }
}

export default withNavigation(Header);
