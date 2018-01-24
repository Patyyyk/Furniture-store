import React from 'react';
import ReactDom from 'react-dom';
import	{	Router,
		Route,
		Link,
		IndexLink,
		IndexRoute,
		hashHistory
}	from	'react-router';
import Template from './components/template.jsx';
import Main from './components/main.jsx';
import Products from './components/products.jsx';
import AboutUs from './components/aboutus.jsx';
import ShoppingCart from './components/shoppingcart.jsx';
import NotFound from './components/404.jsx';



class App extends React.Component {
  render() {
    return (
			<div className='container-fluid'>
      <div className='text-center'><h1>HelloFurnituresLogo!</h1></div>
      <Router history={hashHistory}>
        <Route path='/' component={Template}>
          <IndexRoute component={Main}/>
            <Route path='/aboutus' component={AboutUs}/>
						<Route path='/products' component={Products}/>
            <Route path='/shoppingcart' component={ShoppingCart}/>
						<Route path='*' component={NotFound}/>
        </Route>
      </Router>
    </div>);
  }
}



document.addEventListener('DOMContentLoaded', function(){
    ReactDom.render(
      <App />,
      document.getElementById('app')
    );
});
