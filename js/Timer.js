'use strict'
import React from 'react';
import ReactDOM from 'react-dom';

var Timer = React.createClass({
    getInitialState: function() {
        return {
            secondsElapsed: 0
        };
    },
    tick: function() {
        this.setState({
            secondsElapsed: this.state.secondsElapsed + 1
        });
    },
    componentDidMount: function() {
        this.interval = setInterval(this.tick, 1000);
    },
    componentWillUnmount: function() {
        clearInterval(this.interval);
    },
    render: function() {

        var imgStyle = {
            margin: "10px 0 0 0"
        };

        return ( < div > Seconds Elapsed: {
            this.state.secondsElapsed
        }< img src = "../images/sampleOfTimer.png"
        style = {
            imgStyle
        }
        /> < /div>);
    }
});

export default Timer;
