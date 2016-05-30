'use strict'
import React from 'react';
import ReactDOM from 'react-dom';

var HelloMessages = React.createClass({
    render: function() {

        var imgStyle = {
                margin: "10px 0 0 0"
        };

        return <div > Hello {
            this.props.name
        } < img src = "../images/sampleOfHelloMessages.png"
        style = {imgStyle}
        /></div > ;
    }
});

export default HelloMessages;
