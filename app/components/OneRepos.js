import React from 'react'
import { Card, Button, CardTitle, CardText } from 'reactstrap';


class OneRepos extends React.Component{


    render(){
        return(
                <Card block className="card">
                    <CardTitle>{this.props.params.login}</CardTitle>
                    <CardText>
                        <img className="avatar"
                             src={"https://avatars.githubusercontent.com/u/"
                             +this.props.params.id+"?v=3"}/>

                        <h4>about user</h4>
                        <p>ID: <span>{this.props.params.id}</span> </p>
                        <p>Login: <span>{this.props.params.login}</span> </p>
                        <a href={"https://github.com/"+this.props.params.login}>Page</a>
                        <h4>about repositories</h4>
                        <p>name: <span>{this.props.params.name}</span></p>
                        <p>Watchers: <span>{this.props.params.watchers}</span></p>
                        <a href={"https://github.com/"+ this.props.params.login+ "/"+this.props.params.name}>Reposit_adress</a>








                    </CardText>

                </Card>
        )
    }
}
export default OneRepos