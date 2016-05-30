import React from 'react';
import {
    Tabs,
    Tab
} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

import HelloMessages from './HelloMessages'
import Timer from './Timer'
import TodoList from './TodoList'
import MarkdownEditor from './MarkdownEditor'

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
};

function handleActive(tab) {
    alert(`A tab with this route property ${tab.props.route} was activated.`);
}

class TabsExampleSimple extends React.Component {

    getChildContext() {
        return {
            muiTheme: getMuiTheme(baseTheme)
        };
    }

    render() {
        return ( <Tabs >
            <Tab label = "Hello" >
            <div >
            <h2 style = {
                styles.headline
            } > HelloMessages </h2> <HelloMessages / >
            </div> </Tab> <Tab label = "Timer" >
            <div >
            <h2 style = {
                styles.headline
            } > Timer </h2> <Timer / >
            </div> </Tab>
            <Tab label = "Todo" >
            <div >
            <h2 style = {
                styles.headline
            } > Todo </h2>
            <TodoList / >
            </div> </Tab>
            <Tab label = "Markdown" >
            <div >
            <h2 style = {
                styles.headline
            } > MarkdownEditor </h2>
            < MarkdownEditor/ >
            </div> </Tab>
            </Tabs>
        )
    }
}
TabsExampleSimple.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};
export default TabsExampleSimple;
