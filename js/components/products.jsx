import React from 'react';
import Searchbar from './searchbar.jsx';
import Dropdown from './dropdown.jsx';

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shopItems: [],
      haveData: false,
      filteredText: '',
      dropdownValue: ''
    }
  }

  componentWillMount() {
    fetch(`https://my-json-server.typicode.com/Patyyyk/Furniture-store/db`).then(response => {
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

  categoryPick = (dropdownValue) => {
    this.setState({dropdownValue: dropdownValue})
  }

  render() {
    return this.state.haveData && (<div>
      <form className='d-flex justify-content-center'>
        <Searchbar changeAppState={this.changeAppState}/>
        <Dropdown categoryPick={this.categoryPick}/>
      </form>
        <hr/>
          <div className='w-100 h-100 d-flex flex-row flex-wrap justify-content-center overflow'>
            {
                this.state.shopItems.filter(element => {
                  if (this.state.dropdownValue === '' || this.state.dropdownValue === 'All products'){
                    return element;
                  }else if (this.state.dropdownValue === 'Beds'){
                    return element.id > 10
                  }else if (this.state.dropdownValue === 'Chairs'){
                    return element.id < 6
                  }else if (this.state.dropdownValue === 'Sofas'){
                    return element.id > 5 && element.id < 11
                  }
                }).map((element) => {
                    if (element.name.toLowerCase().indexOf(this.state.filteredText.toLowerCase()) != -1) {
                      return (<div key={element.id} className='items-size'>
                                <div className='rounded w-100 h-100' style={{background: `url(${element.url})`, backgroundSize: 'cover'}}></div>
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
