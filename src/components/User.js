import React from 'react';

export class User extends React.Component {
    constructor(props) {
        super();
        this.state = {
            newAge: props.age,
            newTitle: props.initialTitle
        }
    }

    changeMyAgeUp() {
        this.setState({
            newAge: this.state.newAge + 1
        });
    }

    changeMyAgeDown() {
        this.setState({
            newAge: this.state.newAge - 1
        });
    }

    changeTitle() {
        this.props.changeTitle(this.state.newTitle)
    }

    onHandleChange(event) {
        this.setState({
            newTitle: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h4>Hi, my name is {this.props.name} and I'm {this.state.newAge}.</h4>
                <p>Change my age: </p>
                <button className="btn btn-primary" onClick={() => this.changeMyAgeUp()}>+</button>
                <button className="btn btn-primary" onClick={() => this.changeMyAgeDown()}>-</button>
                <hr/>
                <input type="text"
                       value={this.state.newTitle}
                       onChange={(event) => this.onHandleChange(event)}
                />
                <button className="btn btn-primary" onClick={() => this.changeTitle()}>CHANGE TITLE</button>
            </div>
        )
    }
}

User.PropTypes = {
    name: React.PropTypes.string,
    age: React.PropTypes.number,
    initialTitle: React.PropTypes.string
}