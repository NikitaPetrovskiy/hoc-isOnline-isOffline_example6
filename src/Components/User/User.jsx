import React from 'react';

export const User = (props) => {
    return (
        <div>
            <p>
                {props.name || 'unknown'} status: <span>{props.isOnline ? ' online' : 'ofline'}</span>
            </p>
        </div>
    );
}
