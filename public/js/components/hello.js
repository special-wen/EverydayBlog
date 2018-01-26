import React from 'react';
import PropTypes from 'prop-types';
export default class Hello extends React.Component {
    render() {
        const {hello,onDisplayHello} = this.props;
        return <div>
            {hello}
            <button  onClick={onDisplayHello}>点击</button>
        </div>
    }
}
Hello.propTypes = {
    hello: PropTypes.string.isRequired,
    onDisplayHello: PropTypes.func.isRequired
};