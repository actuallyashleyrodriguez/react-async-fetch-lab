import React, { Component } from "react";

// create your App componen
export default class App extends Component {
    state = {
        people: []
    };
    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
        .then(results => results.json())
        .then(data => this.setState({people: data.people}))
    }
    render() {
        return (
            <div>{this.state.people.map(person => person.name)}</div>
        )

    }
}