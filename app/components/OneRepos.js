import React from 'react'


class OneRepos extends React.Component{
   /* constructor(){
        super();
        this.state = {
            searchName: ''
        }
    }*/

  /*  componentDidMount(){
        this.setState({
            searchName: this.props.params.info
        })
        let y = this.state.SearchWord;
    }*/

    render(){
        return(
            <div>
                <h1>{this.props.params.info}</h1>
                <h3>{this.props.params.info.stars}</h3>

            </div>
        )
    }
}
export default OneRepos