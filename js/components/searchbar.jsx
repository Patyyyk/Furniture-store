import React from 'react';

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
    });
  };
  render() {
    let db = this.props.preFilteredItems;
    console.log(this.state.search);
    return (<form className='d-flex justify-content-center'>
              <input type="text" placeholder='Search' name='search' className='text-center' onChange={this.filter} value={this.state.search}/>
            </form>)
  }
}

export default Searchbar;
