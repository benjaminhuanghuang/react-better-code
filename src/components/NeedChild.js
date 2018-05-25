import React from 'react';
import PropTypes from 'prop-types';

class NeedChild extends React.Component {
    render() {
        return (
            <h1>Hello, {this.props.name}</h1>
        );
    }
}
// With PropTypes.element you can specify that only a single child can be passed to a component as children.
NeedChild.propTypes = {
    children: PropTypes.element.isRequired
};