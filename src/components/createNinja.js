import React, { Component } from 'react';
import axios from 'axios';    

export class CreateNinja extends Component {

    state = {
        name: "",
        rank: ""
    }
    
    handleChange = (event) =>{
        this.setState({[event.target.name]: event.target.value});
    }

    submit = (e)=>{
        e.preventDefault();
        console.log(this.state);
        const studentObject = {
            name: this.state.name,
            rank: this.state.rank
          };
          axios.post('http://localhost:4000/api/ninjas', studentObject)
            .then(res => console.log(res.data));
      
          this.setState({ name: '', rank: ''});
          this.props.history.push('/')
    }
       
        render() {
        return (
            <div className="container">
                <h1 className="my-3">Create Ninja</h1>
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input 
                        onChange = {this.handleChange}
                        type="text" 
                        name="name"
                        className="form-control" 
                        id="exampleInputEmail1" 
                        placeholder="Enter your Name here.." />
                    </div>

                    <div className="form-group">
                        <label>Rank</label>
                        <input 
                        type="text"
                        onChange={this.handleChange}
                        className="form-control" 
                        name="rank" 
                        placeholder="Enter your Rank here.." />
                    </div>

                    <button
                    className="btn btn-primary"
                    onClick={this.submit}
                    >Submit</button>
                    </form>
            </div>
        )
    }
}

export default CreateNinja
