import React from 'react'
import Header from './Header'
import Form from './Form'
import {Link} from 'react-router';

class Main extends React.Component{
    render(){
        return(
            <div>
                <h2> Main part </h2>
                <Header />
                <Form />

                <Link to="/results"><button>Results</button></Link>
                <Link to="/OneRepos"><button>One repo</button></Link>


                {this.props.children}

             </div>




        )
    }
}
export default Main