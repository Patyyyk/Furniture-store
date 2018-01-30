import React from 'react';
import {Link} from 'react-router';

class Dropdown extends React.Component {
  render() {
    return (<ul className="nav nav-pills nav-fill ">
      <li className="nav-item">
        <Link className="nav-link active bg-dark" to='/products'>Beds</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active bg-dark" to='/products'>Chairs</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active bg-dark" to='/products'>Sofas</Link>
      </li>
    </ul>);
  }
}
export default Dropdown;
