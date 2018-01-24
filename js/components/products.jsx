import React from 'react';
import Searchbar from './searchbar.jsx';

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shopItems: [],
      haveData: false,
      filteredText: ''
    }
  }

  componentWillMount() {
    fetch(`http://localhost:3000/db`).then(response => {
      if (response.ok) {
        return response.json()
      } else {
        console.log('Error');
      }
    }).then(db => db.chairs.concat(db.sofas, db.beds)).then(db => this.setState({shopItems: db, haveData: true}))
  }
  changeAppState = (filteredText) => {
    this.setState({filteredText: filteredText})
  }
  render() {
    return this.state.haveData && (<div>
      <Searchbar changeAppState={this.changeAppState}/>
      <hr/>
      <div className='w-100 h-100 d-flex flex-row flex-wrap justify-content-center overflow'>
        {
          this.state.shopItems.map((element) => {
            if (element.name.toLowerCase().indexOf(this.state.filteredText.toLowerCase()) != -1) {
              return (<div key={element.id} className='items-size'>
                <div className='rounded w-100 h-100' style={{
                    background: `url(${element.url})`,
                    backgroundSize: 'cover'
                  }}></div>
                <p>Model:{element.name}</p>
              </div>);
            }
          })
        }
      </div>
    </div>);
  }
}
export default Products;
