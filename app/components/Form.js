import React from 'react'


class Form extends React.Component{

    constructor(){
        super();
        this.state = {
            SearchWord : ''
        }

    }

    SearchInputChange = (evt) => {
        this.setState({
            SearchWord: evt.target.value
        })

      console.log(this.state.SearchWord)

    }

    render(){
        return(
            <div>
                <input onChange={this.SearchInputChange.bind(this)}  type="text"/>
               {this.state.SearchWord}
            </div>
        )
    }
}
export default Form