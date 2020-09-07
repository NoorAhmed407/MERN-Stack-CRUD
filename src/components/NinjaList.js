import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';


export class NinjaList extends Component {

    state = {
        ninjas: []
    }

  componentDidMount = () =>{
      debugger
    axios.get('http://localhost:4000/api/ninjas/')
    .then(res => {
      this.setState({
        ninjas: res.data
      });
      console.log(this.state);
    })
    .catch((error) => {
      console.log(error);
    });
  }

    render() {
        return (
            <div className="container">
                <h1 className="my-5">Ninja List 
                <span className="float-right">
                  <Link 
                  to="/createninja"
                  className="btn btn-success"
                  >Crate Ninja</Link>
                </span>
                </h1>
                <table className="table">
                  <thead className="thead-dark text-center">
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Rank</th>
                      <th scope="col">Operation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.ninjas.map((ninja,ind)=>{
                        return (
                          <tr 
                          className="text-center" 
                          key={ind}>
                            <td>{ninja.name}</td>
                            <td>{ninja.rank}</td>
                            <td>
                              <Link 
                              to={`/editninja/${ninja._id}`}
                              className="btn btn-small btn-primary m-1">Edit</Link>
                              <button className="btn btn-small btn-danger m-1">Delete</button>
                            </td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
            </div>
        )
    }
}

export default NinjaList;
