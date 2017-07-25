'use strict';
import React, { PropTypes } from 'react';
import _ from 'lodash';
 
class AuthorizedComponent extends React.Component {
  static propTypes = {
    routes: PropTypes.array.isRequired
  };
 
  static contextTypes = {
    router: PropTypes.object.isRequired
  };
 
  componentWillMount() {
    const { routes } = this.props; // array of routes
    const { router } = this.context;
 
    // check if user data available
    const role = JSON.parse(localStorage.getItem('role'));
    if (!role) {
      // redirect to login if not
      router.push('/');
    }
 
    // get all roles available for this route
    const routeRoles = _.chain(routes)
      .filter(item => item.authorize) // access to custom attribute
      .map(item => item.authorize)
      .flattenDeep()
      .value();
 
    // compare routes with user data
    if (_.intersection(routeRoles, role).length === 0) {
      router.push('/');
    }
  }
}
 
export default AuthorizedComponent;