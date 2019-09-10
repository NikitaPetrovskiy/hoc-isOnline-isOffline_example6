import React from 'react';

export function withStatusComponent (Component) {
    return class extends React.Component {
        static displayName = '_withStatusComponent';
        constructor(props) {
            super(props);
            this.state = {
                    status : navigator.onLine
            }
        }
        render() {
            return <Component {...this.state}{...this.props}
                              isOnline={this.state.status} />
        }
    }
}
