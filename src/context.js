import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  reducer = (state, action) => {
    switch (action.type) {
      case "DELETE_REPORT":
        return {
          ...state,
          reports: state.reports.filter(
            report => report.id !== action.payload
          )
        };
      case "ADD_REPORT":
        return {
          ...state,
          reports: [action.payload, ...state.reports]
        };
   case "EDIT_REPORT":
        return {
          ...state,
          reports: state.reports.map(report => report.id === action.payload.id ? (report = action.payload): report)
        };
      default:
        return state;
      }
  };
  state = {
    reports: [],
    dispatch: action => this.setState(state => this.reducer(state, action))
  };
  componentDidMount() {
    const headerMethod = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };
    fetch("http://localhost:3001/api/v1/reports", headerMethod)
      .then(response => response.json())
      .then(data => this.setState({reports: data.message}))
      .catch(e => console.log(e));
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
