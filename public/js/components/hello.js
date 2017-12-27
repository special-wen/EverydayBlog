import React from 'react';

export default class Hello extends React.Component {
    displayHello() {
        this.props.onDisplayHello();
    }

    render() {
        return <div>
            {this.props.hello}
            <button onClick={this.displayHello.bind(this)}>点击</button>
        </div>
    }
}