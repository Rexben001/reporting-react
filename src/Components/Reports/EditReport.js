import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';

class EditReport extends Component {
    state = {
          name: '',
        latitude: '',
        description: '',
        status: '',
        longitude: '',
        placedBy: ''
    }
    onChange = e => this.setState({ [e.target.name]: e.target.value })
    componentDidMount() {
        const {id} = this.props.match.params;
            const headerMethod = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };
    const res = (data) => data.message[0];
         fetch(`http://localhost:3001/api/v1/reports/${id}`, headerMethod)
      .then(response => response.json())
      .then(data =>  this.setState({name: res(data).name, 
        latitude: res(data).latitude, description: res(data).description, 
        status: res(data).status, longitude: res(data).longitude, placedBy: res(data).placedBy}))
      .catch(e => console.log(e));
    }
    onSubmit = (dispatch, e) => {
        e.preventDefault();
    const {latitude, longitude} = this.state;
    const updateContact ={
        latitude,
        longitude,
    }
        const {id} = this.props.match.params;
  const headerMethod = {
      method: "PATCH",
      body: JSON.stringify(updateContact),
      headers: {
        "Content-Type": "application/json"
      }
    };
         fetch(`http://localhost:3001/api/v1/reports/${id}/edit`, headerMethod)
      .then(response => response.json())
      .then(res => dispatch({ type: 'EDIT_CONTACT', payload: res.message[0] }))
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
        const { name, latitude, longitude } = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card mb-3">
                            <div className="card-header">Add Report
                        </div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
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
                                        placeholder="Enter a longitude"
                                        value={longitude}
                                        onChange={this.onChange}
                                    />
                    
                                    <input type="submit" value="Update Report" className="btn btn-light btn-block" />
                                </form>
                            </div>
                        </div>
                    );
                }}
            </Consumer>
        )

    }
}

export default EditReport