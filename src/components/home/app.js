import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class App extends Component{

    render(){
        return (
            <div>
                <div>This is our home page</div>
                <div>
                    <Link to={'/page1'}>Page 1</Link>
                </div>
                <div>
                    <Link to={'/page2'}>Page 2</Link>
                </div>
                <div>
                    <Link to={'/test-page'}>Not found page</Link>
                </div>
            </div>
        );
    }
}