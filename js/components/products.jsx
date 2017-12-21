import React from 'react';

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
    }).then(db => this.setState({shopItems: db, haveData: true}))
  }
  render() {
    return this.state.haveData && (
      <div>
        <form className='d-flex justify-content-center'>
          <input type="text" placeholder="Search..." className='text-center'/>
        </form>
      <hr/>
        <div className='w-100 h-100 d-flex flex-row flex-wrap justify-content-center overflow'>
        {
          this.state.shopItems.chairs.map((element) => {
            return (
            <div key={element.id} className='items-size m-1'><div className='rounded w-100 h-100' style={{background:`url(${element.url})`,backgroundSize: 'cover'}}></div>
              <p>Model:{element.name}</p>
            </div>);
          })
        }
        {
          this.state.shopItems.beds.map((element) => {
            return (
            <div key={element.id} className='items-size m-1'><div className='rounded w-100 h-100' style={{background:`url(${element.url})`,backgroundSize: 'cover'}}></div>
              <p>Model:{element.name}</p>
            </div>);
          })
        }
        {
          this.state.shopItems.sofas.map((element) => {
            return (
            <div key={element.id} className='items-size m-1'><div className='rounded w-100 h-100' style={{background:`url(${element.url})`,backgroundSize: 'cover'}}></div>
              <p>Model:{element.name}</p>
            </div>);
          })
        }
      </div>
    </div>
  );

  }
}

export default Products;
