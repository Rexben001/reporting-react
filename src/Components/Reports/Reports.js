import React, { Component } from "react";
import Report from "./Report";
import { Consumer } from "../../context";

class Reports extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { reports } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Reporting</span> App
              </h1>
              {reports.map(report => (
                <Report key={report.id} report={report} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Reports;
