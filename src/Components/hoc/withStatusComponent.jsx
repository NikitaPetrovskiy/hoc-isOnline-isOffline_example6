import React from 'react';

const getDisplayName = (Component) => {
    return Component.displayName || Component.name
    || 'Component';
}

export function withStatusComponent (Component) {
    class WithStatusComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                    status : navigator.onLine
            }
            this.onStatusChange = this.onStatusChange.bind(this);
        }
        onStatusChange() {
            this.setState({status : navigator.onLine})
        }
        componentDidMount() {
            window.addEventListener('online', this.onStatusChange)
            window.addEventListener('offline', this.onStatusChange)
        }
        componentWillUnmount() {
            window.removeEventListener('online', this.onStatusChange)
            window.removeEventListener('offline', this.onStatusChange)
        }

        render() {
            return <Component {...this.props} isOnline={this.state.status} />
        }
    }
    WithStatusComponent.displayName = `_WithStatusComponent(${getDisplayName(Component)})`;
    return WithStatusComponent;
}
