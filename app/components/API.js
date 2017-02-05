import React from 'react'
import axios from 'axios'

let API = {
    getGitSearch: function (x) {
        return new Promise (function (resolve, reject) {
            axios.get('https://api.github.com/search/repositories', {
                    params: {
                        q: x
                    }
                }
            ).then(function(data){
                resolve(data.data);
                console.log(data.data.items);
            })
        })
    }
}
export default API;