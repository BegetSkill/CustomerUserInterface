import React from 'react';
import ReactDom from 'react-dom';

class AppComponent extends React.Component {
    render() {
        return <h6>welcome to react world.</h6>
    }
}

var container = document.getElementById("container");
ReactDom.render(<AppComponent />, container);