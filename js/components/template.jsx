import React from 'react';
import {Link} from 'react-router';

class Template extends React.Component {
  render() {
    return (<div>
      <header>
        <ul className="nav nav-pills nav-fill">
          <li className="nav-item">
            <Link className="nav-link active bg-dark" to='/'>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active bg-dark" to='/aboutus'>About Us</Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link active bg-dark" to='/products'>Our products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active bg-dark" to='/shoppingcart'>
              <i className="icon-basket"></i>
            </Link>
          </li>
        </ul>
      </header>
      <hr/>
      <main>{this.props.children}</main>
      <hr/>
      <footer className='bg-dark text-white footer-size d-flex justify-content-between rounded-top'>
        <p className='footer-text'>&copy; Piotr Adamek</p>
        <div>
          <Link to='#'>
            <i className='icon-pinterest-squared fontello-size text-white'></i>
          </Link>
          <Link to='#'>
            <i className='icon-gplus-squared fontello-size text-white'></i>
          </Link>
          <Link to='#'>
            <i className='icon-facebook-squared fontello-size text-white'></i>
          </Link>
        </div>
      </footer>
    </div>);
  }
}

export default Template;
