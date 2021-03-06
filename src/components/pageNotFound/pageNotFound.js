// @flow
import React from 'react';

type Props = {
    location: {
        +pathname: string // read-only property, provided by react router
    }
};

export default class PageNotFound extends React.Component<Props>{

    render(){
        return (
            <div>The request page {this.props.location.pathname} was not found!</div>
        );
    }
}