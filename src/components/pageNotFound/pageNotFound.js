import React, { Component } from 'react';

export default class PageNotFound extends Component{

    render(){
        return (
            <div>The request page {this.props.location.pathname} was not found!</div>
        );
    }
}