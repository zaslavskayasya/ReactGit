import React from 'react'
import Header from './Header'
import Results from './Result'
import Form from './Form'
import {Link} from 'react-router';
import API from './API'
import axios from 'axios'

class Main extends React.Component{

    constructor(){
        super();
        this.state = {
            SearchWord : '',
            SearchResult: []
        }
    }

    SearchInputChange = (evt) => {
        this.setState({
            SearchWord: evt.target.value
        })
        let x = this.state.SearchWord;
        console.log(x);
        API.getGitSearch(x).then((dataR)=> {
            console.log('done!');
            this.setState({
                SearchResult: dataR.items,
            })
        })
    }

    render(){
        return(
            <div>
                <Header />
                <div>
                    <input onChange={this.SearchInputChange.bind(this)}  type="text"/>
                    {this.state.SearchWord}
                </div>
                {
                    this.state.SearchResult.map((git, index) => {
                        return ( <Results gitData={git} key={index} />

                        )
                    })
                }


                {this.props.children}

             </div>
         )
    }
}
export default Main