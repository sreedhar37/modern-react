import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  
  state = {lat: null, errorMessage: ''};
  
  renderContent()  {
    if (this.state.errorMessage && !this.state.lat)   {
      return <div>Error: {this.state.errorMessage}</div>
    }

    if(!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}/>
    }
    return <Spinner message="Please accept location request"/>
  }

  render() {
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    );
  }

  componentDidMount() {
    console.log("Component Did Mount");
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({lat: position.coords.latitude}),
      (err) => this.setState({errorMessage: err.message})
    );
  }

  componentDidUpdate() {
    console.log("Component Did update");
  }
}

ReactDOM.render(<App/>, document.getElementById("root"));