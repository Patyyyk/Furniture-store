import React from 'react';
import Dropdown from './dropdown.jsx';

class Searchbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
  }
  filter = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    },
    ()=>{
      if(typeof this.props.changeAppState === 'function'){
        this.props.changeAppState(this.state.search);
      }
    });
  };
  render() {
    return (<form className='d-flex justify-content-center'>
              <input type="text" placeholder='Search' name='search' className='text-center' onChange={this.filter} value={this.state.search}/>
              <Dropdown/>
            </form>)
  }
}
export default Searchbar;
