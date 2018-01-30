import React from 'react';
import {Link} from 'react-router';

class Dropdown extends React.Component {
  render() {
    return (  <select className='custom-select'name="categories">
    <option value="All products">All products</option>
    <option value="Beds">Beds</option>
    <option value="Chairs">Chairs</option>
    <option value="Sofas">Sofas</option>
  </select>);
  }
}
export default Dropdown;
