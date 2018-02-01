import React from 'react';
import {Link} from 'react-router';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownValue: ''
    }
  };

  dropdownChange = (event) => {
    this.setState({
      dropdownValue: event.target.value
    }, () => {
      if (typeof this.props.categoryPick === 'function') {
        this.props.categoryPick(this.state.dropdownValue);
      }
    })
  }

  render() {
    return (<select value={this.state.dropdownValue} onChange={this.dropdownChange} className='custom-select'>
      <option value="All products">All products</option>
      <option value="Beds">Beds</option>
      <option value="Chairs">Chairs</option>
      <option value="Sofas">Sofas</option>
    </select>);
  }
}
export default Dropdown;
