import React from 'react';
import PropTypes from 'prop-types';

export const User = (props) => {
    return (
        <div>
            <p>
                {props.name} status: <span>{props.isOnline ? ' online' : 'offline'}</span>
            </p>
        </div>
    );
}
User.propTypes = {
    name: PropTypes.string,
    isOnline: PropTypes.bool.isRequired
}
User.defaultProps = {
    name: 'Unknown'
}
