import React from 'react'
import OneRepos from './OneRepos'
import Form from '../../Form'
import {Link} from 'react-router';
import { Table } from 'reactstrap';

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
            <tr className="table_tr">
                <td className="table_td">
                       <Link to={"/OneRepos/" +
                       this.props.gitData.owner.id
                       + "/"
                       + this.props.gitData.owner.login
                       + "/"
                       + this.props.gitData.name
                       + "/"
                       + this.props.gitData.watchers


                       }  >
                            {this.props.gitData.full_name},{this.props.key}
                       </Link>
                   </td>
                   <td className="table_td">{this.props.gitData.owner.login}</td>
                   <td className="table_td">{this.props.gitData.stargazers_count}</td>
            </tr>



        )
    }
}
export default Results;