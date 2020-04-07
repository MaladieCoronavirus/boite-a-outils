import React from 'react';

class DoNotTrackOption extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: false,
        };

        this.handleChanges = ({target}) => {
            const value = (target.checked ? 'yes' : 'no');
            document.cookie = `doNotTrack=${value};path=/`;
            window.location.reload();
        }
    }

    componentDidMount() {
        const checked = window.doNotTrack === '1' || window.doNotTrack === 'yes';

        this.setState({checked});
    }

    render() {
        const {children, ...rest} = this.props;

        return <label {...rest}>
            <input
                type="checkbox"
                checked={this.state.checked}
                onChange={this.handleChanges}
            />
            {children}
        </label>
    }
}

export default DoNotTrackOption;
