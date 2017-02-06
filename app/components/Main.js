import React from 'react'
import Header from './Header'
import Results from './Result'
import API from './API'
import {Form, Input} from 'reactstrap';
import { Table } from 'reactstrap';

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
                <Form >
                    <Input className="SearchInput" onChange={this.SearchInputChange.bind(this)}
                           type="text" placeholder="Search here" />
                </Form>

                <Table className="table" hover>
                    <thead className="table_head">
                    <tr>
                        <th className="table_head_name">Repositories</th>
                        <th className="table_head_name">Name</th>
                        <th className="table_head_name">Stars</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.SearchResult.map((git, index) => {
                            return ( <Results gitData={git} key={index} />

                            )
                        })
                    }
                    </tbody>
                </Table>

                {this.props.children}

             </div>
         )
    }
}
export default Main