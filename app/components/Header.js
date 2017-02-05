import React from 'react'
import { Jumbotron } from 'reactstrap';


class Header extends React.Component{
    render(){
        return(
            <header className="header">
                <Jumbotron>
                    <div className="headerPart">
                        <h1 className="h1" > GitHub </h1>
                        <p className="header_description"> Repositories Search App </p>
                    </div>
                      <div className="headerPart">
                          <div >
                              <img  src="./img/react.png"/>
                          </div>
                      </div>
                      <div className="headerPart">
                              <div >
                              <img className="header_img" src="./img/Octocat.png"/>
                         </div>
                     </div>

                </Jumbotron>

            </header>

        )
    }
}
export default Header