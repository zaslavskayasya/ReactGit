import React from 'react'
import Form from './Form'
import {Link} from 'react-router';

class Results extends React.Component{


    render(){
        return(
           <div>
               <Link to="/OneRepos"><p>{this.props.gitData.created_at}</p></Link>
           </div>
        )
    }
}
export default Results