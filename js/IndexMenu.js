'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme'


class MenuExampleSimple extends React.Component {

    getChildContext() {
        return {
            muiTheme: getMuiTheme(baseTheme)
        };
    }

    render() {
        return ( < div >
            < Paper style = {
                style
            } >
            < Menu >
            < MenuItem primaryText = "HelloMessage" / >
            < MenuItem primaryText = "Timer" / >
            < MenuItem primaryText = "TodoList" / >
            < MenuItem primaryText = "MarkdownEditor" / >
            < /Menu> < /Paper > < Paper style = {
                style
            } >
            < /Paper >  < /div >
        )
    }
}
MenuExampleSimple.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};
export default Index;
