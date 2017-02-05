import React from 'react'
import {Link} from 'react-router';

class Results extends React.Component{
    render(){
        return(
           <div>
               Results will be here
               <Link to="/OneRepos"><p>repos 1</p></Link>
               <Link to="/OneRepos"><p>repos 2</p></Link>
               <Link to="/OneRepos"><p>repos 3</p></Link>
               <Link to="/OneRepos"><p>repos 4</p></Link>
               <Link to="/OneRepos"><p>repos 5</p></Link>
           </div>
        )
    }
}
export default Results