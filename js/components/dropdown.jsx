import React from 'react';
import {Link} from 'react-router';

class Dropdown extends React.Component {
  render() {
    return (<div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Categories
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <Link className="dropdown-item" to='/products'>Beds</Link>
        <Link className="dropdown-item" to='/products'>Chairs</Link>
        <Link className="dropdown-item" to='/products'>Sofas</Link>
      </div>
    </div>);
  } 
}
export default Dropdown;
