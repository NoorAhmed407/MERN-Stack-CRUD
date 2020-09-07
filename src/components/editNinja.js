import React, { Component } from 'react'
import axios from 'axios';

export class EditNinja extends Component {
    state = {
        name: "",
        rank: ""
    }

    handleChange = (event) =>{
        this.setState({[event.target.name]: event.target.value});
    }

    componentDidMount =()=>{
        const id = this.props.match.params.id;
        // console.log(id);
        axios.put(`http://localhost:4000/api/ninjas/${id}`)
        .then(res=>{
            this.setState({
                name: res.data.name,
                rank: res.data.rank
            })
        })
    }

    render() {
        // const id = this.props.match.params.id;
        // console.log(id);
        return (
            <div className="container">
                <h1 className="my-3">Edit Ninja</h1>
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input 
                        onChange = {this.handleChange}
                        type="text" 
                        name="name"
                        className="form-control" 
                        id="exampleInputEmail1" 
                        value={this.state.name}
                        placeholder="Enter your Name here.." />
                    </div>

                    <div className="form-group">
                        <label>Rank</label>
                        <input 
                        type="text"
                        onChange={this.handleChange}
                        className="form-control" 
                        name="rank" 
                        value={this.state.rank}
                        placeholder="Enter your Rank here.." />
                    </div>

                    <button
                    className="btn btn-primary"
                    onClick={this.submit}
                    >Edit Ninja</button>
                    </form>
            </div>
        )
    }
}

export default EditNinja;
