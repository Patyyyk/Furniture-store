import React from 'react';
import Searchbar from './searchbar.jsx';

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shopItems: [],
      haveData: false
    }
  }

  componentWillMount() {
    fetch(`http://localhost:3000/db`).then(response => {
      if (response.ok) {
        return response.json()
      } else {
        console.log('Error');
      }
    }).then(db => db.chairs.concat(db.sofas, db.beds))
      .then(db => this.setState({shopItems: db, haveData: true}))
  }
  changeAppState = (filteredItems) => {
  this.setState({
    shopItems: filteredItems
  })
}
  render() {
    return this.state.haveData && (<div>
      <Searchbar preFilteredItems={this.state.shopItems} changeAppState={this.changeAppState}/>
      <hr/>
      <div className='w-100 h-100 d-flex flex-row flex-wrap justify-content-center overflow'>
        {
          this.state.shopItems.map((element) => {
            return (<div key={element.id} className='items-size m-1'>
              <div className='rounded w-100 h-100' style={{
                  background: `url(${element.url})`,
                  backgroundSize: 'cover'
                }}></div>
              <p>Model:{element.name}</p>
            </div>);
          })
        }
      </div>
    </div>);
  }
}
export default Products;
