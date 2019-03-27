import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';

class AddReport extends Component {
    state = {
        name: '',
        latitude: '',
        description: '',
        status: '',
        longitude: '',
        placedBy: ''
    }
    onChange = e => this.setState({ [e.target.name]: e.target.value })
  
    onSubmit = (dispatch, e) => {
        e.preventDefault();

        const { name, latitude, description, status, longitude, placedBy } = this.state;
        const newReport = {
            name,
            latitude,
            description,
            longitude,
            status,
            placedBy,
        };
         const headerMethod = {
      method: "POST",
      body: JSON.stringify(newReport),
      headers: {
        "Content-Type": "application/json"
      }
    };
  fetch(`http://localhost:3001/api/v1/reports`, headerMethod)
      .then(response => response.json())
      .then(res => dispatch({ type: 'ADD_CONTACT', payload: res.message[0] }))
      .catch(e => console.log(e));
        

        this.setState({
            name: '',
        latitude: '',
        description: '',
        status: '',
        longitude: '',
        placedBy: ''
        });
        this.props.history.push('/');
    }
    render() {
        const { name, latitude, description, status, longitude, placedBy } = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card mb-3">
                            <div className="card-header">Add Contacts
                        </div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <TextInputGroup
                                        name="name"
                                        label="Name"
                                        placeholder="Enter a name"
                                        value={name}
                                        onChange={this.onChange}
                                    />
                                    <TextInputGroup
                                        name="latitude"
                                        label="latitude"
                                        placeholder="Enter a latitude"
                                        value={latitude}
                                        onChange={this.onChange}
                                    />
                                      <TextInputGroup
                                        name="longitude"
                                        label="Longitude"
                                        placeholder="Enter longitude"
                                        value={longitude}
                                        onChange={this.onChange}
                                    />
                                    <TextInputGroup
                                        name="description"
                                        label="Description"
                                        placeholder="Enter a description"
                                        value={description}
                                        onChange={this.onChange}
                                    />
                                    
                                     <TextInputGroup
                                        name="status"
                                        label="Status"
                                        placeholder="Enter a status"
                                        value={status}
                                        onChange={this.onChange}
                                    />
                                     <TextInputGroup
                                        name="placedBy"
                                        label="PlacedBy"
                                        placeholder="Enter a status"
                                        value={placedBy}
                                        onChange={this.onChange}
                                    />
                                    <input type="submit" value="Add Reports" className="btn btn-light btn-block" />
                                </form>
                            </div>
                        </div>
                    );
                }}
            </Consumer>
        )

    }
}

export default AddReport;