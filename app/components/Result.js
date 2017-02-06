import React from 'react'
import {Link} from 'react-router';


class Results extends React.Component{

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
                            {this.props.gitData.full_name}
                       </Link>
                   </td>
                   <td className="table_td">{this.props.gitData.owner.login}</td>
                   <td className="table_td">{this.props.gitData.stargazers_count}</td>
            </tr>



        )
    }
}
export default Results;