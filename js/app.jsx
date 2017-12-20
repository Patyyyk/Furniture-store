import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div class="container-fluid">
        <h1>HelloFurnitures!</h1>
      </div>
    );
  }
}



document.addEventListener('DOMContentLoaded', function(){
    console.log('Hello world');
    ReactDom.render(
      <App />,
      document.getElementById('app')
    );
});
