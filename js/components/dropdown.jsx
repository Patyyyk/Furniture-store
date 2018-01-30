import React from 'react';
import {Link} from 'react-router';

class Dropdown extends React.Component {
  render() {
    return (<div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <Link className="dropdown-item" to='/products'>All products</Link>
        <Link className="dropdown-item" to='/products'>Beds</Link>
        <Link className="dropdown-item" to='/products'>Chairs</Link>
        <Link className="dropdown-item" to='/products'>Sofas</Link>
    </div>);
  }
}
export default Dropdown;
