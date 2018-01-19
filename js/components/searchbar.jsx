import React from 'react';

class Searchbar extends React.Component {
  render() {
    return (<form className='d-flex justify-content-center'>
              <input type="text" placeholder="Search..." className='text-center'/>
            </form>)
  }
}

export default Searchbar;
