import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { Consumer } from '../../context';

class Report extends Component {
    static propTypes = {
        report: PropTypes.object.isRequired
    }
    state = { showInfo: false };
    deleteReport = (id, dispatch) => {
         const headerMethod = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      }
    };
         fetch(`http://localhost:3001/api/v1/reports/${id}/cancel`, headerMethod)
      .then(response => response.json())
      .then(data => dispatch({ type: 'DELETE_REPORT', payload: id }))
      .catch(e => console.log(e));
        
    }
    render() {
        const { id, name, latitude, description, status, longitude, placedBy } = this.props.report;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card card-body mb-3">
                            <h4>
                                {name}
                                <span style={{ fontStyle: 'italic', color: 'blue', cursor: 'pointer' }} onClick={() => this.setState({ showInfo: !this.state.showInfo })}> v</span>
                                <span style={{ fontStyle: 'italic', color: 'red', cursor: 'pointer', float: 'right' }} onClick={this.deleteReport.bind(this, id, dispatch)}> X</span>
                                <span style={{ fontStyle: 'italic', color: 'green', cursor: 'pointer', float: 'right', marginRight: '10px'}}><Link to={`contacts/edit/${id}`}> Edit</Link></span>
                            </h4>
                            {this.state.showInfo ? (
                                <ul className="list-group">
                                    <li className="list-group-item">Latitude: {latitude}</li>
                                    <li className="list-group-item">Longitude: {longitude}</li>
                                    <li className="list-group-item">PlacedBy: {placedBy}</li>                                    
                                    <li className="list-group-item">Description: {description}</li>
                                    <li className="list-group-item">Status: {status}</li>

                                </ul>
                            ) : null}
                        </div >
                    )
                }}
            </Consumer>
        )
    }
}

// Contact.propTypes = {
//     name: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
//     phone: PropTypes.string.isRequired,

// }
export default Report;