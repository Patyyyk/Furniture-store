import React from 'react';
import {Link} from 'react-router';

class Template extends React.Component {
  render() {
    return (<div>
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <Link className="nav-link active bg-dark" to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active bg-dark" to='/products'>Our products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active bg-dark" to='/aboutus'>About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active bg-dark glyphicon glyphicon-shopping-cart" to='/shoppingcart'><i className="icon-basket"></i>
          </Link>
        </li>
      </ul>
      <hr/> {this.props.children}
    </div>);
  }
}

export default Template;
