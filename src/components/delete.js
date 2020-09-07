import React, { Component } from 'react'
import axios from 'axios'

export class Delete extends Component {
    componentDidMount =() =>{
        const id = this.props.match.params.id;
        axios.delete(`http://localhost:4000/api/ninjas/${id}`)
        .then((res) => {
            console.log('Student successfully deleted!')
        }).catch((error) => {
            console.log(error)
        })
        
        alert('Record Deleted');
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Delete
