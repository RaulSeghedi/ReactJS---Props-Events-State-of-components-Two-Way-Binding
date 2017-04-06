import React, { Component } from 'react';

import {User} from './components/User';

class App extends Component {
    constructor(){
        super();
        this.state = {
            title: "Hi guys !"
        }
    }

    changeTitle(newTitle) {
        this.setState({
            title: newTitle
        });
    }

  render() {
    return (
      <div>
          <h3>{this.state.title}</h3>
          <br/>
          <User
              name="Raul"
              age={31}
              initialTitle={this.state.title}
              changeTitle={this.changeTitle.bind(this)} />
      </div>
    );
  }
}

export default App;
