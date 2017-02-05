import React from 'react'
import OneRepos from './OneRepos'
import Form from './Form'
import {Link} from 'react-router';

class Results extends React.Component{
    constructor(){
        super();
        this.state ={
            data: ''
        }
    }

    componentDidMount() {
        this.setState({
            data: this.props.gitData
        })
    }

    render(){
        return(
           <div>
               <Link to={"/OneRepos/"+ this.props.gitData.owner.login + "/" + this.props.gitData.stargazers_count} data={this.state.data}  >
                    <p>{this.props.gitData.full_name}</p>
                    <p>{this.props.gitData.owner.login}</p>
                    <p>{this.props.gitData.stargazers_count}</p>

               </Link>

           </div>
        )
    }
}
export default Results;